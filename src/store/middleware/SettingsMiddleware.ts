import {
  getInitMapWithAllPlayers,
  getIsColorBlind,
  getMapPlayersScale,
  getShowNames,
  getTrackEmergencyButtonUsages,
  resetSettingsState,
  setInitMapWithAllPlayers,
  setIsColorBlind,
  setMapPlayersScale,
  setShowNames,
  setTrackEmergencyButtonUsages,
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
  let trackEmergencyButtonUsages = getTrackEmergencyButtonUsages(state);
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

    case setTrackEmergencyButtonUsages.type:
      trackEmergencyButtonUsages = action.payload;

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
      trackEmergencyButtonUsages =
        DEFAULT_SETTINGS_STATE.trackEmergencyButtonUsages;
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

        trackEmergencyButtonUsages,

        isColorBlind,

        initMapWithAllPlayers,

        mapPlayersScale,
      })
    );
  }

  return next(action);
};
