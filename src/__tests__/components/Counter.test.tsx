import {
  decrementCrewmateWins,
  incrementCrewmateWins,
  setCrewmateWins,
} from "store/slices/ScoresSlice";
import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "components/common/Counter";
import DefaultComponentWrapper from "../DefaultComponentWrapper";
import { MockStore } from "redux-mock-store";
import React from "react";
import configureStore from "redux-mock-store";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Counter tests", () => {
  let testStore: MockStore;
  let dispatchSpy: jest.SpyInstance;

  beforeEach(async () => {
    const mockStore = configureStore();
    testStore = mockStore(store.getState());
    dispatchSpy = jest.spyOn(testStore, "dispatch");

    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={testStore}>
        <Counter
          role="crewmate-wins"
          value={0}
          min={0}
          buttonsBackgroundColor="#008dfc"
          buttonsBackgroundHoverColor="#30a4ff"
          decrement={() => testStore.dispatch(decrementCrewmateWins())}
          increment={() => testStore.dispatch(incrementCrewmateWins())}
          setValue={(value) => testStore.dispatch(setCrewmateWins(value))}
        />
      </DefaultComponentWrapper>
    );
  });

  test("the store should been last dispatched with the increment function", () => {
    const buttons = screen.getAllByRole("button");
    const increment = buttons[1];
    userEvent.click(increment);

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Scores/incrementCrewmateWins",
    });
  });

  test("the store should been last dispatched with the decrement function", () => {
    const buttons = screen.getAllByRole("button");
    const decrement = buttons[0];
    userEvent.click(decrement);

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: undefined,
      type: "Scores/decrementCrewmateWins",
    });
  });

  test("the store should been last dispatched with the setCrewmateWin function with 0 wins when the value is less than 0", async () => {
    const input = screen.getByRole("spinbutton"); // should be input, but log shows it's a spinbutton
    fireEvent.change(input, { target: { value: "-10" } });

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 0,
      type: "Scores/setCrewmateWins",
    });
  });

  test("the store should been last dispatched with the setCrewmateWin function with 15 wins", async () => {
    const input = screen.getByRole("spinbutton"); // should be input, but log shows it's a spinbutton
    fireEvent.change(input, { target: { value: "15" } });

    expect(dispatchSpy).toHaveBeenLastCalledWith({
      payload: 15,
      type: "Scores/setCrewmateWins",
    });
  });
});
