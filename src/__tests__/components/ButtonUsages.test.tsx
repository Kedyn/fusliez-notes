import configureStore, { MockStore } from "redux-mock-store";
import { render, screen } from "@testing-library/react";

import EmergencyButtonUsages from "components/EmergencyButtonUsages";
import DefaultComponentWrapper from "../DefaultComponentWrapper";
import React from "react";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("EmergencyButtonUsages tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  describe("mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(true));
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");
      testStore.clearActions();

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <EmergencyButtonUsages />
        </DefaultComponentWrapper>
      );
    });

    test("the store should dispatch resetPlayersUsedEmergencyButton on button click", async () => {
      const resetPlayersUsedEmergencyButtonButton = screen.getByRole("button", {
        name: "controls.resetEmergencyButtonUsages",
      });

      userEvent.click(resetPlayersUsedEmergencyButtonButton);

      expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: "Players/resetPlayersUsedEmergencyButton",
      });
    });
  });
});
