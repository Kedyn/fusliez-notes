import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import configureStore, { MockStore } from "redux-mock-store";
import PlayersSettings from "components/PlayersSettings";
import React from "react";

import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

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

    userEvent.click(playerNamesSwitch);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: false,
      type: "Settings/setShowNames",
    });
  });

  test("store should have been last called with isColorBlind", async () => {
    const switches = screen.getAllByRole("checkbox");

    userEvent.click(switches[1]);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: true,
      type: "Settings/setIsColorBlind",
    });
  });

  test("store should have been last called with setInitMapWithAllPlayers", async () => {
    const switches = screen.getAllByRole("checkbox");

    userEvent.click(switches[2]);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: true,
      type: "Settings/setInitMapWithAllPlayers",
    });
  });

  test("store should have been last called with setMapPlayersScale", async () => {
    const input = screen.getByRole("spinbutton");

    userEvent.clear(input);
    userEvent.type(input, "3");

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: 3,
      type: "Settings/setMapPlayersScale",
    });
  });
});
