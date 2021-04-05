import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import Notepad from "components/Notepad";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Notepad tests", () => {
  let testStore: MockStore;

  describe("not mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      testStore = mockStore(store.getState());

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Notepad />
        </DefaultComponentWrapper>
      );
    });

    test("simulate typing in the textarea", async () => {
      const textarea = screen.getByRole("textbox");
      userEvent.clear(textarea);

      await userEvent.type(textarea, "testing the textarea input");

      expect(Object.values(textarea)[1].value).toEqual(
        "testing the textarea input"
      );
    });

    test("simulate reset notes with button click", async () => {
      const textarea = screen.getByRole("textbox");
      userEvent.clear(textarea);
      await userEvent.type(textarea, "testing the textarea input");

      expect(Object.values(textarea)[1].value).toEqual(
        "testing the textarea input"
      );

      const resetButton = screen.getByRole("button", {
        name: "controls.resetNotes",
      });

      userEvent.click(resetButton);

      expect(Object.values(textarea)[1].value).toEqual("");
    });
  });

  describe("mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Notepad />
        </DefaultComponentWrapper>
      );
    });

    test("simulate reset notes with button click (mobile)", async () => {
      const textarea = screen.getByRole("textbox");

      await userEvent.type(textarea, "testing the textarea input");

      expect(Object.values(textarea)[1].value).toEqual(
        "testing the textarea input"
      );

      const resetButton = screen.getByRole("button", {
        name: "controls.resetNotes",
      });

      userEvent.click(resetButton);

      expect(Object.values(textarea)[1].value).toEqual("");
    });
  });
});
