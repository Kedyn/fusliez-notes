import { NAMESPACE, VERSION } from "constants/main";
import configureStore, { MockStore } from "redux-mock-store";
import { render, screen, waitFor } from "@testing-library/react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import MobileLayout from "components/MobileLayout";
import React from "react";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("MobileLayout tests", () => {
  let testStore: MockStore;

  describe("up to date version", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      await store.dispatch(setIsMobile(true));
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

      await waitFor(() => {
        expect(screen.getByText("controls.resetSections")).toBeInTheDocument();
        expect(
          screen.getByText("controls.resetEmergencyButtonUsages")
        ).toBeInTheDocument();
      });
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
        expect(screen.queryByTestId("map-canvas")).toBeInTheDocument()
      );
    });

    test("testing handleChangeActiveView for default inside switch statement", async () => {
      const button = await screen.queryByLabelText(/should not exist/i);

      if (button) await userEvent.click(button);

      await waitFor(() =>
        expect(screen.getByText("controls.resetSections")).toBeInTheDocument()
      );
    });

    test("clicking Settings button in the slide drawer should change active view to Settings", async () => {
      const drawerButton = screen.getByLabelText("navitem-menu.menu");
      userEvent.click(drawerButton);

      const settingsButton = screen.getByText("menu.settings");
      userEvent.click(settingsButton);

      await waitFor(() =>
        expect(screen.getByText("settings.title")).toBeInTheDocument()
      );
    });

    test("clicking About button in the slide drawer should change active view to About", async () => {
      const drawerButton = screen.getByLabelText("navitem-menu.menu");
      userEvent.click(drawerButton);

      const aboutButton = screen.getByText("menu.about");
      userEvent.click(aboutButton);

      await waitFor(() =>
        expect(screen.getByText("menu.about")).toBeInTheDocument()
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
