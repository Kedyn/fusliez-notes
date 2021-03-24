import React, { KeyboardEvent } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_RESET_SECTION_PLAYERS } from "constants/sections";
import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import Section from "components/Section";
import configureStore from "redux-mock-store";
import { handleKeyPress } from "components/Player/Player";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("SectionsSettings tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  describe("isMobile === true", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      await store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");
      //   await testStore.dispatch(setIsMobile(true));

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Section
            data={{
              id: 4,
              title: "main.lists.unknown",
              players: DEFAULT_RESET_SECTION_PLAYERS,
            }}
          />
        </DefaultComponentWrapper>
      );
    });

    test("isMobile should be true", () => {
      expect(testStore.getState().Device.isMobile).toBeTruthy();
    });
  });

  describe("isMobile === false", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Section
            data={{
              id: 4,
              title: "main.lists.unknown",
              players: DEFAULT_RESET_SECTION_PLAYERS,
            }}
          />
        </DefaultComponentWrapper>
      );
    });

    test("hitting enter should remove focus from the yellow player's input", () => {
      const yellowPlayerInput = screen.getByPlaceholderText("main.yellow");
      // console.log(yellowPlayerInput);
      yellowPlayerInput.focus();
      // userEvent.type(yellowPlayerInput, "{enter}");

      console.log(yellowPlayerInput);

      // Object.values(yellowPlayerInput)[1].onKeyPress(
      //   (e: KeyboardEvent<HTMLInputElement>) => {
      //     e.key = "Enter";
      //     handleKeyPress(e, Object.values(yellowPlayerInput)[0].ref.current);
      //   }
      // );

      // // console.log(document.activeElement);
      // expect(document.activeElement).not.toBe(yellowPlayerInput);
    });

    // test("dragging a player should set isSorting to true and adds 'dragging' to className", async () => {
    //   //   const yellowPlayer = screen.getByTitle("yellow");
    //   //   yellowPlayer.dispatchEvent(createBubbledEvent("dragstart"));
    //   //   fireEvent.dragStart(yellowPlayer);
    //   //   console.log(Object.values(yellowPlayer)[0]);
    //   //   fireEvent.drag(yellowPlayer);
    //   const div = document.getElementById("Section4");

    //   if (div) {
    //     const { onChoose } = Object.values(div)[2].options;
    //     const mockFn = jest.fn(onChoose);
    //     // mockFn();
    //     screen.debug();
    //   }
    //   //   screen.debug();
    //   //   expect(container.querySelector("body")).toHaveClass("dragging");
    //   //   console.log(yellowPlayer);
    // });
  });
});
