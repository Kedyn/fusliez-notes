import { IPlayerColor, IPlayersState } from "utils/types/players";
import {
  getPlayers,
  resetPlayersState,
  setPlayerIsDead,
  setPlayerIsUsed,
  setPlayerName,
  setPlayerPosition,
  setPlayersState,
  toggleIsDead,
  toggleIsUsed,
} from "store/slices/PlayersSlice";

import { Middleware } from "@reduxjs/toolkit";
import { NAMESPACE } from "constants/main";
import { RootState } from "store";
import { getDefaultPlayersState } from "store/shared/players";

export const PlayersMiddleware: Middleware<unknown, RootState> = (store) => (
  next
) => (action) => {
  const state = store.getState();

  let players: IPlayersState = getPlayers(state);
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

    case setPlayerIsDead.type:
      players[action.payload.player as IPlayerColor].isDead =
        action.payload.newIsDead;

      break;

    case toggleIsDead.type:
      players[action.payload.player as IPlayerColor].isDead = !players[
        action.payload.player as IPlayerColor
      ].isDead;

    case setPlayerIsUsed.type:
      players[action.payload.player as IPlayerColor].isUsed =
        action.payload.newIsUsed;

      break;

    case toggleIsUsed.type:
      players[action.payload.player as IPlayerColor].isUsed = !players[
        action.payload.player as IPlayerColor
      ].isUsed;

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
