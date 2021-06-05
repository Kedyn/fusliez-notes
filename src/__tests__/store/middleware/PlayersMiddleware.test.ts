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
  usedEmergencyButton?: boolean;
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
      orange: {
        name: "fuslie",
        color: "orange",
        section: 4,
        usedEmergencyButton: false,
      },
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
      orange: {
        name: "",
        color: "orange",
        section: 2,
        usedEmergencyButton: false,
      },
    });
  });

  test("Players/setPlayerUsedEmergencyButton should set orange's usedEmergencyButton as true and store in localStorage", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayerUsedEmergencyButton",
        payload: { player: "orange", usedEmergencyButton: true },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      ...DEFAULT_PLAYERS_STATE,
      orange: {
        name: "",
        color: "orange",
        section: 4,
        usedEmergencyButton: true,
      },
    });
  });

  test("Players/setPlayer should set the specific player with the payload's color, name, and section", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayer",
        payload: {
          color: "brown",
          name: "peter",
          section: 1,
          usedEmergencyButton: true,
        },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      ...DEFAULT_PLAYERS_STATE,
      brown: {
        color: "brown",
        name: "peter",
        section: 1,
        usedEmergencyButton: true,
      },
    });
  });

  test("Players/setPlayersState should set all players to the payload", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: {
            name: "corpse",
            color: "black",
            section: 2,
            usedEmergencyButton: true,
          },
          blue: {
            name: "edison",
            color: "blue",
            section: 1,
            usedEmergencyButton: false,
          },
          brown: {
            name: "peter",
            color: "brown",
            section: 3,
            usedEmergencyButton: true,
          },
          cyan: {
            name: "toast",
            color: "cyan",
            section: 4,
            usedEmergencyButton: false,
          },
          green: {
            name: "sykkuno",
            color: "green",
            section: 4,
            usedEmergencyButton: true,
          },
          lime: {
            name: "masayoshi",
            color: "lime",
            section: 1,
            usedEmergencyButton: false,
          },
          orange: {
            name: "fuslie",
            color: "orange",
            section: 4,
            usedEmergencyButton: true,
          },
          pink: {
            name: "quarterjad",
            color: "pink",
            section: 2,
            usedEmergencyButton: false,
          },
          purple: {
            name: "wondy",
            color: "purple",
            section: 2,
            usedEmergencyButton: true,
          },
          red: {
            name: "rae",
            color: "red",
            section: 4,
            usedEmergencyButton: false,
          },
          white: {
            name: "",
            color: "white",
            section: 4,
            usedEmergencyButton: true,
          },
          yellow: {
            name: "",
            color: "yellow",
            section: 4,
            usedEmergencyButton: false,
          },
        },
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual({
      black: {
        name: "corpse",
        color: "black",
        section: 2,
        usedEmergencyButton: true,
      },
      blue: {
        name: "edison",
        color: "blue",
        section: 1,
        usedEmergencyButton: false,
      },
      brown: {
        name: "peter",
        color: "brown",
        section: 3,
        usedEmergencyButton: true,
      },
      cyan: {
        name: "toast",
        color: "cyan",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        name: "sykkuno",
        color: "green",
        section: 4,
        usedEmergencyButton: true,
      },
      lime: {
        name: "masayoshi",
        color: "lime",
        section: 1,
        usedEmergencyButton: false,
      },
      orange: {
        name: "fuslie",
        color: "orange",
        section: 4,
        usedEmergencyButton: true,
      },
      pink: {
        name: "quarterjad",
        color: "pink",
        section: 2,
        usedEmergencyButton: false,
      },
      purple: {
        name: "wondy",
        color: "purple",
        section: 2,
        usedEmergencyButton: true,
      },
      red: {
        name: "rae",
        color: "red",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        name: "",
        color: "white",
        section: 4,
        usedEmergencyButton: true,
      },
      yellow: {
        name: "",
        color: "yellow",
        section: 4,
        usedEmergencyButton: false,
      },
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
      black: {
        name: "",
        color: "black",
        section: 5,
        usedEmergencyButton: false,
      },
      blue: { name: "", color: "blue", section: 5, usedEmergencyButton: false },
      brown: {
        name: "",
        color: "brown",
        section: 5,
        usedEmergencyButton: false,
      },
      cyan: { name: "", color: "cyan", section: 5, usedEmergencyButton: false },
      green: {
        name: "",
        color: "green",
        section: 5,
        usedEmergencyButton: false,
      },
      lime: { name: "", color: "lime", section: 5, usedEmergencyButton: false },
      orange: {
        name: "",
        color: "orange",
        section: 5,
        usedEmergencyButton: false,
      },
      pink: { name: "", color: "pink", section: 5, usedEmergencyButton: false },
      purple: {
        name: "",
        color: "purple",
        section: 5,
        usedEmergencyButton: false,
      },
      red: { name: "", color: "red", section: 5, usedEmergencyButton: false },
      white: {
        name: "",
        color: "white",
        section: 5,
        usedEmergencyButton: false,
      },
      yellow: {
        name: "",
        color: "yellow",
        section: 5,
        usedEmergencyButton: false,
      },
    });
  });

  test("Players/resetPlayersNames should reset all players' names", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: {
            name: "corpse",
            color: "black",
            section: 2,
            usedEmergencyButton: false,
          },
          blue: {
            name: "edison",
            color: "blue",
            section: 1,
            usedEmergencyButton: false,
          },
          brown: {
            name: "peter",
            color: "brown",
            section: 3,
            usedEmergencyButton: false,
          },
          cyan: {
            name: "toast",
            color: "cyan",
            section: 4,
            usedEmergencyButton: false,
          },
          green: {
            name: "sykkuno",
            color: "green",
            section: 4,
            usedEmergencyButton: false,
          },
          lime: {
            name: "masayoshi",
            color: "lime",
            section: 1,
            usedEmergencyButton: false,
          },
          orange: {
            name: "fuslie",
            color: "orange",
            section: 4,
            usedEmergencyButton: false,
          },
          pink: {
            name: "quarterjad",
            color: "pink",
            section: 2,
            usedEmergencyButton: false,
          },
          purple: {
            name: "wondy",
            color: "purple",
            section: 2,
            usedEmergencyButton: false,
          },
          red: {
            name: "rae",
            color: "red",
            section: 4,
            usedEmergencyButton: false,
          },
          white: {
            name: "",
            color: "white",
            section: 4,
            usedEmergencyButton: false,
          },
          yellow: {
            name: "",
            color: "yellow",
            section: 4,
            usedEmergencyButton: false,
          },
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

  test("Players/resetPlayersUsedEmergencyButton should reset all players' usedEmergencyButton", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/resetPlayersState",
      })
    );

    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayerUsedEmergencyButton",
        payload: { player: "orange", usedEmergencyButton: true },
      })
    );

    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayerUsedEmergencyButton",
        payload: { player: "red", usedEmergencyButton: true },
      })
    );

    PlayersMiddleware(store)(next)(
      action({
        type: "Players/resetPlayersUsedEmergencyButton",
      })
    );

    const players = localStorage.getItem(`${NAMESPACE}players`);

    expect(JSON.parse(players as string)).toStrictEqual(DEFAULT_PLAYERS_STATE);
  });

  test("Players/resetPlayersState should reset all players' state", () => {
    PlayersMiddleware(store)(next)(
      action({
        type: "Players/setPlayersState",
        payload: {
          black: {
            name: "corpse",
            color: "black",
            section: 2,
            usedEmergencyButton: true,
          },
          blue: {
            name: "edison",
            color: "blue",
            section: 1,
            usedEmergencyButton: false,
          },
          brown: {
            name: "peter",
            color: "brown",
            section: 3,
            usedEmergencyButton: true,
          },
          cyan: {
            name: "toast",
            color: "cyan",
            section: 4,
            usedEmergencyButton: false,
          },
          green: {
            name: "sykkuno",
            color: "green",
            section: 4,
            usedEmergencyButton: true,
          },
          lime: {
            name: "masayoshi",
            color: "lime",
            section: 1,
            usedEmergencyButton: false,
          },
          orange: {
            name: "fuslie",
            color: "orange",
            section: 4,
            usedEmergencyButton: true,
          },
          pink: {
            name: "quarterjad",
            color: "pink",
            section: 2,
            usedEmergencyButton: false,
          },
          purple: {
            name: "wondy",
            color: "purple",
            section: 2,
            usedEmergencyButton: true,
          },
          red: {
            name: "rae",
            color: "red",
            section: 4,
            usedEmergencyButton: false,
          },
          white: {
            name: "",
            color: "white",
            section: 4,
            usedEmergencyButton: true,
          },
          yellow: {
            name: "",
            color: "yellow",
            section: 4,
            usedEmergencyButton: false,
          },
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
