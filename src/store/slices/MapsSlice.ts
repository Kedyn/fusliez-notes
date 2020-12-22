import { IMap, IMapsState } from "utils/types/maps";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_MAPS_DATA } from "constants/maps";
import { ICoordinates } from "utils/types/shared";
import { IStoreState } from "utils/types/store";

const MapsSlice = createSlice({
  name: "Maps",
  initialState: DEFAULT_MAPS_DATA,
  reducers: {
    setCurrentMap: (state: IMapsState, action: PayloadAction<IMap>) => ({
      ...state,

      currentMap: action.payload,
    }),

    setCameraPosition: (
      state: IMapsState,
      action: PayloadAction<ICoordinates>
    ) => ({
      ...state,

      cameraPosition: action.payload,
    }),

    setScale: (state: IMapsState, action: PayloadAction<number>) => ({
      ...state,

      scale: action.payload,
    }),
  },
});

export const { setCurrentMap, setCameraPosition, setScale } = MapsSlice.actions;

export const getCurrentMap = (state: IStoreState): IMap =>
  state.Maps.currentMap;

export const getCameraPosition = (state: IStoreState): ICoordinates =>
  state.Maps.cameraPosition;

export const getScale = (state: IStoreState): number => state.Maps.scale;

export default MapsSlice;
