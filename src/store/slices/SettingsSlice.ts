import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SETTINGS_STATE } from "constants/settings";
import { ISettingsState } from "utils/types/settings";
import { IStoreState } from "utils/types/store";
import { NAMESPACE } from "constants/main";

function getInitialSate(): ISettingsState {
  const localSettingsData: string | null = localStorage.getItem(
    `${NAMESPACE}settings`
  );

  if (localSettingsData) {
    const settingsObject = JSON.parse(localSettingsData);

    return {
      showNames: settingsObject.showNames ?? DEFAULT_SETTINGS_STATE.showNames,
      isColorBlind:
        settingsObject.isColorBlind ?? DEFAULT_SETTINGS_STATE.isColorBlind,
    };
  }

  return { ...DEFAULT_SETTINGS_STATE };
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

    resetSettingsState: () => ({
      ...DEFAULT_SETTINGS_STATE,
    }),
  },
});

export const {
  setShowNames,
  toggleShowNames,

  setIsColorBlind,
  toggleIsColorBlind,

  resetSettingsState,
} = SettingsSlice.actions;

export const getShowNames = (state: IStoreState): boolean =>
  state.Settings.showNames;

export const getIsColorBlind = (state: IStoreState): boolean =>
  state.Settings.isColorBlind;

export default SettingsSlice;
