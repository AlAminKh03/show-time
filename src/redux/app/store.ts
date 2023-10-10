import { configureStore } from "@reduxjs/toolkit";
import toggoleReducer from "./features/toggoleStatus";

export const store = configureStore({
  reducer: {
    toggole: toggoleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
