import SettingsSlice from "./SettingsSlice";

const DEFAULT_SETTINGS_STATE = {
  showNames: true,
  isColorBlind: false,
};

beforeEach(() => {
  localStorage.clear();
});

describe("Tests For Settings Slice", () => {
  it("Initial state", () => {
    expect(SettingsSlice.reducer(undefined, { type: "none" })).toEqual(
      DEFAULT_SETTINGS_STATE
    );
  });

  it("Handles changing showNames state", () => {
    expect(
      SettingsSlice.reducer(DEFAULT_SETTINGS_STATE, {
        type: SettingsSlice.actions.setShowNames.type,
        payload: false,
      })
    ).toEqual({
      showNames: false,
      isColorBlind: false,
    });
  });

  it("Handles toggling showNames state", () => {
    expect(
      SettingsSlice.reducer(DEFAULT_SETTINGS_STATE, {
        type: SettingsSlice.actions.toggleShowNames.type,
        payload: null,
      })
    ).toEqual({
      showNames: false,
      isColorBlind: false,
    });
  });

  it("Handles changing isColorBlind state", () => {
    expect(
      SettingsSlice.reducer(DEFAULT_SETTINGS_STATE, {
        type: SettingsSlice.actions.setIsColorBlind.type,
        payload: true,
      })
    ).toEqual({
      showNames: true,
      isColorBlind: true,
    });
  });

  it("Handles toggling isColorBlind state", () => {
    expect(
      SettingsSlice.reducer(DEFAULT_SETTINGS_STATE, {
        type: SettingsSlice.actions.toggleIsColorBlind.type,
        payload: null,
      })
    ).toEqual({
      showNames: true,
      isColorBlind: true,
    });
  });

  it("Handles resetting state", () => {
    expect(
      SettingsSlice.reducer(
        {
          showNames: false,
          isColorBlind: true,
        },
        {
          type: SettingsSlice.actions.resetSettings.type,
          payload: null,
        }
      )
    ).toEqual(DEFAULT_SETTINGS_STATE);
  });
});
