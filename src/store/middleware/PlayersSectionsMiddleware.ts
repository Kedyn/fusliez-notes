import { DEFAULT_SECTION, DEFAULT_SECTIONS } from "constants/sections";
import { IPlayer, IPlayersSection } from "utils/types";
import {
  getDefaultSection,
  getPlayersSections,
  resetPlayersSections,
  resetPlayersSectionsPositions,
  setDefaultSection,
  setPlayersFromSection,
  setPlayersSections,
  setPlayersSectionsTitle,
} from "store/slices/PlayersSectionsSlice";

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const PlayersSectionsMiddleware: Middleware<unknown, RootState> = (
  store
) => (next) => (action) => {
  const state = store.getState();

  let defaultSection = getDefaultSection(state);
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
    case setDefaultSection.type:
      defaultSection = action.payload;

      break;

    case setPlayersSections.type:
      sections = [
        ...action.payload.map((section: IPlayersSection, index: number) => {
          if (section.id === defaultSection) {
            defaultSection = index;
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

      newSections[defaultSection].players = players;

      sections = newSections;

      break;

    case resetPlayersSections.type:
      defaultSection = DEFAULT_SECTION;
      sections = DEFAULT_SECTIONS;

      break;

    default:
      edit = false;
  }

  if (edit) {
    localStorage.setItem(
      `${NAMESPACE}sections`,
      JSON.stringify({
        defaultSection,
        sections,
      })
    );
  }

  return next(action);
};
