import SettingsSlice, {
  getInitialState,
  getIsColorBlind,
  getShowNames,
} from "store/slices/SettingsSlice";

import { DEFAULT_SETTINGS_STATE } from "constants/settings";
import { NAMESPACE } from "constants/main";
import store from "store";

describe("SettingsSlice tests", () => {
  const state = store.getState();

  beforeEach(() => {
    localStorage.clear();
  });

  test("getInitialState should return state from local storage if the key exists", () => {
    localStorage.setItem(
      `${NAMESPACE}settings`,
      JSON.stringify({ showNames: false, isColorBlind: true })
    );

    expect(getInitialState()).toEqual({ showNames: false, isColorBlind: true });
  });

  test("getInitialState should return state from local storage if the key exists (no values provided)", () => {
    localStorage.setItem(`${NAMESPACE}settings`, JSON.stringify(""));

    expect(getInitialState()).toEqual({ showNames: true, isColorBlind: false });
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
    expect(SettingsSlice.caseReducers.toggleShowNames(state)).toEqual({
      ...state,
      showNames: true,
    });
  });

  test("setIsColorBlind should return true", () => {
    expect(
      SettingsSlice.caseReducers.setIsColorBlind(state, {
        payload: true,
        type: "string",
      })
    ).toEqual({
      ...state,
      isColorBlind: true,
    });
  });

  test("toggleIsColorBlind should return true", () => {
    expect(SettingsSlice.caseReducers.toggleIsColorBlind(state)).toEqual({
      ...state,
      isColorBlind: true,
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
