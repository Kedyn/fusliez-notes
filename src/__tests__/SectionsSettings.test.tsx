import {
  addNewSection,
  delSection,
  resetSectionsState,
  setDeadSection,
  setResetSection,
  setSectionTitle,
  setUnusedSection,
} from "store/slices/SectionsSlice";
import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import React from "react";
import SectionsSettings from "components/SectionsSettings";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("SectionsSettings tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

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

  test("the store should been last dispatched with the setSectionTitle", async () => {
    const [sectionNameInput] = screen.getAllByPlaceholderText(
      "settings.sectionName"
    );

    await userEvent.type(sectionNameInput, "testing-innocent");

    await testStore.dispatch(
      setSectionTitle({ section: 0, newTitle: "testing-innocent" })
    );

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: { newTitle: "testing-innocent", section: 0 },
      type: "Sections/setSectionTitle",
    });
  });

  test("the store should been last dispatched with the setResetSection function with section id 3", async () => {
    const setResetButton = await screen.getByTestId("section-3-reset");

    userEvent.click(setResetButton);

    await testStore.dispatch(setResetSection(3));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 3,
      type: "Sections/setResetSection",
    });
  });

  test("the store should been last dispatched with the setDeadSection function with section id 0", async () => {
    const setDeadButton = await screen.getByTestId("section-0-dead");

    userEvent.click(setDeadButton);

    await testStore.dispatch(setDeadSection(0));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 0,
      type: "Sections/setDeadSection",
    });
  });

  test("the store should been last dispatched with the setUnusedSection function with section id 4", async () => {
    const setUnusedButton = await screen.getByTestId("section-4-unused");

    userEvent.click(setUnusedButton);

    await testStore.dispatch(setUnusedSection(4));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 4,
      type: "Sections/setUnusedSection",
    });
  });

  test("the store should been last dispatched with the delSection function with section id 1", async () => {
    const deleteSectionButton = await screen.getByTestId("delete-section-1");

    userEvent.click(deleteSectionButton);

    await testStore.dispatch(delSection(1));

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 1,
      type: "Sections/delSection",
    });
  });

  test("the store should been last dispatched with the resetSectionsState function", async () => {
    const resetButton = await screen.getByRole("button", {
      name: "settings.resetSections",
    });

    userEvent.click(resetButton);

    await testStore.dispatch(resetSectionsState());

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Sections/resetSectionsState",
    });
  });

  test("the store should been last dispatched with the addNewSection function", async () => {
    const addButton = await screen.getByRole("button", {
      name: "settings.addSection",
    });

    userEvent.click(addButton);

    await testStore.dispatch(addNewSection());

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Sections/addNewSection",
    });
  });
});
