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
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 4,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
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
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "",
        section: 0,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
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
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 2,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
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
          },
          blue: {
            color: "blue",
            name: "",
            section: 4,
          },
          brown: {
            color: "brown",
            name: "",
            section: 4,
          },
          cyan: {
            color: "cyan",
            name: "",
            section: 4,
          },
          green: {
            color: "green",
            name: "",
            section: 4,
          },
          lime: {
            color: "lime",
            name: "",
            section: 4,
          },
          orange: {
            color: "orange",
            name: "fuslie",
            section: 2,
          },
          pink: {
            color: "pink",
            name: "",
            section: 4,
          },
          purple: {
            color: "purple",
            name: "",
            section: 4,
          },
          red: {
            color: "red",
            name: "",
            section: 4,
          },
          white: {
            color: "white",
            name: "",
            section: 4,
          },
          yellow: {
            color: "yellow",
            name: "",
            section: 4,
          },
        },
        type: "string",
      })
    ).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "fuslie",
        section: 2,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
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
      },
      blue: {
        color: "blue",
        name: "",
        section: 2,
      },
      brown: {
        color: "brown",
        name: "",
        section: 2,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 2,
      },
      green: {
        color: "green",
        name: "",
        section: 2,
      },
      lime: {
        color: "lime",
        name: "",
        section: 2,
      },
      orange: {
        color: "orange",
        name: "",
        section: 2,
      },
      pink: {
        color: "pink",
        name: "",
        section: 2,
      },
      purple: {
        color: "purple",
        name: "",
        section: 2,
      },
      red: {
        color: "red",
        name: "",
        section: 2,
      },
      white: {
        color: "white",
        name: "",
        section: 2,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 2,
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
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
      },
    });
  });

  test("resetPlayersState() should reset players state", () => {
    expect(PlayersSlice.caseReducers.resetPlayersState()).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
      },
    });
  });

  test("getPlayer('black') should get a specific player", () => {
    expect(getPlayer("black")(state)).toStrictEqual({
      color: "black",
      name: "",
      section: 4,
    });
  });

  test("getPlayers(state) should get all players", () => {
    expect(getPlayers(state)).toStrictEqual({
      black: {
        color: "black",
        name: "",
        section: 4,
      },
      blue: {
        color: "blue",
        name: "",
        section: 4,
      },
      brown: {
        color: "brown",
        name: "",
        section: 4,
      },
      cyan: {
        color: "cyan",
        name: "",
        section: 4,
      },
      green: {
        color: "green",
        name: "",
        section: 4,
      },
      lime: {
        color: "lime",
        name: "",
        section: 4,
      },
      orange: {
        color: "orange",
        name: "",
        section: 4,
      },
      pink: {
        color: "pink",
        name: "",
        section: 4,
      },
      purple: {
        color: "purple",
        name: "",
        section: 4,
      },
      red: {
        color: "red",
        name: "",
        section: 4,
      },
      white: {
        color: "white",
        name: "",
        section: 4,
      },
      yellow: {
        color: "yellow",
        name: "",
        section: 4,
      },
    });
  });
});
