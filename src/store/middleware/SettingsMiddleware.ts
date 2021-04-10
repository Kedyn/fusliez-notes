import {
  getInitMapWithAllPlayers,
  getIsColorBlind,
  getMapPlayersScale,
  getShowNames,
  resetSettingsState,
  setInitMapWithAllPlayers,
  setIsColorBlind,
  setMapPlayersScale,
  setShowNames,
  toggleInitMapWithAllPlayers,
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
  let initMapWithAllPlayers = getInitMapWithAllPlayers(state);
  let mapPlayersScale = getMapPlayersScale(state);
  let edit = true;

  switch (action.type) {
    case setShowNames.type:
      showNames = action.payload;

      break;

    case toggleShowNames.type:
      showNames = !showNames;

      break;

    case setIsColorBlind.type:
      isColorBlind = action.payload;

      break;

    case toggleIsColorBlind.type:
      isColorBlind = !isColorBlind;

      break;

    case setInitMapWithAllPlayers.type:
      initMapWithAllPlayers = action.payload;

      break;

    case toggleInitMapWithAllPlayers.type:
      initMapWithAllPlayers = !initMapWithAllPlayers;

      break;

    case setMapPlayersScale.type:
      mapPlayersScale = action.payload;

      break;

    case resetSettingsState.type:
      showNames = DEFAULT_SETTINGS_STATE.showNames;
      isColorBlind = DEFAULT_SETTINGS_STATE.isColorBlind;
      initMapWithAllPlayers = DEFAULT_SETTINGS_STATE.initMapWithAllPlayers;
      mapPlayersScale = DEFAULT_SETTINGS_STATE.mapPlayersScale;

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

        initMapWithAllPlayers,

        mapPlayersScale,
      })
    );
  }

  return next(action);
};
