import { ISettings, IUISliceState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SETTINGS } from "utils/constants";

const SettingsSlice = createSlice({
  name: "Scores",
  initialState: DEFAULT_SETTINGS,
  reducers: {
    setShowNames: (state: ISettings, action: PayloadAction<boolean>) => ({
      ...state,
      showNames: action.payload,
    }),
    toggleShowNames: (state: ISettings) => ({
      ...state,
      showNames: !state.showNames,
    }),

    setIsColorBlind: (state: ISettings, action: PayloadAction<boolean>) => ({
      ...state,
      isColorBlind: action.payload,
    }),
    toggleIsColorBlind: (state: ISettings) => ({
      ...state,
      isColorBlind: !state.isColorBlind,
    }),

    resetSettings: () => ({
      ...DEFAULT_SETTINGS,
    }),
  },
});

export const {
  setShowNames,
  toggleShowNames,

  setIsColorBlind,
  toggleIsColorBlind,

  resetSettings,
} = SettingsSlice.actions;

export const getShowNames = (state: IUISliceState): boolean =>
  state.Settings.showNames;

export default SettingsSlice;
