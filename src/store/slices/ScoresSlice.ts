import { IScores, IUISliceState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_SCORES } from "utils/constants";

const ScoresSlice = createSlice({
  name: "Scores",
  initialState: DEFAULT_SCORES,
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

export const getCrewmateWins = (state: IUISliceState): number =>
  state.Scores.crewmateWins;

export const getCrewmateLosses = (state: IUISliceState): number =>
  state.Scores.crewmateLosses;

export const getImpostorWins = (state: IUISliceState): number =>
  state.Scores.impostorWins;

export const getImpostorLosses = (state: IUISliceState): number =>
  state.Scores.impostorLosses;

export default ScoresSlice;
