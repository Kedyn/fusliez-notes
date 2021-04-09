import { Action, AnyAction, Dispatch } from "redux";
import {
  resetScoresState,
  setCrewmateLosses,
  setCrewmateWins,
  setImpostorLosses,
  setImpostorWins,
} from "store/slices/ScoresSlice";

import { DEFAULT_SCORES_STATE } from "constants/scores";
import { IPlayersState } from "utils/types/players";
import { NAMESPACE } from "constants/main";
import { ScoresMiddleware } from "store/middleware/ScoresMiddleware";
import store from "store";

interface IPlayerAction {
  player?: string;
  name?: string;
  newName?: string;
  section?: number;
  newSection?: number;
  color?: string;
}

describe("ScoresMiddleware tests", () => {
  const action = ({
    type,
    payload,
  }: {
    type: string;
    payload?: number | string | IPlayerAction | IPlayersState;
  }) => {
    return {
      type,
      payload,
    };
  };

  const next = ((action: Action) => {
    return action;
  }) as Dispatch<AnyAction>;

  beforeEach(() => {
    store.dispatch(resetScoresState());
    jest.clearAllMocks();
  });

  test("Scores/setCrewmateWins should set crewmate's win to payload in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setCrewmateWins",
        payload: 11,
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateWins: 11,
    });
  });

  test("Scores/incrementCrewmateWins should increment crewmate's win by 1 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/incrementCrewmateWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateWins: 1,
    });
  });

  test("Scores/decrementCrewmateWins should set crewmate's win to 0 if decrement sets it to < 0 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementCrewmateWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateWins: 0,
    });
  });

  test("Scores/decrementCrewmateWins should decrement crewmate's win by 1 and set in localStorage", () => {
    store.dispatch(setCrewmateWins(10));
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setCrewmateWins",
        payload: 10,
      })
    );
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementCrewmateWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateWins: 9,
    });
  });

  test("Scores/setCrewmateLosses should set crewmate's win to payload in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setCrewmateLosses",
        payload: 63,
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateLosses: 63,
    });
  });

  test("Scores/incrementCrewmateLosses should increment crewmate's loss by 1 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/incrementCrewmateLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateLosses: 1,
    });
  });

  test("Scores/decrementCrewmateLosses should set crewmate's losses to 0 if decrement sets it to < 0 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementCrewmateLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateLosses: 0,
    });
  });

  test("Scores/decrementCrewmateLosses should decrement crewmate's losses by 1 and set in localStorage", () => {
    store.dispatch(setCrewmateLosses(14));
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setCrewmateLosses",
        payload: 14,
      })
    );
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementCrewmateLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      crewmateLosses: 13,
    });
  });

  test("Scores/setImpostorWins should set impostor's win to payload in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setImpostorWins",
        payload: 22,
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorWins: 22,
    });
  });

  test("Scores/incrementImpostorWins should increment impostor's win by 1 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/incrementImpostorWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorWins: 1,
    });
  });

  test("Scores/decrementImpostorWins should set impostor's win to 0 if decrement sets it to < 0 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementImpostorWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorWins: 0,
    });
  });

  test("Scores/decrementImpostorWins should decrement Impostor's win by 1 and set in localStorage", () => {
    store.dispatch(setImpostorWins(31));
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setImpostorWins",
        payload: 31,
      })
    );
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementImpostorWins",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorWins: 30,
    });
  });

  test("Scores/incrementImpostorLosses should increment impostor's loss by 1 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/incrementImpostorLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorLosses: 1,
    });
  });

  test("Scores/decrementImpostorLosses should set impostor's losses to 0 if decrement sets it to < 0 and set in localStorage", () => {
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementImpostorLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorLosses: 0,
    });
  });

  test("Scores/decrementImpostorLosses should decrement impostor's losses by 1 and set in localStorage", () => {
    store.dispatch(setImpostorLosses(58));
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/setImpostorLosses",
        payload: 58,
      })
    );
    ScoresMiddleware(store)(next)(
      action({
        type: "Scores/decrementImpostorLosses",
      })
    );

    const scores = localStorage.getItem(`${NAMESPACE}scores`);

    expect(JSON.parse(scores as string)).toStrictEqual({
      ...DEFAULT_SCORES_STATE,
      impostorLosses: 57,
    });
  });

  test("invalid action type should not have called local storage's setItem", () => {
    const storageSpy = jest.spyOn(localStorage, "setItem");

    ScoresMiddleware(store)(next)(action({ type: "Scores" }));

    expect(storageSpy).toHaveBeenCalledTimes(0);
  });
});
