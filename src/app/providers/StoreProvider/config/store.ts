import { configureStore } from '@reduxjs/toolkit';

import curentUserSlice from '@/enteties/session/User/model/slice';
import authenticationFormSlice from '@/features/Authentication/model/slice';
import producsSlise from '@/pages/ShopPage/model/slise';

export const store = configureStore({
  reducer: {
    authenticationFormSlice,
    curentUserSlice,
    producsSlise
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
