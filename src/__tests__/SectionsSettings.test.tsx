import "regenerator-runtime/runtime";

import {
  addNewSection,
  delSection,
  resetSectionsState,
  setDeadSection,
  setResetSection,
  setSectionTitle,
  setUnusedSection,
} from "store/slices/SectionsSlice";
import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import React from "react";
import SectionsSettings from "components/SectionsSettings";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";

describe("SectionsSettings tests", () => {
  let testStore: any;
  let dispatchSpy: any;

  beforeEach(async () => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());
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

  test("should change section[3] as the *default/reset* section", async () => {
    const setResetButton = await screen.getByTestId("section-3-reset");

    fireEvent.click(setResetButton);

    await testStore.dispatch(setResetSection(3));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 3,
      type: "Sections/setResetSection",
    });
  });

  test("should change section[0] as the *dead* section", async () => {
    const setDeadButton = await screen.getByTestId("section-0-dead");

    fireEvent.click(setDeadButton);

    await testStore.dispatch(setDeadSection(0));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 0,
      type: "Sections/setDeadSection",
    });
  });

  test("should change section[4] as the *unused* section", async () => {
    const setUnusedButton = await screen.getByTestId("section-4-unused");

    fireEvent.click(setUnusedButton);

    await testStore.dispatch(setUnusedSection(4));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 4,
      type: "Sections/setUnusedSection",
    });
  });

  test("should delete section[1] from the list", async () => {
    const deleteSectionButton = await screen.getByTestId("delete-section-1");

    // console.log(deleteSectionButton);

    fireEvent.click(deleteSectionButton);

    await testStore.dispatch(delSection(1));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 1,
      type: "Sections/delSection",
    });
  });

  test("should reset all sections to default", async () => {
    const resetButton = await screen.getByRole("button", {
      name: "settings.resetSections",
    });

    fireEvent.click(resetButton);

    await testStore.dispatch(resetSectionsState());

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Sections/resetSectionsState",
    });
  });

  test("should add a new section to the list", async () => {
    const addButton = await screen.getByRole("button", {
      name: "settings.addSection",
    });

    fireEvent.click(addButton);

    await testStore.dispatch(addNewSection());

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Sections/addNewSection",
    });
  });
});
