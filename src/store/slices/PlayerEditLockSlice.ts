import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStoreState } from "utils/types/store";

const PlayerEditLockSlice = createSlice({
  name: "PlayerEditLock",
  initialState: false,
  reducers: {
    setPlayerEditLock: (state: boolean, action: PayloadAction<boolean>) =>
      action.payload,

    togglePlayerEditLock: (state: boolean) => !state,
    resetPlayerEditLockState: () => false,
  },
});

export const {
  setPlayerEditLock,

  togglePlayerEditLock,

  resetPlayerEditLockState,
} = PlayerEditLockSlice.actions;

export const getPlayerEditLock = (state: IStoreState): boolean =>
  state.PlayerEditLock;

export default PlayerEditLockSlice;
