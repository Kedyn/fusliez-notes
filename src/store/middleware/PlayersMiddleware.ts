import { IPlayerColor, IPlayersState } from "utils/types/players";
import {
  getDefaultPlayersState,
  getNewPlayersState,
} from "store/shared/players";
import {
  getPlayers,
  resetPlayersNames,
  resetPlayersState,
  resetPlayersUsedEmergencyButton,
  setPlayer,
  setPlayerName,
  setPlayerSection,
  setPlayerUsedEmergencyButton,
  setPlayersSection,
  setPlayersState,
} from "store/slices/PlayersSlice";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";

export const PlayersMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();
  const currentPlayersState = getPlayers(state);

  let players: IPlayersState = getNewPlayersState((player: IPlayerColor) => ({
    ...currentPlayersState[player],
  }));
  let edit = true;

  switch (action.type) {
    case setPlayerName.type:
      players[action.payload.player as IPlayerColor].name =
        action.payload.newName;

      break;

    case setPlayerUsedEmergencyButton.type:
      players[action.payload.player as IPlayerColor].usedEmergencyButton =
        action.payload.usedEmergencyButton;

      break;

    case setPlayerSection.type:
      players[action.payload.player as IPlayerColor].section =
        action.payload.newSection;

      break;

    case setPlayer.type:
      players[action.payload.color as IPlayerColor] = action.payload;

      break;

    case setPlayersState.type:
      players = action.payload;

      break;

    case setPlayersSection.type:
      players = getNewPlayersState((player: IPlayerColor) => ({
        ...currentPlayersState[player],

        section: action.payload,
      }));

      break;

    case resetPlayersNames.type:
      players = getNewPlayersState((player: IPlayerColor) => ({
        ...currentPlayersState[player],

        name: DEFAULT_PLAYERS_STATE[player].name,
      }));

      break;

    case resetPlayersUsedEmergencyButton.type:
      players = getNewPlayersState((player: IPlayerColor) => ({
        ...currentPlayersState[player],

        usedEmergencyButton: DEFAULT_PLAYERS_STATE[player].usedEmergencyButton,
      }));

      break;

    case resetPlayersState.type:
      players = getDefaultPlayersState();

      break;

    default:
      edit = false;

      break;
  }

  if (edit) {
    localStorage.setItem(`${NAMESPACE}players`, JSON.stringify(players));
  }

  return next(action);
};
