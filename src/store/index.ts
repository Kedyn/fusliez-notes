import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import DeviceSlice from "./slices/DeviceSlice";
import PlayerEditLockSlice from "./slices/PlayerEditLockSlice";
import PlayersSectionsSlice from "./slices/PlayersSectionsSlice";
import ScoresSlice from "./slices/ScoresSlice";
import { SettingsMiddleWare } from "./middleware/SettingsMiddleware";
import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    Settings: SettingsSlice.reducer,
    Device: DeviceSlice.reducer,
    Scores: ScoresSlice.reducer,
    PlayerEditLock: PlayerEditLockSlice.reducer,
    PlayersSections: PlayersSectionsSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), SettingsMiddleWare],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
