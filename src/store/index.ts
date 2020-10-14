import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import DeviceSlice from "./slices/DeviceSlice";
import ScoresSlice from "./slices/ScoresSlice";
import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    settings: SettingsSlice.reducer,
    device: DeviceSlice.reducer,
    scores: ScoresSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
