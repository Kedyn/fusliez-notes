import SettingsSlice, {
  getInitialState,
  getIsColorBlind,
  getShowNames,
} from "store/slices/SettingsSlice";

import { DEFAULT_SETTINGS_STATE } from "constants/settings";
import { NAMESPACE } from "constants/main";
import { getInitMapWithAllPlayers } from "./../../../store/slices/SettingsSlice";
import store from "store";

describe("SettingsSlice tests", () => {
  const state = store.getState();

  beforeEach(() => {
    localStorage.clear();
  });

  test("getInitialState should return state from local storage if the key exists", () => {
    localStorage.setItem(
      `${NAMESPACE}settings`,
      JSON.stringify({
        initMapWithAllPlayers: false,
        mapPlayersScale: 1,
        showNames: false,
        isColorBlind: true,
      })
    );

    expect(getInitialState()).toEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: false,
      isColorBlind: true,
    });
  });

  test("getInitialState should return state from local storage if the key exists (no values provided)", () => {
    localStorage.setItem(`${NAMESPACE}settings`, JSON.stringify(""));

    expect(getInitialState()).toEqual({
      initMapWithAllPlayers: false,
      showNames: true,
      isColorBlind: false,
      mapPlayersScale: 1,
    });
  });

  test("setShowNames should return showNames", () => {
    expect(
      SettingsSlice.caseReducers.setShowNames(state, {
        payload: false,
        type: "string",
      })
    ).toEqual({ ...state, showNames: false });
  });

  test("toggleShowNames should return !state", () => {
    expect(SettingsSlice.caseReducers.toggleShowNames(state.Settings)).toEqual({
      ...state.Settings,
      showNames: !state.Settings.showNames,
    });
  });

  test("setIsColorBlind should return true", () => {
    expect(
      SettingsSlice.caseReducers.setIsColorBlind(state.Settings, {
        payload: true,
        type: "string",
      })
    ).toEqual({
      ...state.Settings,
      isColorBlind: true,
    });
  });

  test("toggleIsColorBlind should return true", () => {
    expect(
      SettingsSlice.caseReducers.toggleIsColorBlind(state.Settings)
    ).toEqual({
      ...state.Settings,
      isColorBlind: true,
    });
  });

  test("setInitMapWithAllPlayers should return true", () => {
    expect(
      SettingsSlice.caseReducers.setInitMapWithAllPlayers(state.Settings, {
        payload: true,
        type: "string",
      })
    ).toEqual({
      ...state.Settings,
      initMapWithAllPlayers: true,
    });
  });

  test("toggleInitMapWithAllPlayers should return true", () => {
    expect(
      SettingsSlice.caseReducers.toggleInitMapWithAllPlayers(state.Settings)
    ).toEqual({
      ...state.Settings,
      initMapWithAllPlayers: true,
    });
  });

  test("setMapPlayersScale should return true", () => {
    expect(
      SettingsSlice.caseReducers.setMapPlayersScale(state.Settings, {
        payload: 2,
        type: "string",
      })
    ).toEqual({
      ...state.Settings,
      mapPlayersScale: 2,
    });
  });

  test("resetSettingsState should return the default state", () => {
    expect(SettingsSlice.caseReducers.resetSettingsState()).toEqual({
      ...DEFAULT_SETTINGS_STATE,
    });
  });

  test("getShowNames should return showNames", () => {
    expect(getShowNames(state)).toEqual(true);
  });

  test("getIsColorBlind should return false", () => {
    expect(getIsColorBlind(state)).toEqual(false);
  });
});
