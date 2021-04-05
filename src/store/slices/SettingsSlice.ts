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
      initMapWithAllPlayers:
        settingsObject.initMapWithAllPlayers ??
        DEFAULT_SETTINGS_STATE.initMapWithAllPlayers,
      mapPlayersScale:
        settingsObject.mapPlayersScale ??
        DEFAULT_SETTINGS_STATE.mapPlayersScale,
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

    setInitMapWithAllPlayers: (
      state: ISettingsState,
      action: PayloadAction<boolean>
    ) => ({
      ...state,
      initMapWithAllPlayers: action.payload,
    }),
    toggleInitMapWithAllPlayers: (state: ISettingsState) => ({
      ...state,
      initMapWithAllPlayers: !state.initMapWithAllPlayers,
    }),

    setMapPlayersScale: (
      state: ISettingsState,
      action: PayloadAction<number>
    ) => ({ ...state, mapPlayersScale: action.payload }),

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

  setInitMapWithAllPlayers,
  toggleInitMapWithAllPlayers,

  setMapPlayersScale,

  resetSettingsState,
} = SettingsSlice.actions;

export const getShowNames = (state: IStoreState): boolean =>
  state.Settings.showNames;

export const getIsColorBlind = (state: IStoreState): boolean =>
  state.Settings.isColorBlind;

export const getInitMapWithAllPlayers = (state: IStoreState): boolean =>
  state.Settings.initMapWithAllPlayers;

export const getMapPlayersScale = (state: IStoreState): number =>
  state.Settings.mapPlayersScale;

export default SettingsSlice;
