import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReduser from '../slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReduser,
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
