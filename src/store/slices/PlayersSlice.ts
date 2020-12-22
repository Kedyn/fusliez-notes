import {
  IPlayer,
  IPlayerColor,
  IPlayersState,
  ISetPlayerIsDeadPayload,
  ISetPlayerIsUsedPayload,
  ISetPlayerNamePayload,
  ISetPlayerPositionPayload,
} from "utils/types/players";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getDefaultPlayersState,
  getInitialPlayersState,
} from "store/shared/players";

import { IStoreState } from "utils/types/store";

const PlayersSlice = createSlice({
  name: "Players",
  initialState: getInitialPlayersState(),
  reducers: {
    setPlayerName: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerNamePayload>
    ) => {
      const newState = { ...state };

      newState[action.payload.player].name = action.payload.newName;

      return newState;
    },

    setPlayerPosition: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerPositionPayload>
    ) => {
      const newState = { ...state };

      newState[action.payload.player].position = action.payload.newPosition;

      return newState;
    },

    setPlayerIsDead: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerIsDeadPayload>
    ) => {
      const newState = { ...state };

      newState[action.payload.player].isDead = action.payload.newIsDead;

      return newState;
    },

    toggleIsDead: (
      state: IPlayersState,
      action: PayloadAction<IPlayerColor>
    ) => {
      const newState = { ...state };

      newState[action.payload].isDead = !state[action.payload].isDead;

      return newState;
    },

    setPlayerIsUsed: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerIsUsedPayload>
    ) => {
      const newState = { ...state };

      newState[action.payload.player].isUsed = action.payload.newIsUsed;

      return newState;
    },

    toggleIsUsed: (
      state: IPlayersState,
      action: PayloadAction<IPlayerColor>
    ) => {
      const newState = { ...state };

      newState[action.payload].isUsed = !state[action.payload].isUsed;

      return newState;
    },

    setPlayersState: (
      state: IPlayersState,
      action: PayloadAction<IPlayersState>
    ) => action.payload,

    resetPlayersState: () => getDefaultPlayersState(),
  },
});

export const {
  setPlayerName,
  setPlayerPosition,
  setPlayerIsDead,
  toggleIsDead,
  setPlayerIsUsed,
  toggleIsUsed,
  setPlayersState,
  resetPlayersState,
} = PlayersSlice.actions;

export const getPlayer = (name: IPlayerColor) => (
  state: IStoreState
): IPlayer => state.Players[name];

export const getPlayers = (state: IStoreState): IPlayersState => state.Players;

export default PlayersSlice;
