import "@testing-library/jest-dom/extend-expect";

import {
  hexToPlayerColor,
  swapPlayersColors,
} from "components/ColorsMenu/ColorsMenu";
import { render, screen } from "@testing-library/react";
import { setSectionPlayers, setSections } from "store/slices/SectionsSlice";

import ColorsMenu from "components/ColorsMenu";
import { IPlayerColor } from "utils/types/players";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import { players } from "../default";
import { setPlayersState } from "store/slices/PlayersSlice";
import store from "store";

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

  test("should render all 18 color circles", async () => {
    const colorsMenu = await screen.getByTestId(/colors-menu/);

    expect(
      Object.values(colorsMenu)[0].memoizedProps.children.props.colors
    ).toHaveLength(18);
  });

  test("should not swap color if the current and target colors are the same", async () => {
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
            id: "banana",
          },
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
            id: "coral",
          },
          {
            id: "cyan",
          },
          {
            id: "gray",
          },
          {
            id: "green",
          },
          {
            id: "lime",
          },
          {
            id: "maroon",
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
            id: "rose",
          },
          {
            id: "tan",
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

    const colorsMenu = await screen.getByTestId(/colors-menu/);

    Object.values(colorsMenu)[0].child.memoizedProps.onChange({
      hsl: {
        h: 0,
        s: 0.8411214953271029,
        l: 0.4196078431372549,
        a: 1,
      },
      hex: "#c51111",
      rgb: {
        r: 197,
        g: 17,
        b: 17,
        a: 1,
      },
      hsv: {
        h: 0,
        s: 0.9137055837563453,
        v: 0.7725490196078432,
        a: 1,
      },
      oldHue: 0,
      source: "hex",
    });

    expect(testStore.getState().Sections.sections[4].players).toEqual([
      { id: "banana" },
      { id: "black" },
      { id: "blue" },
      { id: "brown" },
      { id: "coral" },
      { id: "cyan" },
      { id: "gray" },
      { id: "green" },
      { id: "lime" },
      { id: "maroon" },
      { id: "orange" },
      { id: "pink" },
      { id: "purple" },
      { id: "red" },
      { id: "rose" },
      { id: "tan" },
      { id: "white" },
      { id: "yellow" },
    ]);

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
      banana: {
        name: "",
        color: "banana" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      black: {
        name: "",
        color: "black" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      blue: {
        name: "",
        color: "blue" as IPlayerColor,
        section: 1,
        usedEmergencyButton: false,
      },
      brown: {
        name: "pp",
        color: "brown" as IPlayerColor,
        section: 1,
        usedEmergencyButton: false,
      },
      coral: {
        name: "",
        color: "coral" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      cyan: {
        name: "",
        color: "cyan" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      gray: {
        name: "",
        color: "gray" as IPlayerColor,
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
      maroon: {
        name: "",
        color: "maroon" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      orange: {
        name: "",
        color: "orange" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
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
      rose: {
        name: "",
        color: "rose" as IPlayerColor,
        section: 4,
        usedEmergencyButton: false,
      },
      tan: {
        name: "",
        color: "tan" as IPlayerColor,
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

    const colorsMenu = await screen.getByTestId(/colors-menu/);

    Object.values(colorsMenu)[0].child.memoizedProps.onChange({
      hsl: {
        h: 231.20418848167537,
        s: 0.8340611353711791,
        l: 0.4490196078431372,
        a: 1,
      },
      hex: "#132fd2",
      rgb: {
        r: 19,
        g: 47,
        b: 210,
        a: 1,
      },
      hsv: {
        h: 231.20418848167537,
        s: 0.9095238095238096,
        v: 0.8235294117647058,
        a: 1,
      },
      oldHue: 231.20418848167537,
      source: "hex",
    });

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

  test("hexToPlayerColor should return 'red' if hexcode '#c51111' is provided as the argument", () => {
    expect(hexToPlayerColor("#c51111")).toEqual("red");
  });
});
