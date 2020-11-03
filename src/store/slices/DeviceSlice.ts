import { IDevice, IUIStoreState } from "utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BREAKPOINT } from "constants/main";

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

export const getIsMobile = (state: IUIStoreState): boolean =>
  state.Device.isMobile;

export const getOrientation = (
  state: IUIStoreState
): "portrait" | "landscape" => state.Device.orientation;

export default DeviceSlice;
