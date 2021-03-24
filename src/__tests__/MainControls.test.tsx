import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import MainControls from "components/MainControls";
import { MockStore } from "redux-mock-store";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { resetAll } from "components/MainControls/MainControls";
import store from "store";

describe("MainControls tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());
    dispatchSpy = jest.spyOn(testStore, "dispatch");
    testStore.clearActions();

    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <MainControls />
      </DefaultComponentWrapper>
    );
  });

  test("resetAll function test: store should have been last dispatched with resetPlayerState", async () => {
    resetAll(testStore.dispatch);

    expect(testStore.getActions()).toEqual([
      { type: "Scores/resetScoresState", payload: undefined },
      { type: "Sections/movePlayersToResetSection", payload: undefined },
      { type: "Players/resetPlayersState", payload: undefined },
    ]);
  });

  describe("Crewmate wins counter test", () => {
    test("store should have last dispatched with incrementCrewmateWins on button click", () => {
      const incrementWinButton = screen.getByRole("button", {
        name: "crewmate-wins-increment",
      });

      fireEvent.click(incrementWinButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/incrementCrewmateWins",
      });
    });

    test("store should have last dispatched with decrementCrewmateWins on button click", () => {
      const decrementWinButton = screen.getByRole("button", {
        name: "crewmate-wins-decrement",
      });

      fireEvent.click(decrementWinButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/decrementCrewmateWins",
      });
    });

    test("store should have last dispatched with setCrewmateWins onChange", () => {
      const setWinInput = screen.getByLabelText("set-crewmate-wins");

      fireEvent.change(setWinInput, { target: { value: 17 } });

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: 17,
        type: "Scores/setCrewmateWins",
      });
    });
  });

  describe("Impostor wins counter test", () => {
    test("store should have last dispatched with incrementImpostorWins on button click", () => {
      const incrementWinButton = screen.getByRole("button", {
        name: "impostor-wins-increment",
      });

      fireEvent.click(incrementWinButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/incrementImpostorWins",
      });
    });

    test("store should have last dispatched with decrementImpostorWins on button click", () => {
      const decrementWinButton = screen.getByRole("button", {
        name: "impostor-wins-decrement",
      });

      fireEvent.click(decrementWinButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/decrementImpostorWins",
      });
    });

    test("store should have last dispatched with setImpostorWins onChange", () => {
      const setWinInput = screen.getByLabelText("set-impostor-wins");

      fireEvent.change(setWinInput, { target: { value: 66 } });

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: 66,
        type: "Scores/setImpostorWins",
      });
    });
  });

  describe("Crewmate losses counter test", () => {
    test("store should have last dispatched with incrementCrewmateLosses on button click", () => {
      const incrementLossButton = screen.getByRole("button", {
        name: "crewmate-losses-increment",
      });

      fireEvent.click(incrementLossButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/incrementCrewmateLosses",
      });
    });

    test("store should have last dispatched with decrementCrewmateLosses on button click", () => {
      const decrementLossButton = screen.getByRole("button", {
        name: "crewmate-losses-decrement",
      });

      fireEvent.click(decrementLossButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/decrementCrewmateLosses",
      });
    });

    test("store should have last dispatched with setCrewmateLosses onChange", () => {
      const setWinInput = screen.getByLabelText("set-crewmate-losses");

      fireEvent.change(setWinInput, { target: { value: 3 } });

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: 3,
        type: "Scores/setCrewmateLosses",
      });
    });
  });

  describe("Impostor losses counter test", () => {
    test("store should have last dispatched with incrementImpostorLosses on button click", () => {
      const incrementLossButton = screen.getByRole("button", {
        name: "impostor-losses-increment",
      });

      fireEvent.click(incrementLossButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/incrementImpostorLosses",
      });
    });

    test("store should have last dispatched with decrementImpostorLosses on button click", () => {
      const decrementLossButton = screen.getByRole("button", {
        name: "impostor-losses-decrement",
      });

      fireEvent.click(decrementLossButton);

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: undefined,
        type: "Scores/decrementImpostorLosses",
      });
    });

    test("store should have last dispatched with setImpostorLosses onChange", () => {
      const setWinInput = screen.getByLabelText("set-impostor-losses");

      fireEvent.change(setWinInput, { target: { value: 10 } });

      expect(dispatchSpy).toHaveBeenCalledWith({
        payload: 10,
        type: "Scores/setImpostorLosses",
      });
    });
  });

  test("store should be last dispatched with resetScoresState on button click", () => {
    const resetScoreButton = screen.getByRole("button", {
      name: "controls.resetScores",
    });

    fireEvent.click(resetScoreButton);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: undefined,
      type: "Scores/resetScoresState",
    });
  });

  test("store should be last dispatched with movePlayersToResetSection and setPlayersSection on button click", () => {
    const resetSectionButton = screen.getByRole("button", {
      name: "controls.resetSections",
    });

    fireEvent.click(resetSectionButton);

    expect(testStore.getActions()).toEqual([
      { type: "Sections/movePlayersToResetSection", payload: undefined },
      { payload: 4, type: "Players/setPlayersSection" },
    ]);
  });

  test("store should be last dispatched with resetPlayersNames on button click", () => {
    const resetNamesButton = screen.getByRole("button", {
      name: "controls.resetNames",
    });

    fireEvent.click(resetNamesButton);

    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: undefined,
      type: "Players/resetPlayersNames",
    });
  });

  test("store should have been last dispatched with resetPlayerState", async () => {
    const resetAllButton = screen.getByRole("button", {
      name: "controls.resetAll",
    });

    fireEvent.click(resetAllButton);

    expect(testStore.getActions()).toEqual([
      { type: "Scores/resetScoresState", payload: undefined },
      { type: "Sections/movePlayersToResetSection", payload: undefined },
      { type: "Players/resetPlayersState", payload: undefined },
    ]);
  });
});
