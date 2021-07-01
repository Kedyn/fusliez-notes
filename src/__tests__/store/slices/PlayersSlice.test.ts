import PlayersSlice, { getPlayer, getPlayers } from "store/slices/PlayersSlice";

import { IPlayerColor } from "utils/types/players";
import store from "store";

describe("PlayersSlice tests", () => {
  const state = store.getState();

  test("setPlayerName(state, payload) should return object with the player with its newName", () => {
    expect(
      PlayersSlice.caseReducers.setPlayerName(state.Players, {
        payload: {
          player: "orange" as IPlayerColor,
          newName: "fuslie",
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 4,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("setPlayerUsedEmergencyButton(state, payload) should return object with the player with updated usedEmergencyButton", () => {
    expect(
      PlayersSlice.caseReducers.setPlayerUsedEmergencyButton(state.Players, {
        payload: {
          player: "orange" as IPlayerColor,
          usedEmergencyButton: true,
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
        usedEmergencyButton: true,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("setPlayerSection(state, payload) should return object with the player with the new section", () => {
    expect(
      PlayersSlice.caseReducers.setPlayerSection(state.Players, {
        payload: {
          player: "orange" as IPlayerColor,
          newSection: 0,
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 0,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("setPlayer(state, payload) should return object with the player with the new information (name/section)", () => {
    expect(
      PlayersSlice.caseReducers.setPlayer(state.Players, {
        payload: {
          color: "orange" as IPlayerColor,
          name: "fuslie",
          section: 2,
          usedEmergencyButton: true,
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 2,
        usedEmergencyButton: true,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("setPlayersState(state, payload) should the payload", () => {
    expect(
      PlayersSlice.caseReducers.setPlayersState(state.Players, {
        payload: {
          black: {
            color: "black",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          blue: {
            color: "blue",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          brown: {
            color: "brown",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          cyan: {
            color: "cyan",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          green: {
            color: "green",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          lime: {
            color: "lime",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          orange: {
            color: "orange",
            name: "fuslie",
            section: 2,
            usedEmergencyButton: true,
          },
          pink: {
            color: "pink",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          purple: {
            color: "purple",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          red: {
            color: "red",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          white: {
            color: "white",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
          yellow: {
            color: "yellow",
            name: "",
            section: 4,
            usedEmergencyButton: false,
          },
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 2,
        usedEmergencyButton: true,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("setPlayersSection(state, payload) should return object with the player with the new section", () => {
    expect(
      PlayersSlice.caseReducers.setPlayersSection(state.Players, {
        payload: 2,
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 2,
        usedEmergencyButton: false,
      },
    });
  });

  test("resetPlayersNames(state) should reset all players' names", () => {
    PlayersSlice.caseReducers.setPlayerName(state.Players, {
      payload: {
        player: "orange" as IPlayerColor,
        newName: "fuslie",
      },
      type: "string",
    });

    expect(
      PlayersSlice.caseReducers.resetPlayersNames(state.Players)
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("resetPlayersUsedEmergencyButton(state) should reset all players' names", () => {
    PlayersSlice.caseReducers.setPlayerUsedEmergencyButton(state.Players, {
      payload: {
        player: "orange" as IPlayerColor,
        usedEmergencyButton: true,
      },
      type: "string",
    });

    expect(
      PlayersSlice.caseReducers.resetPlayersUsedEmergencyButton(state.Players)
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("resetPlayersState() should reset players state", () => {
    expect(PlayersSlice.caseReducers.resetPlayersState()).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });

  test("getPlayer('black') should get a specific player", () => {
    expect(getPlayer("black")(state)).toStrictEqual({
      color: "black",
      name: "",
      section: 4,
      usedEmergencyButton: false,
    });
  });

  test("getPlayers(state) should get all players", () => {
    expect(getPlayers(state)).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
        usedEmergencyButton: false,
      },
    });
  });
});
