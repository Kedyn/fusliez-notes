import { NAMESPACE, VERSION } from "constants/main";
import { render, screen, waitFor } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import MobileLayout from "components/MobileLayout";
import { MockStore } from "redux-mock-store";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("MobileLayout tests", () => {
  let testStore: MockStore;

  describe("up to date version", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      testStore = mockStore(store.getState());
      localStorage.setItem(`${NAMESPACE}version`, VERSION);

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <MobileLayout />
        </DefaultComponentWrapper>
      );
    });

    test(`version should be ${VERSION}`, () => {
      expect(localStorage.getItem(`${NAMESPACE}version`)).toBe(VERSION);
    });

    test("testing handleChangeActiveView for menu.players", async () => {
      const button = await screen.queryByLabelText(/navitem-menu.notes/i);

      if (button) await userEvent.click(button);
      const playersButton = await screen.queryByLabelText(
        /navitem-menu.players/i
      );

      if (playersButton) await userEvent.click(playersButton);
      else throw new Error("cannot find playersButton in the document");

      await waitFor(() =>
        expect(screen.getByText(/controls/i)).toBeInTheDocument()
      );
    });

    test("testing handleChangeActiveView for menu.notes", async () => {
      const button = await screen.queryByLabelText(/navitem-menu.notes/i);

      if (button) await userEvent.click(button);
      else throw new Error("cannot find button in the document");

      await waitFor(() =>
        expect(screen.getByRole("textbox")).toBeInTheDocument()
      );
    });

    test("testing handleChangeActiveView for menu.scores", async () => {
      const button = await screen.queryByLabelText(/navitem-menu.scores/i);

      if (button) await userEvent.click(button);
      else throw new Error("cannot find button in the document");

      await waitFor(() =>
        expect(screen.getByText("main.crewmate")).toBeInTheDocument()
      );
    });

    test("testing handleChangeActiveView for menu.maps", async () => {
      const button = await screen.queryByLabelText(/navitem-menu.maps/i);

      if (button) await userEvent.click(button);
      else throw new Error("cannot find button in the document");

      await waitFor(() =>
        expect(
          screen.queryByRole("button", { name: "Mira HQ" })
        ).toBeInTheDocument()
      );
    });

    test("testing handleChangeActiveView for default inside switch statement", async () => {
      const button = await screen.queryByLabelText(/should not exist/i);

      if (button) await userEvent.click(button);

      await waitFor(() =>
        expect(screen.getByText(/controls/i)).toBeInTheDocument()
      );
    });
  });

  describe("outdated version", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      await store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());
      localStorage.setItem(`${NAMESPACE}version`, "0.92");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <MobileLayout />
        </DefaultComponentWrapper>
      );
    });

    test(`version should NOT be ${VERSION}`, () => {
      expect(localStorage.getItem("version")).not.toBe(VERSION);
    });

    test("should render the changelog view if version is outdated", async () => {
      const versionHeader = await screen.queryByText(
        `fusliez notes v${VERSION}`
      );
      await waitFor(() => expect(versionHeader).toBeInTheDocument());
    });
  });
});
