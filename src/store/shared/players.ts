import { IPlayer, IPlayerColor, IPlayersState } from "utils/types/players";

import { DEFAULT_PLAYERS_STATE } from "constants/players";
import { NAMESPACE } from "constants/main";

export function getNewPlayersState(
  cb: (player: IPlayerColor) => IPlayer
): IPlayersState {
  const keys: Array<string> = Object.keys(DEFAULT_PLAYERS_STATE);
  const state: IPlayersState = {} as IPlayersState;

  for (const key of keys) {
    state[key as IPlayerColor] = {
      ...cb(key as IPlayerColor),
    };
  }

  return state;
}

export function getDefaultPlayersState(): IPlayersState {
  return getNewPlayersState((player: IPlayerColor) => ({
    ...DEFAULT_PLAYERS_STATE[player],

    position: { ...DEFAULT_PLAYERS_STATE[player].position },
  }));
}

export function getDefaultPlayersPositions(
  state: IPlayersState
): IPlayersState {
  return getNewPlayersState((player: IPlayerColor) => ({
    ...state[player],

    position: { ...DEFAULT_PLAYERS_STATE[player].position },
  }));
}

export function getInitialPlayersState(): IPlayersState {
  const localPlayersData: string | null = localStorage.getItem(
    `${NAMESPACE}players`
  );

  if (localPlayersData) {
    const playersObject = JSON.parse(localPlayersData);

    return getNewPlayersState((player: IPlayerColor) => ({
      name: playersObject[player].name ?? DEFAULT_PLAYERS_STATE[player].name,
      color: DEFAULT_PLAYERS_STATE[player].color,
      position: {
        x:
          playersObject[player].position.x ??
          DEFAULT_PLAYERS_STATE[player].position.x,
        y:
          playersObject[player].position.y ??
          DEFAULT_PLAYERS_STATE[player].position.y,
      },
      section:
        playersObject[player].section ?? DEFAULT_PLAYERS_STATE[player].section,
    }));
  }

  return getDefaultPlayersState();
}
