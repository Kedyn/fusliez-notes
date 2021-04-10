import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStoreState } from "utils/types/store";

const PlayerEditLockSlice = createSlice({
  name: "PlayerEditLock",
  initialState: false,
  reducers: {
    setPlayerEditLock: (state: boolean, action: PayloadAction<boolean>) =>
      action.payload,

    togglePlayerEditLock: (state: boolean) => !state,
  },
});

export const {
  setPlayerEditLock,

  togglePlayerEditLock,
} = PlayerEditLockSlice.actions;

export const getPlayerEditLock = (state: IStoreState): boolean =>
  state.PlayerEditLock;

export default PlayerEditLockSlice;
