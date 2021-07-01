import configureStore, { MockStore } from "redux-mock-store";
import { render, screen } from "@testing-library/react";

import EmergencyButtonUsage from "components/EmergencyButtonUsage";
import { DEFAULT_PLAYERS_STATE } from "constants/players";
import DefaultComponentWrapper from "../DefaultComponentWrapper";
import React from "react";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("EmergencyButtonUsage tests", () => {
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
        <EmergencyButtonUsage
          playerId="orange"
          player={DEFAULT_PLAYERS_STATE.orange}
        />
      </DefaultComponentWrapper>
    );
  });

  test("the store should dispatch resetPlayersUsedEmergencyButton on button click", async () => {
    const buttonUsageButton = screen.getByRole("button");

    userEvent.click(buttonUsageButton);

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: { player: "orange", usedEmergencyButton: true },
      type: "Players/setPlayerUsedEmergencyButton",
    });
  });
});
