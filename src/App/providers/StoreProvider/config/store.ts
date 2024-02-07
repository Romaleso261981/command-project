import { configureStore } from '@reduxjs/toolkit';

import curentUserSlice from '@/enteties/session/User/model/slice';
import authenticationFormSlice from '@/features/Authentication/model/slice';

export const store = configureStore({
  reducer: {
    authenticationFormSlice: authenticationFormSlice,
    curentUserSlice: curentUserSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
