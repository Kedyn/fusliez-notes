import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import { COLOR_LIBRARY } from "constants/theme";
import ColorsMenu from "components/ColorsMenu";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import store from "store";
import { swapPlayersColors } from "components/ColorsMenu/ColorsMenu";

// import { movePlayersToSection } from "store/shared/sections";

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

  test("should render all 12 color swatches", async () => {
    const colorsMenu = await screen.getByTestId(/colors-menu/);

    expect(
      Object.values(colorsMenu)[0].memoizedProps.children.props.colors
    ).toHaveLength(12);
  });

  test("should not swap color if the current and target colors are the same", async () => {
    // console.log(testStore.getState());
    const tempStore = testStore.getState().Sections.sections;

    const colorsMenu = await screen.getByTestId(/colors-menu/);

    // console.log(
    //   Object.values(colorsMenu)[0].memoizedProps.children.props.onChange({
    //     hsl: {
    //       h: 0,
    //       s: 0.8411214953271029,
    //       l: 0.4196078431372549,
    //       a: 1,
    //     },
    //     hex: "#c51111",
    //     rgb: {
    //       r: 197,
    //       g: 17,
    //       b: 17,
    //       a: 1,
    //     },
    //     hsv: {
    //       h: 0,
    //       s: 0.9137055837563453,
    //       v: 0.7725490196078432,
    //       a: 1,
    //     },
    //     oldHue: 0,
    //     source: "hex",
    //   })
    // ); //red

    Object.values(colorsMenu)[0].memoizedProps.children.props.onChange({
      hsl: {
        h: 265.2857142857143,
        s: 0.5932203389830508,
        l: 0.4627450980392157,
        a: 1,
      },
      hex: "#6b30bc",
      rgb: {
        r: 107,
        g: 48,
        b: 188,
        a: 1,
      },
      hsv: {
        h: 265.2857142857143,
        s: 0.7446808510638298,
        v: 0.7372549019607844,
        a: 1,
      },
      oldHue: 60,
      source: "hex",
    });
    //yellow

    // fireEvent.click(redColorSwatch);

    expect(testStore.getState().Sections.sections).toStrictEqual(tempStore);
  });

  // test("should swap color of two players if their colors are different (in different sections)", async () => {
  //   testStore = store;

  //   await testStore.dispatch(
  //     setPlayersSections([
  //       { id: 0, title: "main.lists.innocent", players: [] },
  //       {
  //         id: 1,
  //         title: "main.lists.suspicious",
  //         players: [{ id: "Blue", playerName: "tester1", color: "blue" }],
  //       },
  //       { id: 2, title: "main.lists.evilHitList", players: [] },
  //       { id: 3, title: "main.lists.dead", players: [] },
  //       {
  //         id: 4,
  //         title: "main.lists.unknown",
  //         players: [
  //           { id: "Brown", playerName: "", color: "brown" },
  //           { id: "Red", playerName: "tester", color: "red" },
  //           { id: "Orange", playerName: "", color: "orange" },
  //           { id: "Yellow", playerName: "", color: "yellow" },
  //           { id: "Lime", playerName: "", color: "lime" },
  //           { id: "Green", playerName: "", color: "green" },
  //           { id: "Cyan", playerName: "", color: "cyan" },
  //           { id: "Purple", playerName: "", color: "purple" },
  //           { id: "Pink", playerName: "", color: "pink" },
  //           { id: "White", playerName: "", color: "white" },
  //           { id: "Black", playerName: "", color: "black" },
  //         ],
  //       },
  //       { id: 5, title: "main.lists.unused", players: [] },
  //     ])
  //   );

  //   const currentStore = await testStore.getState().PlayersSections.sections;
  //   const res = swapPlayersColors("red", "blue", currentStore) ?? currentStore;

  //   await testStore.dispatch(setPlayersSections(res));

  //   expect(testStore.getState().PlayersSections.sections[1].players).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         id: "Blue",
  //         playerName: "tester1",
  //         color: "red",
  //       }),
  //     ])
  //   );
  //   expect(testStore.getState().PlayersSections.sections[4].players).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         id: "Red",
  //         playerName: "tester",
  //         color: "blue",
  //       }),
  //     ])
  //   );
  // });
});
