import { Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import SettingsSlice from "./slices/SettingsSlice";

const store: Store = configureStore({
  reducer: {
    settings: SettingsSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
