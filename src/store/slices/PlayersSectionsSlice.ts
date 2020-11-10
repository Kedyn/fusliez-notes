import {
  DEFAULT_PLAYERS_CONTAINER,
  DEFAULT_PLAYERS_SECTIONS,
} from "utils/constants";
import {
  IPlayer,
  IPlayersSection,
  IPlayersSectionsSlice,
  IUIStoreState,
} from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function getInitialState(): IPlayersSectionsSlice {
  return {
    playersContainer: DEFAULT_PLAYERS_CONTAINER,
    sections: DEFAULT_PLAYERS_SECTIONS,
  };
}

function getPlayersSectionsFromOriginalPositions(
  playersContainer: number,
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

  newSections[playersContainer].players = players;

  return newSections;
}

const PlayersSectionsSlice = createSlice({
  name: "PlayersSections",
  initialState: getInitialState(),
  reducers: {
    setPlayersContainer: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      playersContainer: action.payload,
    }),

    setPlayersSections: (
      state: IPlayersSectionsSlice,
      action: PayloadAction<Array<IPlayersSection>>
    ) => {
      let newPlayersContainer = -1;

      return {
        ...state,

        sections: [
          ...action.payload.map((section, index) => {
            if (section.id === state.playersContainer) {
              newPlayersContainer = index;
            }

            return {
              ...section,

              id: index,
            };
          }),
        ],

        playersContainer: newPlayersContainer,
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
        state.playersContainer,
        state.sections
      ),
    }),

    resetPlayersSections: () => ({
      playersContainer: DEFAULT_PLAYERS_CONTAINER,
      sections: [...DEFAULT_PLAYERS_SECTIONS.map((section) => section)],
    }),
  },
});

export const {
  setPlayersContainer,

  setPlayersSections,

  setPlayersFromSection,

  setPlayersSectionsTitle,

  resetPlayersSectionsPositions,

  resetPlayersSections,
} = PlayersSectionsSlice.actions;

export const getPlayersContainer = (state: IUIStoreState): number =>
  state.PlayersSections.playersContainer;

export const getPlayersSections = (
  state: IUIStoreState
): Array<IPlayersSection> => state.PlayersSections.sections;

export const getAllPlayers = (state: IUIStoreState): Array<IPlayer> => {
  const allPlayers = [];

  for (const { players } of state.PlayersSections.sections) {
    if (!players.length) continue;
    allPlayers.push(...players);
  }

  return allPlayers;
};

export default PlayersSectionsSlice;
