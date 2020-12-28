import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SCORES_STATE } from "constants/scores";
import { IScoresState } from "utils/types/scores";
import { IStoreState } from "utils/types/store";
import { NAMESPACE } from "constants/main";

function getInitialState(): IScoresState {
  const localScoresData: string | null = localStorage.getItem(
    `${NAMESPACE}scores`
  );

  if (localScoresData) {
    const scoresObject = JSON.parse(localScoresData);

    return {
      crewmateWins:
        scoresObject.crewmateWins ?? DEFAULT_SCORES_STATE.crewmateWins,
      crewmateLosses:
        scoresObject.crewmateLosses ?? DEFAULT_SCORES_STATE.crewmateLosses,
      impostorWins:
        scoresObject.impostorWins ?? DEFAULT_SCORES_STATE.impostorWins,
      impostorLosses:
        scoresObject.impostorLosses ?? DEFAULT_SCORES_STATE.impostorLosses,
    };
  }

  return DEFAULT_SCORES_STATE;
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

    resetScoresState: () => ({
      ...DEFAULT_SCORES_STATE,
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

  resetScoresState,
} = ScoresSlice.actions;

export const getCrewmateWins = (state: IStoreState): number =>
  state.Scores.crewmateWins;

export const getCrewmateLosses = (state: IStoreState): number =>
  state.Scores.crewmateLosses;

export const getImpostorWins = (state: IStoreState): number =>
  state.Scores.impostorWins;

export const getImpostorLosses = (state: IStoreState): number =>
  state.Scores.impostorLosses;

export default ScoresSlice;
