import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUIStoreState } from "utils/types";

const PlayerEditLockSlice = createSlice({
  name: "PlayerEditLock",
  initialState: false,
  reducers: {
    setPlayerEditLock: (state: boolean, action: PayloadAction<boolean>) =>
      action.payload,

    togglePlayerEditLock: (state: boolean) => !state,
    resetLock: () => false,
  },
});

export const {
  setPlayerEditLock,

  togglePlayerEditLock,

  resetLock,
} = PlayerEditLockSlice.actions;

export const getPlayerEditLock = (state: IUIStoreState): boolean =>
  state.PlayerEditLock;

export default PlayerEditLockSlice;
