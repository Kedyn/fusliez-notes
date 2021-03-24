import React, { KeyboardEvent } from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import Player from "components/Player";
import configureStore from "redux-mock-store";
import { handleKeyPress } from "components/Player/Player";
import registerFaIcons from "utils/registerFaIcons";
import { setIsColorBlind } from "store/slices/SettingsSlice";
import { setIsMobile } from "store/slices/DeviceSlice";
import { setPlayerEditLock } from "store/slices/PlayerEditLockSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Player tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  describe("not locked and not mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(false));
      store.dispatch(setPlayerEditLock(false));
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Player playerId="orange" />
        </DefaultComponentWrapper>
      );
    });

    test("test player name input", () => {
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "fuslie" } });

      expect(dispatchSpy).toHaveBeenLastCalledWith({
        payload: { player: "orange", newName: "fuslie" },
        type: "Players/setPlayerName",
      });
    });

    test("should render color menu when player icon is clicked", () => {
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "fuslie" } });

      expect(dispatchSpy).toHaveBeenLastCalledWith({
        payload: { player: "orange", newName: "fuslie" },
        type: "Players/setPlayerName",
      });
    });

    test("should show color menu when player icon is clicked", () => {
      const icon = screen.getByTestId("orange-player-icon");
      fireEvent.click(icon);

      const colorsMenu = screen.queryByTestId("colors-menu");

      expect(colorsMenu).toBeInTheDocument();
    });

    // test("hitting enter should remove focus from the element", () => {
    //   const player = screen.getByRole("textbox");
    //   player.focus();
    //   // userEvent.type(player, "{enter}");

    //   Object.values(player)[1].onKeyPress(
    //     (e: KeyboardEvent<HTMLInputElement>) => {
    //       e.key = "Enter";
    //       handleKeyPress(e, Object.values(player)[0].ref.current);
    //     }
    //   );

    //   expect(document.activeElement).not.toBe(player);
    // });
  });

  describe("locked, mobile, and colorblind === true", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(true));
      store.dispatch(setPlayerEditLock(true));
      store.dispatch(setIsColorBlind(true));
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Player playerId="orange" />
        </DefaultComponentWrapper>
      );
    });

    test("color blind on: should see player color in the component", () => {
      const playerNameElements = screen.getAllByText("main.orange");

      const playerName = playerNameElements[playerNameElements.length - 1];

      expect(playerName).toBeInTheDocument();
    });

    test("should show p tag with color name if no name is entered", () => {
      const [player] = screen.getAllByText("main.orange");

      expect(player).toBeInTheDocument();
    });

    test("should NOT show color menu when player icon is clicked since it's locked", () => {
      const icon = screen.getByTestId("orange-player-icon");
      fireEvent.click(icon);

      const colorsMenu = screen.queryByTestId("colors-menu");

      expect(colorsMenu).not.toBeInTheDocument();
    });
  });
});
