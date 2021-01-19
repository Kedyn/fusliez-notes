import {
  DEFAULT_DEAD_SECTION,
  DEFAULT_RESET_SECTION,
  DEFAULT_SECTIONS,
  DEFAULT_UNUSED_SECTION,
} from "constants/sections";
import { IPlayer, IPlayersSection } from "utils/types";
import {
  getDeadSectionId,
  getPlayersSections,
  getResetSectionId,
  getUnusedSectionId,
  resetPlayersSections,
  resetPlayersSectionsPositions,
  setDeadSection,
  setPlayersFromSection,
  setPlayersSections,
  setPlayersSectionsTitle,
  setResetSection,
  setUnusedSection,
} from "store/slices/PlayersSectionsSlice";

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const PlayersSectionsMiddleware: Middleware<unknown, RootState> = (
  store
) => (next) => (action) => {
  const state = store.getState();

  let resetSection = getResetSectionId(state);
  let deadSection = getDeadSectionId(state);
  let unusedSection = getUnusedSectionId(state);
  let sections = getPlayersSections(state).map((section) => ({
    id: section.id,
    title: section.title,
    players: section.players.map((player) => ({
      id: player.id,
      playerName: player.playerName,
      color: player.color,
    })),
  }));
  let edit = true;

  switch (action.type) {
    case setResetSection.type:
      resetSection = action.payload;

      break;

    case setDeadSection.type:
      deadSection = action.payload;

      break;

    case setUnusedSection.type:
      unusedSection = action.payload;

      break;

    case setPlayersSections.type:
      sections = [
        ...action.payload.map((section: IPlayersSection, index: number) => {
          if (section.id === resetSection) {
            resetSection = index;
          }

          return {
            ...section,

            id: index,
          };
        }),
      ];

      break;

    case setPlayersSectionsTitle.type:
      sections = sections.map((section: IPlayersSection, index: number) => {
        if (index === action.payload.index) {
          return {
            ...section,

            title: action.payload.title,
          };
        }

        return section;
      });

      break;

    case setPlayersFromSection.type:
      sections = sections.map((section: IPlayersSection) => {
        if (section.id === action.payload.sectionId) {
          return {
            ...section,

            players: action.payload.players.map((player: IPlayer) => ({
              id: player.id,
              playerName: player.playerName,
              color: player.color,
            })),
          };
        }

        return section;
      });

      break;

    case resetPlayersSectionsPositions.type:
      const newSections: Array<IPlayersSection> = [];
      let players: Array<IPlayer> = [];

      for (const section of sections) {
        newSections.push({
          ...section,

          players: [],
        });

        players = players.concat(section.players);
      }

      newSections[resetSection].players = players;

      sections = newSections;

      break;

    case resetPlayersSections.type:
      resetSection = DEFAULT_RESET_SECTION;
      deadSection = DEFAULT_DEAD_SECTION;
      unusedSection = DEFAULT_UNUSED_SECTION;
      sections = DEFAULT_SECTIONS;

      break;

    default:
      edit = false;
  }

  if (edit) {
    localStorage.setItem(
      `${NAMESPACE}sections`,
      JSON.stringify({
        resetSection,
        deadSection,
        unusedSection,
        sections,
      })
    );
  }

  return next(action);
};
