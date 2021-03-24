import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import PlayersSettings from "components/PlayersSettings";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";

describe("PlayersSettings tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());
    dispatchSpy = jest.spyOn(testStore, "dispatch");

    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <PlayersSettings />
      </DefaultComponentWrapper>
    );
  });

  test("store should have been last called with setShowNames", async () => {
    const [playerNamesSwitch] = screen.getAllByRole("checkbox");

    fireEvent.click(playerNamesSwitch);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: false,
      type: "Settings/setShowNames",
    });
  });

  test("store should have been last called with isColorBlind", async () => {
    const switches = screen.getAllByRole("checkbox");

    fireEvent.click(switches[1]);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: true,
      type: "Settings/setIsColorBlind",
    });
  });
});
