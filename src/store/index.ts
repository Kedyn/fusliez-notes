import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import DeviceSlice from "./slices/DeviceSlice";
import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    settings: SettingsSlice.reducer,
    device: DeviceSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
