import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { DEFAULT_SETTINGS } from "constants/settings";
import { NAMESPACE } from "constants/main";
import { SettingsMiddleware } from "store/middleware/SettingsMiddleware";
import store from "store";

describe("SettingsMiddleware component tests", () => {
  const testStore = store;
  const KEY = `${NAMESPACE}settings`;
  const next = jest.fn((action) => action);

  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
  });

  test("should set showNames to false", async () => {
    const action = {
      type: "Settings/setShowNames",
      payload: false,
    };

    await SettingsMiddleware(testStore)(next)(action);

    expect(localStorage.__STORE__[KEY]).toBe(
      JSON.stringify({
        showNames: false,
        isColorBlind: DEFAULT_SETTINGS.isColorBlind,
      })
    );
  });

  test("should toggle showNames state", async () => {
    testStore.getState().Settings.showNames = false;

    const action = {
      type: "Settings/toggleShowNames",
    };

    await SettingsMiddleware(testStore)(next)(action);

    expect(localStorage.__STORE__[KEY]).toBe(
      JSON.stringify({
        showNames: true,
        isColorBlind: DEFAULT_SETTINGS.isColorBlind,
      })
    );
  });

  test("should set isColorBlind to true", async () => {
    const action = {
      type: "Settings/setIsColorBlind",
      payload: true,
    };

    await SettingsMiddleware(testStore)(next)(action);

    expect(localStorage.__STORE__[KEY]).toBe(
      JSON.stringify({
        showNames: DEFAULT_SETTINGS.showNames,
        isColorBlind: true,
      })
    );
  });

  test("should toggle isColorBlind state to false", async () => {
    testStore.getState().Settings.isColorBlind = true;

    const action = {
      type: "Settings/toggleIsColorBlind",
    };

    await SettingsMiddleware(testStore)(next)(action);

    expect(localStorage.__STORE__[KEY]).toBe(
      JSON.stringify({
        showNames: DEFAULT_SETTINGS.showNames,
        isColorBlind: false,
      })
    );
  });

  test("should reset settings state to default", async () => {
    testStore.getState().Settings = {
      showNames: false,
      isColorBlind: true,
    };

    const action = {
      type: "Settings/resetSettings",
    };

    await SettingsMiddleware(testStore)(next)(action);

    expect(localStorage.__STORE__[KEY]).toBe(
      JSON.stringify({
        showNames: DEFAULT_SETTINGS.showNames,
        isColorBlind: DEFAULT_SETTINGS.isColorBlind,
      })
    );
  });
});
