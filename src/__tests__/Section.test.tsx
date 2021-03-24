import React, { KeyboardEvent } from "react";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_RESET_SECTION_PLAYERS } from "constants/sections";
import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import Section from "components/Section";
import configureStore from "redux-mock-store";
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

    test("hitting enter should remove focus from the yellow player's input", async () => {
      const yellowPlayerInput = screen.getByPlaceholderText("main.yellow");
      yellowPlayerInput.focus();
      const myEvent = createEvent.keyDown(yellowPlayerInput, {
        key: "Enter",
        code: "Enter",
      });

      fireEvent(yellowPlayerInput, myEvent);

      // const myEvent = createEvent.click(yellowPlayerInput, { button: 2 });
      // await fireEvent(yellowPlayerInput, myEvent);
      // console.log(myEvent);
      // userEvent.type(yellowPlayerInput, "{enter}");

      // Object.values(yellowPlayerInput)[1].onKeyPress(
      //   (e: KeyboardEvent<HTMLInputElement>) => {
      //     e.key = "Enter";
      //     handleKeyPress(e, Object.values(yellowPlayerInput)[0].ref.current);
      //   }
      // );

      // // console.log(document.activeElement);
      // expect(document.activeElement).not.toBe(yellowPlayerInput);
    });
  });
});
