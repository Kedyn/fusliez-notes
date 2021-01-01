import {
  ISection,
  ISectionsState,
  ISetSectionPlayersPayload,
  ISetSectionTitlePayload,
} from "utils/types/sections";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getDefaultSectionsState,
  getDefaultSpecialSections,
  getInitialSectionsState,
  movePlayersToSection,
} from "store/shared/sections";

import { IStoreState } from "utils/types/store";
import { ItemInterface } from "react-sortablejs";

const SectionsSlice = createSlice({
  name: "Sections",
  initialState: getInitialSectionsState(),
  reducers: {
    setResetSection: (
      state: ISectionsState,
      action: PayloadAction<number>
    ) => ({
      ...state,

      resetSection: action.payload,
    }),

    setDeadSection: (state: ISectionsState, action: PayloadAction<number>) => ({
      ...state,

      deadSection: action.payload,
    }),

    setUnusedSection: (
      state: ISectionsState,
      action: PayloadAction<number>
    ) => ({
      ...state,

      unusedSection: action.payload,
    }),

    addNewSection: (state: ISectionsState) => ({
      ...state,

      sections: [
        ...state.sections,
        { id: state.sections.length, title: "", players: [] },
      ],
    }),

    delSection: (state: ISectionsState, action: PayloadAction<number>) => {
      let resetSection = state.resetSection;
      let deadSection = state.deadSection;
      let unusedSection = state.unusedSection;

      const sections: Array<ISection> = [];

      state.sections.forEach((section) => {
        if (section.id !== action.payload) {
          if (section.id === state.resetSection) {
            resetSection = sections.length;
          }
          if (section.id === state.deadSection) {
            deadSection = sections.length;
          }
          if (section.id === state.unusedSection) {
            unusedSection = sections.length;
          }

          sections.push({
            id: sections.length,
            title: section.title,
            players: section.players,
          });
        }
      });

      return {
        resetSection,
        deadSection,
        unusedSection,
        sections,
      };
    },

    setSectionTitle: (
      state: ISectionsState,
      action: PayloadAction<ISetSectionTitlePayload>
    ) => ({
      ...state,

      sections: [
        ...state.sections.map((section) => {
          const newSection = { ...section };

          if (section.id === action.payload.section) {
            newSection.title = action.payload.newTitle;
          }

          return newSection;
        }),
      ],
    }),

    setSectionPlayers: (
      state: ISectionsState,
      action: PayloadAction<ISetSectionPlayersPayload>
    ) => ({
      ...state,

      sections: [
        ...state.sections.map((section) => {
          const newSection = { ...section };

          if (section.id === action.payload.section) {
            newSection.players = action.payload.newPlayers;
          }

          return newSection;
        }),
      ],
    }),

    movePlayersToResetSection: (state: ISectionsState) => ({
      ...state,

      sections: movePlayersToSection(state.sections, state.resetSection),
    }),

    setSections: (
      state: ISectionsState,
      action: PayloadAction<Array<ISection>>
    ) => ({
      ...state,
      sections: action.payload,
    }),

    resetSpecialSections: (state: ISectionsState) => ({
      ...state,

      ...getDefaultSpecialSections(),
    }),

    resetSectionsState: () => getDefaultSectionsState(),
  },
});

export const {
  setResetSection,
  setDeadSection,
  setUnusedSection,
  addNewSection,
  delSection,
  setSectionTitle,
  setSectionPlayers,
  movePlayersToResetSection,
  setSections,
  resetSpecialSections,
  resetSectionsState,
} = SectionsSlice.actions;

export const getResetSectionId = (state: IStoreState): number =>
  state.Sections.resetSection;

export const getDeadSectionId = (state: IStoreState): number =>
  state.Sections.deadSection;

export const getUnusedSectionId = (state: IStoreState): number =>
  state.Sections.unusedSection;

export const getSections = (state: IStoreState): Array<ISection> =>
  state.Sections.sections;

export const getUsedPlayersIds = (state: IStoreState): Array<ItemInterface> => {
  const usedPlayers: Array<ItemInterface> = [];

  for (const section of state.Sections.sections) {
    if (section.id !== state.Sections.unusedSection) {
      usedPlayers.push(...section.players);
    }
  }

  return usedPlayers;
};

export const getSectionsState = (state: IStoreState): ISectionsState =>
  state.Sections;

export default SectionsSlice;
