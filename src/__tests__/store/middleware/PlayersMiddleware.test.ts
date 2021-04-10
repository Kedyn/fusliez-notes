import { Action, AnyAction, Dispatch } from "redux";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { IPlayersState } from "utils/types/players";
import { NAMESPACE } from "constants/main";
import { PlayersMiddleware } from "store/middleware/PlayersMiddleware";
import store from "store";

interface IPlayerAction {
  player?: string;
  name?: string;
  newName?: string;
  section?: number;
  newSection?: number;
  color?: string;
}

describe("PlayersMiddleware tests", () => {
  const action = ({
    type,
    payload,
  }: {
    type: string;
    payload?: number | string | IPlayerAction | IPlayersState;
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

  test("Players/setPlayerName should set orange's name as fuslie and store in localStorage", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayerName",
        payload: { player: "orange", newName: "fuslie" },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      ...DEFAULT_PLAYERS_STATE,
      orange: { name: "fuslie", color: "orange", section: 4 },
    });
  });

  test("Players/setPlayerSection should set orange's section to 2", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayerSection",
        payload: { player: "orange", newSection: 2 },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      ...DEFAULT_PLAYERS_STATE,
      orange: { name: "", color: "orange", section: 2 },
    });
  });

  test("Players/setPlayer should set the specific player with the payload's color, name, and section", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayer",
        payload: { color: "brown", name: "peter", section: 1 },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      ...DEFAULT_PLAYERS_STATE,
      brown: { color: "brown", name: "peter", section: 1 },
    });
  });

  test("Players/setPlayersState should set all players to the payload", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: { name: "corpse", color: "black", section: 2 },
          blue: { name: "edison", color: "blue", section: 1 },
          brown: { name: "peter", color: "brown", section: 3 },
          cyan: { name: "toast", color: "cyan", section: 4 },
          green: { name: "sykkuno", color: "green", section: 4 },
          lime: { name: "masayoshi", color: "lime", section: 1 },
          orange: { name: "fuslie", color: "orange", section: 4 },
          pink: { name: "quarterjad", color: "pink", section: 2 },
          purple: { name: "wondy", color: "purple", section: 2 },
          red: { name: "rae", color: "red", section: 4 },
          white: { name: "", color: "white", section: 4 },
          yellow: { name: "", color: "yellow", section: 4 },
        },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      black: { name: "corpse", color: "black", section: 2 },
      blue: { name: "edison", color: "blue", section: 1 },
      brown: { name: "peter", color: "brown", section: 3 },
      cyan: { name: "toast", color: "cyan", section: 4 },
      green: { name: "sykkuno", color: "green", section: 4 },
      lime: { name: "masayoshi", color: "lime", section: 1 },
      orange: { name: "fuslie", color: "orange", section: 4 },
      pink: { name: "quarterjad", color: "pink", section: 2 },
      purple: { name: "wondy", color: "purple", section: 2 },
      red: { name: "rae", color: "red", section: 4 },
      white: { name: "", color: "white", section: 4 },
      yellow: { name: "", color: "yellow", section: 4 },
    });
  });

  test("Players/setPlayersSection should set all players to the specified section", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersSection",
        payload: 5,
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      black: { name: "", color: "black", section: 5 },
      blue: { name: "", color: "blue", section: 5 },
      brown: { name: "", color: "brown", section: 5 },
      cyan: { name: "", color: "cyan", section: 5 },
      green: { name: "", color: "green", section: 5 },
      lime: { name: "", color: "lime", section: 5 },
      orange: { name: "", color: "orange", section: 5 },
      pink: { name: "", color: "pink", section: 5 },
      purple: { name: "", color: "purple", section: 5 },
      red: { name: "", color: "red", section: 5 },
      white: { name: "", color: "white", section: 5 },
      yellow: { name: "", color: "yellow", section: 5 },
    });
  });

  test("Players/resetPlayersNames should reset all players' names", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: { name: "corpse", color: "black", section: 2 },
          blue: { name: "edison", color: "blue", section: 1 },
          brown: { name: "peter", color: "brown", section: 3 },
          cyan: { name: "toast", color: "cyan", section: 4 },
          green: { name: "sykkuno", color: "green", section: 4 },
          lime: { name: "masayoshi", color: "lime", section: 1 },
          orange: { name: "fuslie", color: "orange", section: 4 },
          pink: { name: "quarterjad", color: "pink", section: 2 },
          purple: { name: "wondy", color: "purple", section: 2 },
          red: { name: "rae", color: "red", section: 4 },
          white: { name: "", color: "white", section: 4 },
          yellow: { name: "", color: "yellow", section: 4 },
        },
      })
    );
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersSection",
        payload: 4,
      })
    );
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/resetPlayersNames",
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual(DEFAULT_PLAYERS_STATE);
  });

  test("Players/resetPlayersState should reset all players' names", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: { name: "corpse", color: "black", section: 2 },
          blue: { name: "edison", color: "blue", section: 1 },
          brown: { name: "peter", color: "brown", section: 3 },
          cyan: { name: "toast", color: "cyan", section: 4 },
          green: { name: "sykkuno", color: "green", section: 4 },
          lime: { name: "masayoshi", color: "lime", section: 1 },
          orange: { name: "fuslie", color: "orange", section: 4 },
          pink: { name: "quarterjad", color: "pink", section: 2 },
          purple: { name: "wondy", color: "purple", section: 2 },
          red: { name: "rae", color: "red", section: 4 },
          white: { name: "", color: "white", section: 4 },
          yellow: { name: "", color: "yellow", section: 4 },
        },
      })
    );
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/resetPlayersState",
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual(DEFAULT_PLAYERS_STATE);
  });

  test("invalid action type should not have called local storage's setItem", () => {
    const storageSpy = jest.spyOn(localStorage, "setItem");

    PlayersMiddleware(store)(next)(action({ type: "Players" }));

    expect(storageSpy).toHaveBeenCalledTimes(0);
  });
});
