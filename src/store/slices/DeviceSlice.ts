import { IDevice, IUISliceState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BREAKPOINT } from "utils/constants";

const DeviceSlice = createSlice({
  name: "Device",
  initialState: {
    isMobile: window.innerWidth <= BREAKPOINT,
    orientation:
      window.innerHeight > window.innerWidth ? "portrait" : "landscape",
  } as IDevice,
  reducers: {
    setIsMobile: (state: IDevice, action: PayloadAction<boolean>) => ({
      ...state,
      isMobile: action.payload,
    }),

    setOrientation: (
      state: IDevice,
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
      } as IDevice),
  },
});

export const { setIsMobile, setOrientation, resetDevice } = DeviceSlice.actions;

export const getIsMobile = (state: IUISliceState): boolean =>
  state.Device.isMobile;

export const getOrientation = (
  state: IUISliceState
): "portrait" | "landscape" => state.Device.orientation;

export default DeviceSlice;
