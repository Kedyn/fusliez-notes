import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import DeviceSlice from "./slices/DeviceSlice";
import MapsSlice from "./slices/MapsSlice";
import PlayerEditLockSlice from "./slices/PlayerEditLockSlice";
import { PlayersSectionsMiddleware } from "./middleware/PlayersSectionsMiddleware";
import PlayersSectionsSlice from "./slices/PlayersSectionsSlice";
import { ScoresMiddleware } from "./middleware/ScoresMiddleware";
import ScoresSlice from "./slices/ScoresSlice";
import { SettingsMiddleware } from "./middleware/SettingsMiddleware";
import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    Settings: SettingsSlice.reducer,
    Device: DeviceSlice.reducer,
    Scores: ScoresSlice.reducer,
    PlayerEditLock: PlayerEditLockSlice.reducer,
    PlayersSections: PlayersSectionsSlice.reducer,
    Maps: MapsSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    SettingsMiddleware,
    PlayersSectionsMiddleware,
    ScoresMiddleware,
  ],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
