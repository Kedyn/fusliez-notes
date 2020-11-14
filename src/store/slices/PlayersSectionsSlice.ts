import { DEFAULT_SECTION, DEFAULT_SECTIONS } from "constants/sections";
import {
  IPlayer,
  IPlayersSection,
  IPlayersSectionsSlice,
  IUIStoreState,
} from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { NAMESPACE } from "constants/main";

function getInitialState(): IPlayersSectionsSlice {
  const localPlayersSectionsData: string | null = localStorage.getItem(
    `${NAMESPACE}sections`
  );

  if (localPlayersSectionsData) {
    const playersSectionsObject = JSON.parse(localPlayersSectionsData);

    return {
      defaultSection: playersSectionsObject.defaultSection ?? DEFAULT_SECTION,
      sections: playersSectionsObject.sections ?? DEFAULT_SECTIONS,
    };
  }

  return {
    defaultSection: DEFAULT_SECTION,
    sections: DEFAULT_SECTIONS,
  };
}

function getPlayersSectionsFromOriginalPositions(
  defaultSection: number,
  sections: Array<IPlayersSection>
): Array<IPlayersSection> {
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

  return newSections;
}

const PlayersSectionsSlice = createSlice({
  name: "PlayersSections",
  initialState: getInitialState(),
  reducers: {
    setDefaultSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      defaultSection: action.payload,
    }),

    setPlayersSections: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<Array<IPlayersSection>>
    ) => {
      let newDefaultSection = -1;

      return {
        ...state,

        sections: [
          ...action.payload.map((section, index) => {
            if (section.id === state.defaultSection) {
              newDefaultSection = index;
            }

            return {
              ...section,

              id: index,
            };
          }),
        ],

        defaultSection: newDefaultSection,
      };
    },

    setPlayersSectionsTitle: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<{
        index: number;
        title: string;
      }>
    ) => ({
      ...state,

      sections: [
        ...state.sections.map((section, index) => {
          if (index === action.payload.index) {
            return {
              ...section,

              title: action.payload.title,
            };
          }

          return section;
        }),
      ],
    }),

    setPlayersFromSection: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<{
        sectionId: number;
        players: Array<IPlayer>;
      }>
    ) => {
      return {
        ...state,

        sections: [
          ...state.sections.map((section) => {
            if (section.id === action.payload.sectionId) {
              return {
                ...section,

                players: action.payload.players,
              };
            }

            return section;
          }),
        ],
      };
    },

    resetPlayersSectionsPositions: (state: IPlayersSectionsSlice) => ({
      ...state,

      sections: getPlayersSectionsFromOriginalPositions(
        state.defaultSection,
        state.sections
      ),
    }),

    resetPlayersSections: () => ({
      defaultSection: DEFAULT_SECTION,
      sections: [...DEFAULT_SECTIONS.map((section) => section)],
    }),
  },
});

export const {
  setDefaultSection,

  setPlayersSections,

  setPlayersSectionsTitle,

  setPlayersFromSection,

  resetPlayersSectionsPositions,

  resetPlayersSections,
} = PlayersSectionsSlice.actions;

export const getDefaultSection = (state: IUIStoreState): number =>
  state.PlayersSections.defaultSection;

export const getPlayersSections = (
  state: IUIStoreState
): Array<IPlayersSection> => state.PlayersSections.sections;

export default PlayersSectionsSlice;
