import { IScoresState, IStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SCORES } from "constants/scores";
import { NAMESPACE } from "constants/main";

function getInitialState(): IScoresState {
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
    setCrewmateWins: (state: IScoresState, action: PayloadAction<number>) => ({
      ...state,
      crewmateWins: action.payload,
    }),
    incrementCrewmateWins: (state: IScoresState) => ({
      ...state,
      crewmateWins: state.crewmateWins + 1,
    }),
    decrementCrewmateWins: (state: IScoresState) => ({
      ...state,
      crewmateWins: state.crewmateWins ? state.crewmateWins - 1 : 0,
    }),

    setCrewmateLosses: (
      state: IScoresState,
      action: PayloadAction<number>
    ) => ({
      ...state,
      crewmateLosses: action.payload,
    }),
    incrementCrewmateLosses: (state: IScoresState) => ({
      ...state,
      crewmateLosses: state.crewmateLosses + 1,
    }),
    decrementCrewmateLosses: (state: IScoresState) => ({
      ...state,
      crewmateLosses: state.crewmateLosses ? state.crewmateLosses - 1 : 0,
    }),

    setImpostorWins: (state: IScoresState, action: PayloadAction<number>) => ({
      ...state,
      impostorWins: action.payload,
    }),
    incrementImpostorWins: (state: IScoresState) => ({
      ...state,
      impostorWins: state.impostorWins + 1,
    }),
    decrementImpostorWins: (state: IScoresState) => ({
      ...state,
      impostorWins: state.impostorWins ? state.impostorWins - 1 : 0,
    }),

    setImpostorLosses: (
      state: IScoresState,
      action: PayloadAction<number>
    ) => ({
      ...state,
      impostorLosses: action.payload,
    }),

    incrementImpostorLosses: (state: IScoresState) => ({
      ...state,
      impostorLosses: state.impostorLosses + 1,
    }),
    decrementImpostorLosses: (state: IScoresState) => ({
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

export const getCrewmateWins = (state: IStoreState): number =>
  state.ScoresState.crewmateWins;

export const getCrewmateLosses = (state: IStoreState): number =>
  state.ScoresState.crewmateLosses;

export const getImpostorWins = (state: IStoreState): number =>
  state.ScoresState.impostorWins;

export const getImpostorLosses = (state: IStoreState): number =>
  state.ScoresState.impostorLosses;

export default ScoresSlice;
