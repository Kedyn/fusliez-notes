import { DEFAULT_PLAYERS, DEFAULT_PLAYERS_LISTS } from "utils/constants";
import {
  IPlayer,
  IPlayersList,
  IPlayersListsSlice,
  IUIStoreState,
} from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function getInitialState(): IPlayersListsSlice {
  return {
    playersContainer: 4,
    lists: DEFAULT_PLAYERS_LISTS,
  };
}

function getPlayersListsFromOriginalPositions(
  playersContainer: number,
  lists: Array<IPlayersList>
): Array<IPlayersList> {
  const newLists: Array<IPlayersList> = [];
  let players: Array<IPlayer> = [];

  for (const list of lists) {
    newLists.push({
      ...list,

      players: [],
    });

    players = players.concat(list.players);
  }

  newLists[playersContainer].players = players;

  return newLists;
}

const PlayersListsSlice = createSlice({
  name: "PlayersLists",
  initialState: getInitialState(),
  reducers: {
    setPlayersContainer: (
      state: IPlayersListsSlice,
      action: PayloadAction<number>
    ) => ({
      ...state,

      playersContainer: action.payload,
    }),

    setPlayersLists: (
      state: IPlayersListsSlice,
      action: PayloadAction<Array<IPlayersList>>
    ) => ({
      ...state,

      lists: [
        ...action.payload.map((list, index) => ({
          ...list,

          id: index,
        })),
      ],
    }),

    setPlayersListsTitle: (
      state: IPlayersListsSlice,
      action: PayloadAction<{
        index: number;
        title: "string";
      }>
    ) => ({
      ...state,

      lists: [
        ...state.lists.map((list, index) => {
          if (index === action.payload.index) {
            return {
              ...list,

              title: action.payload.title,
            };
          }

          return list;
        }),
      ],
    }),

    setPlayersFromList: (
      state: IPlayersListsSlice,
      action: PayloadAction<{
        listId: number;
        players: Array<IPlayer>;
      }>
    ) => {
      return {
        ...state,

        lists: [
          ...state.lists.map((list) => {
            if (list.id === action.payload.listId) {
              return {
                ...list,

                players: action.payload.players,
              };
            }

            return list;
          }),
        ],
      };
    },

    resetPlayersListsPositions: (state: IPlayersListsSlice) => ({
      ...state,

      lists: getPlayersListsFromOriginalPositions(
        state.playersContainer,
        state.lists
      ),
    }),

    resetPlayersLists: (state: IPlayersListsSlice) => ({
      ...state,

      lists: [
        ...state.lists.map((list) => {
          if (list.id === state.playersContainer) {
            return {
              ...list,

              players: [...DEFAULT_PLAYERS],
            };
          }

          return {
            ...list,

            players: [],
          };
        }),
      ],
    }),
  },
});

export const {
  setPlayersContainer,

  setPlayersLists,

  setPlayersFromList,

  setPlayersListsTitle,

  resetPlayersListsPositions,

  resetPlayersLists,
} = PlayersListsSlice.actions;

export const getPlayersContainer = (state: IUIStoreState): number =>
  state.PlayersLists.playersContainer;

export const getPlayersLists = (state: IUIStoreState): Array<IPlayersList> =>
  state.PlayersLists.lists;

export default PlayersListsSlice;
