import { Action, AnyAction, Dispatch } from "redux";

import { NAMESPACE } from "constants/main";
import { SettingsMiddleware } from "store/middleware/SettingsMiddleware";
import store from "store";

describe("SettingsMiddleware tests", () => {
  const action = ({
    type,
    payload,
  }: {
    type: string;
    payload?: boolean | number;
  }) => {
    return {
      type,
      payload,
    };
  };

  const next = ((action: Action) => {
    return action;
  }) as Dispatch<AnyAction>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Settings/setShowNames should set showNames in localStorage to false", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setShowNames", payload: false })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: false,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("Settings/toggleShowNames should set showNames in localStorage to not current state (false)", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/toggleShowNames" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: false,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("Settings/setTrackEmergencyButtonUsages should set trackEmergencyButtonUsages in localStorage to false", () => {
    SettingsMiddleware(store)(next)(
      action({
        type: "Settings/setTrackEmergencyButtonUsages",
        payload: false,
      })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: false,
      isColorBlind: false,
    });
  });

  test("Settings/setIsColorBlind should set isColorBlind in localStorage to true", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setIsColorBlind", payload: true })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: true,
    });
  });

  test("Settings/toggleIsColorBlind should set isColorBlind in localStorage to not current state (true)", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/toggleIsColorBlind" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: true,
    });
  });

  test("Settings/setInitMapWithAllPlayers should set showNames in localStorage to true", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setInitMapWithAllPlayers", payload: true })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: true,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("Settings/toggleInitMapWithAllPlayers should set initMapWithAllPlayers in localStorage to not current state (true)", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/toggleInitMapWithAllPlayers" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: true,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("Settings/setMapPlayersScale should set mapPlayersScale in localStorage to payload", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setMapPlayersScale", payload: 5 })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 5,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("Settings/resetSettingsState should reset defaul state", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/resetSettingsState" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      initMapWithAllPlayers: false,
      mapPlayersScale: 1,
      showNames: true,
      trackEmergencyButtonUsages: true,
      isColorBlind: false,
    });
  });

  test("invalid action type should not have called local storage's setItem", () => {
    const storageSpy = jest.spyOn(localStorage, "setItem");

    SettingsMiddleware(store)(next)(action({ type: "Settings" }));

    expect(storageSpy).toHaveBeenCalledTimes(0);
  });
});
