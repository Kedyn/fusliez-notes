import ScoresSlice, {
  getCrewmateLosses,
  getCrewmateWins,
  getImpostorLosses,
  getImpostorWins,
  getInitialState,
} from "store/slices/ScoresSlice";

import { DEFAULT_SCORES_STATE } from "constants/scores";
import { NAMESPACE } from "constants/main";
import store from "store";

describe("ScoresSlice tests", () => {
  const state = store.getState().Scores;

  beforeEach(() => {
    localStorage.clear();
  });

  test("getInitialState should return state from local storage if the key exists", () => {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins: 3,
        crewmateLosses: 1,
        impostorWins: 5,
        impostorLosses: 2,
      })
    );

    expect(getInitialState()).toEqual({
      crewmateWins: 3,
      crewmateLosses: 1,
      impostorWins: 5,
      impostorLosses: 2,
    });
  });

  test("getInitialState should return state from local storage if the key exists (no values provided)", () => {
    localStorage.setItem(`${NAMESPACE}scores`, JSON.stringify(""));

    expect(getInitialState()).toEqual({
      crewmateWins: 0,
      crewmateLosses: 0,
      impostorWins: 0,
      impostorLosses: 0,
    });
  });

  test("setCrewmateWins should return state object with crewmate wins updated", () => {
    expect(
      ScoresSlice.caseReducers.setCrewmateWins(state, {
        payload: 4,
        type: "string",
      })
    ).toEqual({ ...state, crewmateWins: 4 });
  });

  test("incrementCrewmateWins should return state object with crewmate wins + 1", () => {
    expect(ScoresSlice.caseReducers.incrementCrewmateWins(state)).toEqual({
      ...state,
      crewmateWins: state.crewmateWins + 1,
    });
  });

  test("decrementCrewmateWins should return state object with crewmate wins - 1 if crewmate wins if wins > 0", () => {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins: 11,
        crewmateLosses: 0,
        impostorWins: 0,
        impostorLosses: 0,
      })
    );

    const testState = getInitialState();

    expect(ScoresSlice.caseReducers.decrementCrewmateWins(testState)).toEqual({
      ...testState,
      crewmateWins: 10,
    });
  });

  test("decrementCrewmateWins should return state object with crewmate wins - 1", () => {
    expect(ScoresSlice.caseReducers.decrementCrewmateWins(state)).toEqual({
      ...state,
      crewmateWins: 0,
    });
  });

  test("setCrewmateLosses should return state object with crewmate losses updated", () => {
    expect(
      ScoresSlice.caseReducers.setCrewmateLosses(state, {
        payload: 88,
        type: "string",
      })
    ).toEqual({ ...state, crewmateLosses: 88 });
  });

  test("incrementCrewmateLosses should return state object with crewmate losses + 1", () => {
    expect(ScoresSlice.caseReducers.incrementCrewmateLosses(state)).toEqual({
      ...state,
      crewmateLosses: state.crewmateLosses + 1,
    });
  });

  test("decrementCrewmateLosses should return state object with crewmate losses - 1 if crewmate losses if losses > 0", () => {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins: 0,
        crewmateLosses: 5,
        impostorWins: 0,
        impostorLosses: 0,
      })
    );

    const testState = getInitialState();

    expect(ScoresSlice.caseReducers.decrementCrewmateLosses(testState)).toEqual(
      {
        ...testState,
        crewmateLosses: 4,
      }
    );
  });

  test("decrementCrewmateLosses should return state object with crewmate losses - 1", () => {
    expect(ScoresSlice.caseReducers.decrementCrewmateLosses(state)).toEqual({
      ...state,
      crewmateLosses: 0,
    });
  });

  test("setImpostorWins should return state object with Impostor wins updated", () => {
    expect(
      ScoresSlice.caseReducers.setImpostorWins(state, {
        payload: 13,
        type: "string",
      })
    ).toEqual({ ...state, impostorWins: 13 });
  });

  test("incrementImpostorWins should return state object with Impostor wins + 1", () => {
    expect(ScoresSlice.caseReducers.incrementImpostorWins(state)).toEqual({
      ...state,
      impostorWins: state.impostorWins + 1,
    });
  });

  test("decrementImpostorWins should return state object with impostor wins - 1 if impostor wins if wins > 0", () => {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins: 0,
        crewmateLosses: 0,
        impostorWins: 6,
        impostorLosses: 0,
      })
    );

    const testState = getInitialState();

    expect(ScoresSlice.caseReducers.decrementImpostorWins(testState)).toEqual({
      ...testState,
      impostorWins: 5,
    });
  });

  test("decrementImpostorWins should return state object with impostor wins - 1", () => {
    expect(ScoresSlice.caseReducers.decrementImpostorWins(state)).toEqual({
      ...state,
      impostorWins: 0,
    });
  });

  test("setImpostorLosses should return state object with impostor losses updated", () => {
    expect(
      ScoresSlice.caseReducers.setImpostorLosses(state, {
        payload: 22,
        type: "string",
      })
    ).toEqual({ ...state, impostorLosses: 22 });
  });

  test("incrementImpostorLosses should return state object with impostor losses + 1", () => {
    expect(ScoresSlice.caseReducers.incrementImpostorLosses(state)).toEqual({
      ...state,
      impostorLosses: state.impostorLosses + 1,
    });
  });

  test("decrementImpostorLosses should return state object with impostor losses - 1 if impostor losses if losses > 0", () => {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins: 0,
        crewmateLosses: 0,
        impostorWins: 0,
        impostorLosses: 28,
      })
    );

    const testState = getInitialState();

    expect(ScoresSlice.caseReducers.decrementImpostorLosses(testState)).toEqual(
      {
        ...testState,
        impostorLosses: 27,
      }
    );
  });

  test("decrementImpostorLosses should return state object with impostor losses - 1", () => {
    expect(ScoresSlice.caseReducers.decrementImpostorLosses(state)).toEqual({
      ...state,
      impostorLosses: 0,
    });
  });

  test("resetScoresState should return the dfault scores", () => {
    expect(ScoresSlice.caseReducers.resetScoresState()).toEqual({
      ...DEFAULT_SCORES_STATE,
    });
  });

  test("getCrewmateWins should return the current crewmate wins", () => {
    expect(getCrewmateWins(store.getState())).toEqual(
      store.getState().Scores.crewmateWins
    );
  });

  test("getCrewmateLosses should return the current crewmate losses", () => {
    expect(getCrewmateLosses(store.getState())).toEqual(
      store.getState().Scores.crewmateLosses
    );
  });

  test("getImpostorWins should return the current impostor wins", () => {
    expect(getImpostorWins(store.getState())).toEqual(
      store.getState().Scores.impostorWins
    );
  });

  test("getImpostorLosses should return the current impostor losses", () => {
    expect(getImpostorLosses(store.getState())).toEqual(
      store.getState().Scores.impostorLosses
    );
  });
});
