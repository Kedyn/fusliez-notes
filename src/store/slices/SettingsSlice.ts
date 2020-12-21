import { ISettingsState, IStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SETTINGS } from "constants/settings";
import { NAMESPACE } from "constants/main";

function getInitialSate(): ISettingsState {
  const localSettingsData: string | null = localStorage.getItem(
    `${NAMESPACE}settings`
  );

  if (localSettingsData) {
    const settingsObject = JSON.parse(localSettingsData);

    return {
      showNames: settingsObject.showNames ?? DEFAULT_SETTINGS.showNames,
      isColorBlind:
        settingsObject.isColorBlind ?? DEFAULT_SETTINGS.isColorBlind,
    };
  }

  return DEFAULT_SETTINGS;
}

const SettingsSlice = createSlice({
  name: "Settings",
  initialState: getInitialSate(),
  reducers: {
    setShowNames: (state: ISettingsState, action: PayloadAction<boolean>) => ({
      ...state,
      showNames: action.payload,
    }),
    toggleShowNames: (state: ISettingsState) => ({
      ...state,
      showNames: !state.showNames,
    }),

    setIsColorBlind: (
      state: ISettingsState,
      action: PayloadAction<boolean>
    ) => ({
      ...state,
      isColorBlind: action.payload,
    }),
    toggleIsColorBlind: (state: ISettingsState) => ({
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

export const getShowNames = (state: IStoreState): boolean =>
  state.SettingsState.showNames;

export const getIsColorBlind = (state: IStoreState): boolean =>
  state.SettingsState.isColorBlind;

export default SettingsSlice;
