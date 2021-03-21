import "regenerator-runtime/runtime";

import {
  addNewSection,
  delSection,
  getDeadSectionId,
  getResetSectionId,
  getSections,
  getUnusedSectionId,
  resetSectionsState,
  setDeadSection,
  setResetSection,
  setSectionTitle,
  setSections,
  setUnusedSection,
} from "store/slices/SectionsSlice";
import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import React from "react";
import SectionsSettings from "components/SectionsSettings";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import { setIsMobile } from "store/slices/DeviceSlice";
import store from "store";

describe("SectionsSettings tests", () => {
  let testStore: any;
  let dispatchSpy: any;

  beforeEach(async () => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());
    // testStore.clearActions();
    dispatchSpy = jest.spyOn(testStore, "dispatch");

    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <SectionsSettings />
      </DefaultComponentWrapper>
    );
  });

  test("test input to change section[0] name", async () => {
    const [sectionNameInput] = screen.getAllByPlaceholderText(
      "settings.sectionName"
    );

    fireEvent.change(sectionNameInput, {
      target: { value: "testing-innocent" },
    });

    await testStore.dispatch(
      setSectionTitle({ section: 0, newTitle: "testing-innocent" })
    );

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: { newTitle: "testing-innocent", section: 0 },
      type: "Sections/setSectionTitle",
    });
  });

  // sections: [
  //   { id: 0, title: 'main.lists.innocent', players: [] },
  //   { id: 1, title: 'main.lists.suspicious', players: [] },
  //   { id: 2, title: 'main.lists.evilHitList', players: [] },
  //   { id: 3, title: 'main.lists.dead', players: [] },
  //   { id: 4, title: 'main.lists.unknown', players: [Array] },
  //   { id: 5, title: 'main.lists.unused', players: [] }
  // ]

  test("test to change section[3] as the *default* section", async () => {
    const setResetButton = await screen.getByTestId("section-3-reset");

    fireEvent.click(setResetButton);

    await testStore.dispatch(setResetSection(3));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 3,
      type: "Sections/setResetSection",
    });
  });
});
