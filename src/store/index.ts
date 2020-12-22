import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import DeviceSlice from "./slices/DeviceSlice";
import MapsSlice from "./slices/MapsSlice";
import PlayerEditLockSlice from "./slices/PlayerEditLockSlice";
import { PlayersMiddleware } from "./middleware/PlayersMiddleware";
import PlayersSlice from "./slices/PlayersSlice";
import { ScoresMiddleware } from "./middleware/ScoresMiddleware";
import ScoresSlice from "./slices/ScoresSlice";
import { SectionsMiddleware } from "./middleware/SectionsMiddleware";
import SectionsSlice from "./slices/SectionsSlice";
import { SettingsMiddleware } from "./middleware/SettingsMiddleware";
import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    Settings: SettingsSlice.reducer,
    Device: DeviceSlice.reducer,
    Scores: ScoresSlice.reducer,
    Players: PlayersSlice.reducer,
    PlayerEditLock: PlayerEditLockSlice.reducer,
    Sections: SectionsSlice.reducer,
    Maps: MapsSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    SettingsMiddleware,
    ScoresMiddleware,
    PlayersMiddleware,
    SectionsMiddleware,
  ],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
