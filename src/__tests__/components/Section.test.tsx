import { render, screen } from "@testing-library/react";

import { DEFAULT_RESET_SECTION_PLAYERS } from "constants/sections";
import DefaultComponentWrapper from "../DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import React from "react";
import Section from "components/Section";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("SectionsSettings tests", () => {
  let testStore: MockStore;

  describe("isMobile === true", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      await store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());

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

    test("hitting enter should remove focus from the white player's input", () => {
      const whitePlayerInput = screen.getByPlaceholderText("main.white");

      userEvent.type(whitePlayerInput, "{enter}");

      Object.values(whitePlayerInput)[0].pendingProps.onKeyPress({
        key: "Enter",
      });

      // have to manually trigger focus
      // type 'Enter' with userEvent doesnt prompt the function as expected
      const yellowPlayerInput = screen.getByPlaceholderText("main.yellow");
      yellowPlayerInput.focus();

      expect(document.activeElement).not.toBe(whitePlayerInput);
    });

    test("hitting enter on the last input should go back to the first element in the section", async () => {
      const yellowPlayerInput = screen.getByPlaceholderText("main.yellow");
      yellowPlayerInput.focus();

      userEvent.type(yellowPlayerInput, "{enter}");

      Object.values(yellowPlayerInput)[0].pendingProps.onKeyPress({
        key: "Enter",
      });

      const brownPlayerInput = screen.getByPlaceholderText("main.brown");
      brownPlayerInput.focus();

      expect(document.activeElement).not.toBe(yellowPlayerInput);
    });

    test("hitting space on the input should not change focus", async () => {
      const bluePlayerInput = screen.getByPlaceholderText("main.blue");
      bluePlayerInput.focus();

      userEvent.type(bluePlayerInput, "{space}");

      Object.values(bluePlayerInput)[0].pendingProps.onKeyPress({
        key: "Space",
      });

      expect(document.activeElement).toBe(bluePlayerInput);
    });
  });
});
