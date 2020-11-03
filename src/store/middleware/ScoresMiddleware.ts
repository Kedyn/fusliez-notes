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
  setCrewmateLosses,
  setCrewmateWins,
  setImpostorLosses,
  setImpostorWins,
} from "store/slices/ScoresSlice";

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const ScoresMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();

  let crewmateWins = getCrewmateWins(state);
  let crewmateLosses = getCrewmateLosses(state);
  let impostorWins = getImpostorWins(state);
  let impostorLosses = getImpostorLosses(state);
  let edit = true;

  switch (action.type) {
    case setCrewmateWins.type:
      crewmateWins = action.payload;

      break;

    case incrementCrewmateWins.type:
      crewmateWins++;

      break;

    case decrementCrewmateWins.type:
      crewmateWins--;

      if (crewmateWins < 0) {
        crewmateWins = 0;
      }

      break;

    case setCrewmateLosses.type:
      crewmateLosses = action.payload;

      break;

    case incrementCrewmateLosses.type:
      crewmateLosses++;

      break;

    case decrementCrewmateLosses.type:
      crewmateLosses--;

      if (crewmateLosses < 0) {
        crewmateLosses = 0;
      }

      break;

    case setImpostorWins.type:
      impostorWins = action.payload;

      break;

    case incrementImpostorWins.type:
      impostorWins++;

      break;

    case decrementImpostorWins.type:
      impostorWins--;

      if (impostorWins < 0) {
        impostorWins = 0;
      }

      break;

    case setImpostorLosses.type:
      impostorLosses = action.paylaod;

      break;

    case incrementImpostorLosses.type:
      impostorLosses++;

      break;

    case decrementImpostorLosses.type:
      impostorLosses--;

      if (impostorLosses < 0) {
        impostorLosses - 0;
      }

      break;

    default:
      edit = false;
  }

  if (edit) {
    localStorage.setItem(
      `${NAMESPACE}scores`,
      JSON.stringify({
        crewmateWins,
        crewmateLosses,
        impostorWins,
        impostorLosses,
      })
    );
  }

  return next(action);
};
