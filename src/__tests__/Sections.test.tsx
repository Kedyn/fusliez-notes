import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import React from "react";
import Sections from "components/Sections";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";
import { togglePlayerEditLock } from "store/slices/PlayerEditLockSlice";
import userEvent from "@testing-library/user-event";

describe("Sections tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  describe("editing unlocked and not mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Sections />
        </DefaultComponentWrapper>
      );
    });

    test("the store should been last dispatched with togglePlayerEditLock", async () => {
      const lockEditButton = screen.getByRole("button", {
        name: "controls.lockEditing",
      });

      userEvent.click(lockEditButton);

      expect(dispatchSpy).toHaveBeenLastCalledWith({
        payload: undefined,
        type: "PlayerEditLock/togglePlayerEditLock",
      });
    });
  });

  describe("editing locked and mobile", () => {
    beforeEach(async () => {
      const mockStore = configureStore();
      store.dispatch(setIsMobile(true));
      store.dispatch(togglePlayerEditLock());
      testStore = mockStore(store.getState());
      dispatchSpy = jest.spyOn(testStore, "dispatch");

      registerFaIcons();
      await render(
        <DefaultComponentWrapper testStore={testStore}>
          <Sections />
        </DefaultComponentWrapper>
      );
    });

    test("unlock button should be in the document", async () => {
      const unlockEditButton = screen.getByRole("button", {
        name: "controls.unlockEditing",
      });

      expect(unlockEditButton).toBeInTheDocument();
    });

    test("the store should dispatch both movePlayersToResetSection and setPlayersSection on button click", async () => {
      const resetSectionButton = screen.getByRole("button", {
        name: "controls.resetSections",
      });

      userEvent.click(resetSectionButton);

      expect(dispatchSpy).toHaveBeenLastCalledWith({
        payload: 4,
        type: "Players/setPlayersSection",
      });
    });
  });
});
