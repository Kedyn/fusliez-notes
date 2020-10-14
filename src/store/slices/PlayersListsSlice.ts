import { IPlayer, IPlayers, IUISliceState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_PLAYERS } from "utils/constants";

type IPlayerList =
  | "innocentPlayers"
  | "susPlayers"
  | "evilPlayers"
  | "deadPlayers"
  | "unknownPlayers";

function getListsWithNewPlayers(
  listName: IPlayerList,
  currentLists: IPlayers,
  newPlayers: Array<IPlayer>
) {
  const newLists: IPlayers = { ...currentLists };

  newLists[listName] = newPlayers;

  return newLists;
}

const PlayersListsSlice = createSlice({
  name: "PlayersLists",
  initialState: DEFAULT_PLAYERS,
  reducers: {
    setPlayersFromList: (
      state: IPlayers,
      action: PayloadAction<{
        listName: IPlayerList;
        players: Array<IPlayer>;
      }>
    ) =>
      getListsWithNewPlayers(
        action.payload.listName,
        state,
        action.payload.players
      ),

    resetPlayersLists: () => ({
      ...DEFAULT_PLAYERS,
      unknownPlayers: [
        ...DEFAULT_PLAYERS.unknownPlayers.map((player) => ({ ...player })),
      ],
    }),
  },
});

export const {
  setPlayersFromList,

  resetPlayersLists,
} = PlayersListsSlice.actions;

export const getPlayersFromList = (listName: IPlayerList) => (
  state: IUISliceState
): Array<IPlayer> => state.PlayersLists[listName];

export default PlayersListsSlice;
