import { IPlayerColor, IPlayersState } from "utils/types/players";
import {
  getDefaultPlayersPositions,
  getInitialPlayersState,
} from "store/shared/players";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { NAMESPACE } from "constants/main";
import { players } from "../../default";

describe("shared/players tests", () => {
  test("getDefaultPlayersPositions should return the default players' positions", () => {
    const defaultState = getDefaultPlayersPositions(DEFAULT_PLAYERS_STATE);
    expect(defaultState).toStrictEqual(players);
  });

  test("getInitialPlayerState should parse existing data if it exists in localStorage", () => {
    const players: IPlayersState = {
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        name: "",
        color: "brown" as IPlayerColor,
        section: 5,
        usedEmergencyButton: false,
      },
      cyan: {
        name: "",
        color: "cyan" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        name: "",
        color: "green" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        name: "",
        color: "lime" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        name: "fuslie",
        color: "orange" as IPlayerColor,
        section: 1,
        usedEmergencyButton: true,
      },
      pink: {
        name: "",
        color: "pink" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        name: "",
        color: "purple" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        name: "",
        color: "red" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        name: "",
        color: "white" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        name: "",
        color: "yellow" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
    };

    localStorage.setItem(`${NAMESPACE}players`, JSON.stringify(players));

    expect(getInitialPlayersState()).toStrictEqual({
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        name: "",
        color: "brown" as IPlayerColor,
        section: 5,
        usedEmergencyButton: false,
      },
      cyan: {
        name: "",
        color: "cyan" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        name: "",
        color: "green" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        name: "",
        color: "lime" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        name: "fuslie",
        color: "orange" as IPlayerColor,
        section: 1,
        usedEmergencyButton: true,
      },
      pink: {
        name: "",
        color: "pink" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        name: "",
        color: "purple" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        name: "",
        color: "red" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        name: "",
        color: "white" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        name: "",
        color: "yellow" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });
});
