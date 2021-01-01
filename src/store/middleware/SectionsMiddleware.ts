import {
  DEFAULT_DEAD_SECTION,
  DEFAULT_RESET_SECTION,
  DEFAULT_UNUSED_SECTION,
} from "constants/sections";
import { ISection, ISectionsState } from "utils/types/sections";
import {
  addNewSection,
  delSection,
  getSectionsState,
  movePlayersToResetSection,
  resetSectionsState,
  resetSpecialSections,
  setDeadSection,
  setResetSection,
  setSectionPlayers,
  setSectionTitle,
  setSections,
  setUnusedSection,
} from "store/slices/SectionsSlice";
import {
  getDefaultSectionsState,
  movePlayersToSection,
} from "store/shared/sections";

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const SectionsMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();
  const currentSectionsState = getSectionsState(state);

  let sectionsState: ISectionsState = {
    resetSection: currentSectionsState.resetSection,
    deadSection: currentSectionsState.deadSection,
    unusedSection: currentSectionsState.unusedSection,
    sections: [
      ...currentSectionsState.sections.map((section) => ({
        id: section.id,
        title: section.title,
        players: [
          ...section.players.map((player) => ({
            id: player.id,
          })),
        ],
      })),
    ],
  };
  let edit = true;

  switch (action.type) {
    case setResetSection.type:
      sectionsState.resetSection = action.payload;

      break;

    case setDeadSection.type:
      sectionsState.deadSection = action.payload;

      break;

    case setUnusedSection.type:
      sectionsState.unusedSection = action.payload;

      break;

    case addNewSection.type:
      sectionsState.sections = [
        ...sectionsState.sections,
        { id: sectionsState.sections.length, title: "", players: [] },
      ];

      break;

    case delSection.type:
      let resetSection = sectionsState.resetSection;
      let deadSection = sectionsState.deadSection;
      let unusedSection = sectionsState.unusedSection;

      const sections: Array<ISection> = [];

      sectionsState.sections.forEach((section) => {
        if (section.id !== action.payload) {
          if (section.id === sectionsState.resetSection) {
            resetSection = sections.length;
          }
          if (section.id === sectionsState.deadSection) {
            deadSection = sections.length;
          }
          if (section.id === sectionsState.unusedSection) {
            unusedSection = sections.length;
          }

          sections.push({
            id: sections.length,
            title: section.title,
            players: section.players,
          });
        }
      });

      sectionsState = {
        resetSection,
        deadSection,
        unusedSection,
        sections,
      };

      break;

    case setSectionTitle.type:
      sectionsState.sections = [
        ...sectionsState.sections.map((section) => {
          const newSection = { ...section };

          if (section.id === action.payload.section) {
            newSection.title = action.payload.newTitle;
          }

          return newSection;
        }),
      ];

      break;

    case setSectionPlayers.type:
      sectionsState.sections = [
        ...sectionsState.sections.map((section) => {
          const newSection = { ...section };

          if (section.id === action.payload.section) {
            newSection.players = action.payload.newPlayers;
          }

          return newSection;
        }),
      ];

      break;

    case movePlayersToResetSection.type:
      sectionsState.sections = movePlayersToSection(
        sectionsState.sections,
        sectionsState.resetSection
      );

      break;

    case setSections.type:
      sectionsState.sections = action.payload;

      break;

    case resetSpecialSections.type:
      sectionsState.resetSection = DEFAULT_RESET_SECTION;
      sectionsState.deadSection = DEFAULT_DEAD_SECTION;
      sectionsState.unusedSection = DEFAULT_UNUSED_SECTION;

      break;

    case resetSectionsState.type:
      sectionsState = getDefaultSectionsState();

      break;

    default:
      edit = false;

      break;
  }

  if (edit) {
    localStorage.setItem(`${NAMESPACE}sections`, JSON.stringify(sectionsState));
  }

  return next(action);
};
