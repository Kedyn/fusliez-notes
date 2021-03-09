import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import {
  decrementCrewmateLosses,
  decrementCrewmateWins,
  decrementImpostorLosses,
  decrementImpostorWins,
  getCrewmateLosses,
  getCrewmateWins,
  getImpostorLosses,
  getImpostorWins,
  incrementCrewmateLosses,
  incrementCrewmateWins,
  incrementImpostorLosses,
  incrementImpostorWins,
  resetScores,
  setCrewmateLosses,
  setCrewmateWins,
  setImpostorLosses,
  setImpostorWins,
} from "store/slices/ScoresSlice";
import { fireEvent, render, screen } from "@testing-library/react";

import { DEFAULT_SCORES } from "constants/scores";
import DefaultComponentWrapper from "./DefaultComponentWrapper";
import React from "react";
import ScoreControls from "../components/ScoreControls";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("ScoreControls component tests", () => {
  const testStore = store;

  beforeEach(async () => {
    registerFaIcons();

    testStore.getState().Scores = {
      crewmateWins: 3,
      crewmateLosses: 2,
      impostorWins: 1,
      impostorLosses: 7,
    };

    await render(
      <DefaultComponentWrapper testStore={store}>
        <ScoreControls />
      </DefaultComponentWrapper>
    );
  });

  test("should render ScoreControls component", async () => {
    const component = await screen.getByTestId("score-controls");
    expect(component).toBeInTheDocument();
  });

  test("should reset scores when button is clicked", async () => {
    const resetScoresButton = await screen.getByTestId("reset-scores-button");

    await fireEvent.click(resetScoresButton);

    await testStore.dispatch(resetScores());

    expect(testStore.getState().Scores).toMatchObject(DEFAULT_SCORES);
  });
});
