import { IDeviceState, IStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BREAKPOINT } from "constants/main";

const DeviceSlice = createSlice({
  name: "Device",
  initialState: {
    isMobile: window.innerWidth <= BREAKPOINT,
    orientation:
      window.innerHeight > window.innerWidth ? "portrait" : "landscape",
  } as IDeviceState,
  reducers: {
    setIsMobile: (state: IDeviceState, action: PayloadAction<boolean>) => ({
      ...state,
      isMobile: action.payload,
    }),

    setOrientation: (
      state: IDeviceState,
      action: PayloadAction<"portrait" | "landscape">
    ) => ({
      ...state,
      orientation: action.payload,
    }),

    resetDevice: () =>
      ({
        isMobile: window.innerWidth <= BREAKPOINT,
        orientation:
          window.innerHeight > window.innerWidth ? "portrait" : "landscape",
      } as IDeviceState),
  },
});

export const { setIsMobile, setOrientation, resetDevice } = DeviceSlice.actions;

export const getIsMobile = (state: IStoreState): boolean =>
  state.DeviceState.isMobile;

export const getOrientation = (state: IStoreState): "portrait" | "landscape" =>
  state.DeviceState.orientation;

export default DeviceSlice;
