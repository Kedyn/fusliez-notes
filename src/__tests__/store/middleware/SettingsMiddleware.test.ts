import { Action, AnyAction, Dispatch } from "redux";

import { NAMESPACE } from "constants/main";
import { SettingsMiddleware } from "store/middleware/SettingsMiddleware";
import store from "store";

describe("SettingsMiddleware tests", () => {
  //   let middleware: typeof SettingsMiddleware;
  const action = ({ type, payload }: { type: string; payload?: boolean }) => {
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

  test("action type of Settings/setShowNames should set showNames in localStorage to true", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setShowNames", payload: true })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      showNames: true,
      isColorBlind: false,
    });
  });

  test("action type of Settings/toggleShowNames should set showNames in localStorage to not current state (false)", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/toggleShowNames" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      showNames: false,
      isColorBlind: false,
    });
  });

  test("action type of Settings/setIsColorBlind should set showNames in localStorage to true", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/setIsColorBlind", payload: true })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      showNames: true,
      isColorBlind: true,
    });
  });

  test("action type of Settings/toggleIsColorBlind should set isColorBlind in localStorage to not current state (true)", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/toggleIsColorBlind" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      showNames: true,
      isColorBlind: true,
    });
  });

  test("action type of Settings/resetSettingsState should reset defaul state", () => {
    SettingsMiddleware(store)(next)(
      action({ type: "Settings/resetSettingsState" })
    );

    const settings = localStorage.getItem(`${NAMESPACE}settings`);

    expect(JSON.parse(settings as string)).toStrictEqual({
      showNames: true,
      isColorBlind: false,
    });
  });

  test("invalid action type should not have called local storage's setItem", () => {
    const storageSpy = jest.spyOn(localStorage, "setItem");

    SettingsMiddleware(store)(next)(action({ type: "Settings" }));

    expect(storageSpy).toHaveBeenCalledTimes(0);
  });
});
