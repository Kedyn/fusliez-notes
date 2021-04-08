import {
  getDefaultPlayersPositions,
  getInitialPlayersState,
} from "store/shared/players";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { IPlayerColor } from "utils/types/players";
import { NAMESPACE } from "constants/main";
import { players } from "../../default";

describe("shared/players tests", () => {
  test("getDefaultPlayersPositions should return the default players' positions", () => {
    const defaultState = getDefaultPlayersPositions(DEFAULT_PLAYERS_STATE);
    expect(defaultState).toStrictEqual(players);
  });

  test("getInitialPlayerState should parse existing data if it exists in localStorage", () => {
    const players = {
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 4,
      },
      brown: {
        name: "",
        color: "brown" as IPlayerColor,
        section: 5,
      },
      cyan: {
        name: "",
        color: "cyan" as IPlayerColor,
        section: 4,
      },
      green: {
        name: "",
        color: "green" as IPlayerColor,
        section: 4,
      },
      lime: {
        name: "",
        color: "lime" as IPlayerColor,
        section: 4,
      },
      orange: {
        name: "fuslie",
        color: "orange" as IPlayerColor,
        section: 1,
      },
      pink: {
        color: "pink" as IPlayerColor,
      },
      purple: {
        name: "",
        color: "purple" as IPlayerColor,
        section: 4,
      },
      red: {
        name: "",
        color: "red" as IPlayerColor,
        section: 4,
      },
      white: {
        name: "",
        color: "white" as IPlayerColor,
        section: 4,
      },
      yellow: {
        name: "",
        color: "yellow" as IPlayerColor,
        section: 4,
      },
    };

    localStorage.setItem(`${NAMESPACE}players`, JSON.stringify(players));

    expect(getInitialPlayersState()).toStrictEqual({
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 4,
      },
      brown: {
        name: "",
        color: "brown" as IPlayerColor,
        section: 5,
      },
      cyan: {
        name: "",
        color: "cyan" as IPlayerColor,
        section: 4,
      },
      green: {
        name: "",
        color: "green" as IPlayerColor,
        section: 4,
      },
      lime: {
        name: "",
        color: "lime" as IPlayerColor,
        section: 4,
      },
      orange: {
        name: "fuslie",
        color: "orange" as IPlayerColor,
        section: 1,
      },
      pink: {
        name: "",
        color: "pink" as IPlayerColor,
        section: 4,
      },
      purple: {
        name: "",
        color: "purple" as IPlayerColor,
        section: 4,
      },
      red: {
        name: "",
        color: "red" as IPlayerColor,
        section: 4,
      },
      white: {
        name: "",
        color: "white" as IPlayerColor,
        section: 4,
      },
      yellow: {
        name: "",
        color: "yellow" as IPlayerColor,
        section: 4,
      },
    });
  });
});
