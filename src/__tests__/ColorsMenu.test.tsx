import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";
import {} from "store/slices/SectionsSlice";

import { fireEvent, render, screen } from "@testing-library/react";
import { setSectionPlayers, setSections } from "store/slices/SectionsSlice";

import { COLOR_LIBRARY } from "constants/theme";
import ColorsMenu from "components/ColorsMenu";
import { IPlayerColor } from "utils/types/players";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import { setPlayersState } from "store/slices/PlayersSlice";
import store from "store";
import { swapPlayersColors } from "components/ColorsMenu/ColorsMenu";

describe("ColorsMenu component tests", () => {
  let testStore: typeof store;

  beforeEach(() => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());

    render(
      <Provider store={testStore}>
        <ColorsMenu
          isMenuShowing={true}
          setIsMenuShowing={() => null}
          currentColor="red"
        />
      </Provider>
    );
  });

  test("should render ColorsMenu component", async () => {
    const component = await screen.getByTestId("colors-menu");
    expect(component).toBeInTheDocument();
  });

  test("should render all 12 color circles", async () => {
    const colorsMenu = await screen.getByTestId(/colors-menu/);

    expect(
      Object.values(colorsMenu)[0].memoizedProps.children.props.colors
    ).toHaveLength(12);
  });

  test("should not swap color if the current and target colors are the same", async () => {
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
        section: 4,
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
        name: "",
        color: "orange" as IPlayerColor,
        section: 4,
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
    };
    const sections = [
      {
        id: 0,
        title: "main.lists.innocent",
        players: [],
      },
      {
        id: 1,
        title: "main.lists.suspicious",
        players: [],
      },
      {
        id: 2,
        title: "main.lists.evilHitList",
        players: [],
      },
      {
        id: 3,
        title: "main.lists.dead",
        players: [],
      },
      {
        id: 4,
        title: "main.lists.unknown",
        players: [
          {
            id: "black",
          },
          {
            id: "blue",
          },
          {
            id: "brown",
          },
          {
            id: "cyan",
          },
          {
            id: "green",
          },
          {
            id: "lime",
          },
          {
            id: "orange",
          },
          {
            id: "pink",
          },
          {
            id: "purple",
          },
          {
            id: "red",
          },
          {
            id: "white",
          },
          {
            id: "yellow",
          },
        ],
      },
      {
        id: 5,
        title: "main.lists.unused",
        players: [],
      },
    ];

    const res = swapPlayersColors("red", "red", players, sections);

    expect(res.sections[4].players).toEqual(
      testStore.getState().Sections.sections[4].players
    );
  });

  test("should swap color of two players if their colors are different (in different sections)", async () => {
    testStore = store;

    await testStore.dispatch(
      setSectionPlayers({
        section: 1,
        newPlayers: [
          {
            id: "blue",
          },
          {
            id: "brown",
          },
        ],
      })
    );
    await testStore.dispatch(
      setSectionPlayers({
        section: 4,
        newPlayers: [
          {
            id: "black",
          },
          {
            id: "cyan",
          },
          {
            id: "green",
          },
          {
            id: "lime",
          },
          {
            id: "orange",
          },
          {
            id: "pink",
          },
          {
            id: "purple",
          },
          {
            id: "red",
          },
          {
            id: "white",
          },
          {
            id: "yellow",
          },
        ],
      })
    );

    const players = {
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 1,
      },
      brown: {
        name: "pp",
        color: "brown" as IPlayerColor,
        section: 1,
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
        name: "",
        color: "orange" as IPlayerColor,
        section: 4,
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
    };

    const sections = [
      {
        id: 0,
        title: "main.lists.innocent",
        players: [],
      },
      {
        id: 1,
        title: "main.lists.suspicious",
        players: [
          {
            id: "brown",
          },
          {
            id: "blue",
          },
        ],
      },
      {
        id: 2,
        title: "main.lists.evilHitList",
        players: [],
      },
      {
        id: 3,
        title: "main.lists.dead",
        players: [],
      },
      {
        id: 4,
        title: "main.lists.unknown",
        players: [
          {
            id: "black",
          },
          {
            id: "cyan",
          },
          {
            id: "green",
          },
          {
            id: "lime",
          },
          {
            id: "orange",
          },
          {
            id: "pink",
          },
          {
            id: "purple",
          },
          {
            id: "red",
          },
          {
            id: "white",
          },
          {
            id: "yellow",
          },
        ],
      },
      {
        id: 5,
        title: "main.lists.unused",
        players: [],
      },
    ];

    const res = swapPlayersColors("red", "blue", players, sections);

    await testStore.dispatch(setPlayersState(res.players));
    await testStore.dispatch(setSections(res.sections));

    expect(res.sections[1].players).toEqual([{ id: "brown" }, { id: "red" }]);
    expect(res.sections[4].players).toEqual([
      { id: "black" },
      { id: "cyan" },
      { id: "green" },
      { id: "lime" },
      { id: "orange" },
      { id: "pink" },
      { id: "purple" },
      { id: "blue" },
      { id: "white" },
      { id: "yellow" },
    ]);

    expect(testStore.getState().Sections.sections[1].players).toEqual(
      res.sections[1].players
    );
    expect(testStore.getState().Sections.sections[4].players).toEqual(
      res.sections[4].players
    );
  });
});
