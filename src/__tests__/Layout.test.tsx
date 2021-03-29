import { BREAKPOINT, NAMESPACE, VERSION } from "constants/main";
import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Layout from "components/Layout";
import { MockStore } from "redux-mock-store";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Layout tests", () => {
  let testStore: MockStore;

  describe("not mobile", () => {
    describe("outdated version && old data", () => {
      beforeEach(async () => {
        const mockStore = configureStore();
        testStore = mockStore(store.getState());
        localStorage.clear();
        localStorage.setItem(`${NAMESPACE}version`, "0.92");
        localStorage.setItem(
          `${NAMESPACE}data`,
          JSON.stringify({ notes: "old notes" })
        );

        registerFaIcons();
        await render(
          <DefaultComponentWrapper testStore={testStore}>
            <Layout />
          </DefaultComponentWrapper>
        );
      });

      test("version should NOT be {VERSION}", () => {
        expect(localStorage.getItem("version")).not.toBe(VERSION);
      });
    });

    describe("outdated version && NO old data", () => {
      beforeEach(async () => {
        const mockStore = configureStore();
        testStore = mockStore(store.getState());
        localStorage.clear();
        localStorage.setItem(`${NAMESPACE}version`, "0.92");
        localStorage.setItem(`${NAMESPACE}data`, "");

        registerFaIcons();
        await render(
          <DefaultComponentWrapper testStore={testStore}>
            <Layout />
          </DefaultComponentWrapper>
        );
      });

      test("local storage should NOT have notes", () => {
        expect(localStorage.getItem(`${NAMESPACE}notes`)).toBeNull();
      });

      test("resizing window should change inner width", () => {
        global.innerWidth = BREAKPOINT;
        fireEvent(global.window, new Event("resize"));

        expect(global.innerWidth).toBe(BREAKPOINT);
      });

      test("orientation change should be handled = portrait", () => {
        fireEvent(global.window, new Event("orientationchange"));
      });

      test("orientation change should be handled = ladndscape", () => {
        [global.innerWidth, global.innerHeight] = [
          global.innerHeight,
          global.innerWidth,
        ];

        fireEvent(global.window, new Event("orientationchange"));
      });
    });
  });

  describe("mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());
      localStorage.clear();

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Layout />
        </DefaultComponentWrapper>
      );
    });

    test("should render the mobile layout is isMobile === true", () => {
      const disclaimer = screen.getByText(
        /Please know that we utilize Google Analytics/g
      );

      expect(disclaimer).toBeInTheDocument();
    });

    test("clicking the Understood button should set disclaimer to Understood in storage", () => {
      const understoodButton = screen.getByText("main.understand");
      userEvent.click(understoodButton);
      expect(localStorage.getItem(`${NAMESPACE}disclaimer`)).toBe("Understood");
    });
  });
});
