import {
  getIsColorBlind,
  getShowNames,
  resetSettingsState,
  setIsColorBlind,
  setShowNames,
  toggleIsColorBlind,
  toggleShowNames,
} from "store/slices/SettingsSlice";

import { DEFAULT_SETTINGS_STATE } from "constants/settings";
import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const SettingsMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();

  let showNames = getShowNames(state);
  let isColorBlind = getIsColorBlind(state);
  let edit = true;

  switch (action.type) {
    case setShowNames.type:
      showNames = action.payload;

      break;

    case toggleShowNames.type:
      showNames = !getShowNames(state);

      break;

    case setIsColorBlind.type:
      isColorBlind = action.payload;

      break;

    case toggleIsColorBlind.type:
      isColorBlind = !getIsColorBlind(state);

      break;

    case resetSettingsState.type:
      showNames = DEFAULT_SETTINGS_STATE.showNames;
      isColorBlind = DEFAULT_SETTINGS_STATE.isColorBlind;

      break;

    default:
      edit = false;
  }

  if (edit) {
    localStorage.setItem(
      `${NAMESPACE}settings`,
      JSON.stringify({
        showNames,

        isColorBlind,
      })
    );
  }

  return next(action);
};
