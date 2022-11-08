import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import propertiesReducer from "../features/properties/propertiesSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
