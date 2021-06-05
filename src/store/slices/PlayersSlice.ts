import {
  IPlayer,
  IPlayerColor,
  IPlayersState,
  ISetPlayerNamePayload,
  ISetPlayerSectionPayload,
  ISetPlayerUsedEmergencyButton,
} from "utils/types/players";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getDefaultPlayersState,
  getInitialPlayersState,
  getNewPlayersState,
} from "store/shared/players";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { IStoreState } from "utils/types/store";

const PlayersSlice = createSlice({
  name: "Players",
  initialState: getInitialPlayersState(),
  reducers: {
    setPlayerName: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerNamePayload>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            name: action.payload.newName,
          };
        }

        return {
          ...state[player],
        };
      }),
    setPlayerUsedEmergencyButton: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerUsedEmergencyButton>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            usedEmergencyButton: action.payload.usedEmergencyButton,
          };
        }

        return {
          ...state[player],
        };
      }),

    setPlayerSection: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerSectionPayload>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            section: action.payload.newSection,
          };
        }

        return {
          ...state[player],
        };
      }),

    setPlayer: (state: IPlayersState, action: PayloadAction<IPlayer>) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.color) {
          return action.payload;
        }

        return {
          ...state[player],
        };
      }),

    setPlayersState: (
      state: IPlayersState,
      action: PayloadAction<IPlayersState>
    ) => action.payload,

    setPlayersSection: (state: IPlayersState, action: PayloadAction<number>) =>
      getNewPlayersState((player: IPlayerColor) => ({
        ...state[player],
        section: action.payload,
      })),

    resetPlayersNames: (state: IPlayersState) =>
      getNewPlayersState((player: IPlayerColor) => ({
        ...state[player],

        name: DEFAULT_PLAYERS_STATE[player].name,
      })),

    resetPlayersUsedEmergencyButton: (state: IPlayersState) =>
      getNewPlayersState((player: IPlayerColor) => ({
        ...state[player],
        usedEmergencyButton: DEFAULT_PLAYERS_STATE[player].usedEmergencyButton,
      })),

    resetPlayersState: () => getDefaultPlayersState(),
  },
});

export const {
  setPlayerName,
  setPlayerUsedEmergencyButton,
  setPlayerSection,
  setPlayer,
  setPlayersState,
  setPlayersSection,
  resetPlayersNames,
  resetPlayersUsedEmergencyButton,
  resetPlayersState,
} = PlayersSlice.actions;

export const getPlayer = (name: IPlayerColor) => (
  state: IStoreState
): IPlayer => state.Players[name];

export const getPlayers = (state: IStoreState): IPlayersState => state.Players;

export default PlayersSlice;
