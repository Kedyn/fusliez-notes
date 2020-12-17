import { IMaps, IMapsCharacter, IUIStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_MAPS_DATA } from "constants/maps";

const MapsSlice = createSlice({
  name: "Maps",
  initialState: DEFAULT_MAPS_DATA,
  reducers: {
    setCurrentMap: (state: IMaps, action: PayloadAction<string>) => ({
      ...state,

      currentMap: action.payload,
    }),

    setCharactersPositions: (
      state: IMaps,
      action: PayloadAction<Array<IMapsCharacter>>
    ) => ({
      ...state,

      characters: action.payload,
    }),

    setCharacterPosition: (
      state: IMaps,
      action: PayloadAction<IMapsCharacter>
    ) => ({
      ...state,

      characters: [
        ...state.characters.map((character) => {
          if (character.id === action.payload.id) {
            return { ...action.payload };
          }

          return character;
        }),
      ],
    }),

    resetCharacters: (state: IMaps) => ({
      ...state,

      characters: [
        ...DEFAULT_MAPS_DATA.characters.map((character) => ({ ...character })),
      ],
    }),

    reset: () => ({
      currentMap: DEFAULT_MAPS_DATA.currentMap,
      characters: [
        ...DEFAULT_MAPS_DATA.characters.map((character) => ({ ...character })),
      ],
    }),
  },
});

export const {
  setCurrentMap,
  setCharactersPositions,
  setCharacterPosition,
  resetCharacters,
  reset,
} = MapsSlice.actions;

export const getCurrentMap = (state: IUIStoreState): string =>
  state.Maps.currentMap;

export const getCharacters = (state: IUIStoreState): Array<IMapsCharacter> =>
  state.Maps.characters;

export default MapsSlice;
