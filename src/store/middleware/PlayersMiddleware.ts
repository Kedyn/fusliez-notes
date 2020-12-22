import { IPlayerColor, IPlayersState } from "utils/types/players";
import {
  getDefaultPlayersState,
  getNewPlayersState,
} from "store/shared/players";
import {
  getPlayers,
  resetPlayersState,
  setPlayer,
  setPlayerName,
  setPlayerPosition,
  setPlayerSection,
  setPlayersState,
} from "store/slices/PlayersSlice";

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
    position: { ...currentPlayersState[player].position },
  }));
  let edit = true;

  switch (action.type) {
    case setPlayerName.type:
      players[action.payload.player as IPlayerColor].name =
        action.payload.newName;

      break;

    case setPlayerPosition.type:
      players[action.payload.player as IPlayerColor].position =
        action.payload.newPosition;

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

    case resetPlayersState.type:
      players = getDefaultPlayersState();

    default:
      edit = false;

      break;
  }

  if (edit) {
    localStorage.setItem(`${NAMESPACE}players`, JSON.stringify(players));
  }

  return next(action);
};
