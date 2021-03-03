import { IDeviceState, IOrientation } from "utils/types/device";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BREAKPOINT } from "constants/main";
import { IStoreState } from "utils/types/store";

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
      action: PayloadAction<IOrientation>
    ) => ({
      ...state,
      orientation: action.payload,
    }),

    resetDeviceState: () =>
      ({
        isMobile: window.innerWidth <= BREAKPOINT,
        orientation:
          window.innerHeight > window.innerWidth ? "portrait" : "landscape",
      } as IDeviceState),
  },
});

export const {
  setIsMobile,
  setOrientation,
  resetDeviceState,
} = DeviceSlice.actions;

export const getIsMobile = (state: IStoreState): boolean =>
  state.Device.isMobile;

export const getOrientation = (state: IStoreState): IOrientation =>
  state.Device.orientation;

export default DeviceSlice;
