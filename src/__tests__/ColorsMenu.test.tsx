import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import { COLOR_LIBRARY } from "constants/theme";
import ColorsMenu from "components/ColorsMenu";
import { IPlayerColor } from "utils/types/players";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import { setPlayerSection } from "store/slices/PlayersSlice";
import { setSectionPlayers } from "store/slices/SectionsSlice";
import store from "store";
import { swapPlayersColors } from "components/ColorsMenu/ColorsMenu";

describe("ColorsMenu component tests", () => {
  let testStore: typeof store;

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
      name: "pp",
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
          id: "brown",
          chosen: false,
          selected: false,
        },
        {
          id: "blue",
          chosen: false,
          selected: false,
        },
        {
          id: "black",
          chosen: false,
          selected: false,
        },
        {
          id: "cyan",
          chosen: false,
          selected: false,
        },
        {
          id: "green",
          chosen: false,
          selected: false,
        },
        {
          id: "lime",
          chosen: false,
          selected: false,
        },
        {
          id: "orange",
          chosen: false,
          selected: false,
        },
        {
          id: "pink",
          chosen: false,
          selected: false,
        },
        {
          id: "purple",
          chosen: false,
          selected: false,
        },
        {
          id: "red",
          chosen: false,
          selected: false,
        },
        {
          id: "white",
          chosen: false,
          selected: false,
        },
        {
          id: "yellow",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 5,
      title: "main.lists.unused",
      players: [],
    },
  ];

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
    const tempStore = testStore.getState().Sections.sections;

    const res = swapPlayersColors("red", "red", players, sections);

    expect(res).toBeUndefined();

    expect(testStore.getState().Sections.sections).toStrictEqual(tempStore);

    // Object.values(colorsMenu)[0].child.pendingProps.onChange({
    //   hsl: {
    //     h: 60,
    //     s: 0.8870056497175144,
    //     l: 0.6529411764705882,
    //     a: 1,
    //   },
    //   hex: "#f5f558",
    //   rgb: {
    //     r: 245,
    //     g: 245,
    //     b: 88,
    //     a: 1,
    //   },
    //   hsv: {
    //     h: 60,
    //     s: 0.6408163265306123,
    //     v: 0.9607843137254902,
    //     a: 1,
    //   },
    //   oldHue: 60,
    //   source: "hex",
    // });
  });

  // test("should swap color of two players if their colors are different (in different sections)", async () => {
  //   testStore = store;

  //   await testStore.dispatch(
  //     setSectionPlayers({
  //       section: 1,
  //       newPlayers: [
  //         {
  //           id: "blue",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "brown",
  //           chosen: false,
  //           selected: false,
  //         },
  //       ],
  //     })
  //   );
  //   await testStore.dispatch(
  //     setSectionPlayers({
  //       section: 4,
  //       newPlayers: [
  //         {
  //           id: "black",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "cyan",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "green",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "lime",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "orange",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "pink",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "purple",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "red",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "white",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "yellow",
  //           chosen: false,
  //           selected: false,
  //         },
  //       ],
  //     })
  //   );

  //   const players = {
  //     black: {
  //       name: "",
  //       color: "black" as IPlayerColor,
  //       section: 4,
  //     },
  //     blue: {
  //       name: "",
  //       color: "blue" as IPlayerColor,
  //       section: 1,
  //     },
  //     brown: {
  //       name: "pp",
  //       color: "brown" as IPlayerColor,
  //       section: 1,
  //     },
  //     cyan: {
  //       name: "",
  //       color: "cyan" as IPlayerColor,
  //       section: 4,
  //     },
  //     green: {
  //       name: "",
  //       color: "green" as IPlayerColor,
  //       section: 4,
  //     },
  //     lime: {
  //       name: "",
  //       color: "lime" as IPlayerColor,
  //       section: 4,
  //     },
  //     orange: {
  //       name: "",
  //       color: "orange" as IPlayerColor,
  //       section: 4,
  //     },
  //     pink: {
  //       name: "",
  //       color: "pink" as IPlayerColor,
  //       section: 4,
  //     },
  //     purple: {
  //       name: "",
  //       color: "purple" as IPlayerColor,
  //       section: 4,
  //     },
  //     red: {
  //       name: "",
  //       color: "red" as IPlayerColor,
  //       section: 4,
  //     },
  //     white: {
  //       name: "",
  //       color: "white" as IPlayerColor,
  //       section: 4,
  //     },
  //     yellow: {
  //       name: "",
  //       color: "yellow" as IPlayerColor,
  //       section: 4,
  //     },
  //   };

  //   const sections = [
  //     {
  //       id: 0,
  //       title: "main.lists.innocent",
  //       players: [],
  //     },
  //     {
  //       id: 1,
  //       title: "main.lists.suspicious",
  //       players: [
  //         {
  //           id: "brown",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "blue",
  //           chosen: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "main.lists.evilHitList",
  //       players: [],
  //     },
  //     {
  //       id: 3,
  //       title: "main.lists.dead",
  //       players: [],
  //     },
  //     {
  //       id: 4,
  //       title: "main.lists.unknown",
  //       players: [
  //         {
  //           id: "black",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "cyan",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "green",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "lime",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "orange",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "pink",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "purple",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "red",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "white",
  //           chosen: false,
  //           selected: false,
  //         },
  //         {
  //           id: "yellow",
  //           chosen: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: "main.lists.unused",
  //       players: [],
  //     },
  //   ];

  //   const colorsMenu = await screen.getByTestId(/colors-menu/);

  //   const res = swapPlayersColors("red", "blue", players, sections);

  //   console.log(res);

  //   //   await testStore.dispatch(setPlayersSections(res));

  //   //   expect(testStore.getState().PlayersSections.sections[1].players).toEqual(
  //   //     expect.arrayContaining([
  //   //       expect.objectContaining({
  //   //         id: "Blue",
  //   //         playerName: "tester1",
  //   //         color: "red",
  //   //       }),
  //   //     ])
  //   //   );
  //   //   expect(testStore.getState().PlayersSections.sections[4].players).toEqual(
  //   //     expect.arrayContaining([
  //   //       expect.objectContaining({
  //   //         id: "Red",
  //   //         playerName: "tester",
  //   //         color: "blue",
  //   //       }),
  //   //     ])
  //   //   );
  // });
});
