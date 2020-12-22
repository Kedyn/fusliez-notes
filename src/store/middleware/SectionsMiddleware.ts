import {
  DEFAULT_DEAD_SECTION,
  DEFAULT_RESET_SECTION,
  DEFAULT_UNUSED_SECTION,
} from "constants/sections";
import {
  getDefaultSectionsState,
  movePlayersToSection,
} from "store/shared/sections";
import {
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

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const SectionsMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();

  let sectionsState = getSectionsState(state);
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
