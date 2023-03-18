import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { UserState } from "./slices/userSlice";

export interface RootState {
  user: UserState;
}

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
