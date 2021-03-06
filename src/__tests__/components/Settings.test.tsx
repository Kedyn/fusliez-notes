import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import configureStore, { MockStore } from "redux-mock-store";
import React from "react";
import Settings from "components/Settings";

import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Settings tests", () => {
  let testStore: MockStore;

  beforeEach(async () => {
    const mockStore = configureStore();
    store.dispatch(setIsMobile(true));
    testStore = mockStore(store.getState());

    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <Settings />
      </DefaultComponentWrapper>
    );
  });

  test("header settings.title should be in the document", async () => {
    const title = screen.getByText("settings.title");

    expect(title).toBeInTheDocument();
  });

  test("clicking a button should set the pressed state to true since index === currentContent", () => {
    const sectionsTabButton = screen.getByRole("button", {
      name: "settings.sectionsTab",
    });

    userEvent.click(sectionsTabButton);

    expect(Object.values(sectionsTabButton)[1].className).toMatch(/pressed/);
  });
});
