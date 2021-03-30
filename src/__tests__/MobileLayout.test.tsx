import { BREAKPOINT, NAMESPACE, VERSION } from "constants/main";
import { fireEvent, render, screen } from "@testing-library/react";

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
            <MobileLayout />
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
            <MobileLayout />
          </DefaultComponentWrapper>
        );
      });

      test("local storage should NOT have notes", () => {
        expect(localStorage.getItem(`${NAMESPACE}notes`)).toBeNull();
      });
    });
  });
});
