import { IScores, IUIStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SCORES } from "constants/scores";
import { NAMESPACE } from "constants/main";

function getInitialState(): IScores {
  const localScoresData: string | null = localStorage.getItem(
    `${NAMESPACE}scores`
  );

  if (localScoresData) {
    const scoresObject = JSON.parse(localScoresData);

    return {
      crewmateWins: scoresObject.crewmateWins ?? DEFAULT_SCORES.crewmateWins,
      crewmateLosses:
        scoresObject.crewmateLosses ?? DEFAULT_SCORES.crewmateLosses,
      impostorWins: scoresObject.impostorWins ?? DEFAULT_SCORES.impostorWins,
      impostorLosses:
        scoresObject.impostorLosses ?? DEFAULT_SCORES.impostorLosses,
    };
  }

  return DEFAULT_SCORES;
}

const ScoresSlice = createSlice({
  name: "Scores",
  initialState: getInitialState(),
  reducers: {
    setCrewmateWins: (state: IScores, action: PayloadAction<number>) => ({
      ...state,
      crewmateWins: action.payload,
    }),
    incrementCrewmateWins: (state: IScores) => ({
      ...state,
      crewmateWins: state.crewmateWins + 1,
    }),
    decrementCrewmateWins: (state: IScores) => ({
      ...state,
      crewmateWins: state.crewmateWins ? state.crewmateWins - 1 : 0,
    }),

    setCrewmateLosses: (state: IScores, action: PayloadAction<number>) => ({
      ...state,
      crewmateLosses: action.payload,
    }),
    incrementCrewmateLosses: (state: IScores) => ({
      ...state,
      crewmateLosses: state.crewmateLosses + 1,
    }),
    decrementCrewmateLosses: (state: IScores) => ({
      ...state,
      crewmateLosses: state.crewmateLosses ? state.crewmateLosses - 1 : 0,
    }),

    setImpostorWins: (state: IScores, action: PayloadAction<number>) => ({
      ...state,
      impostorWins: action.payload,
    }),
    incrementImpostorWins: (state: IScores) => ({
      ...state,
      impostorWins: state.impostorWins + 1,
    }),
    decrementImpostorWins: (state: IScores) => ({
      ...state,
      impostorWins: state.impostorWins ? state.impostorWins - 1 : 0,
    }),

    setImpostorLosses: (state: IScores, action: PayloadAction<number>) => ({
      ...state,
      impostorLosses: action.payload,
    }),

    incrementImpostorLosses: (state: IScores) => ({
      ...state,
      impostorLosses: state.impostorLosses + 1,
    }),
    decrementImpostorLosses: (state: IScores) => ({
      ...state,
      impostorLosses: state.impostorLosses ? state.impostorLosses - 1 : 0,
    }),

    resetScores: () => ({
      ...DEFAULT_SCORES,
    }),
  },
});

export const {
  setCrewmateWins,
  incrementCrewmateWins,
  decrementCrewmateWins,

  setCrewmateLosses,
  incrementCrewmateLosses,
  decrementCrewmateLosses,

  setImpostorWins,
  incrementImpostorWins,
  decrementImpostorWins,

  setImpostorLosses,
  incrementImpostorLosses,
  decrementImpostorLosses,

  resetScores,
} = ScoresSlice.actions;

export const getCrewmateWins = (state: IUIStoreState): number =>
  state.Scores.crewmateWins;

export const getCrewmateLosses = (state: IUIStoreState): number =>
  state.Scores.crewmateLosses;

export const getImpostorWins = (state: IUIStoreState): number =>
  state.Scores.impostorWins;

export const getImpostorLosses = (state: IUIStoreState): number =>
  state.Scores.impostorLosses;

export default ScoresSlice;
