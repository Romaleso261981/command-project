import { configureStore } from "@reduxjs/toolkit";

import curentUserSlice from "@/enteties/session/User/model/slice";
import authenticationFormSlice from "@/features/Authentication/model/slice";
import basket from "@/features/Basket/model/basketSlise";
import producsSlise from "@/pages/ShopPage/model/shopPageslise";

export const store = configureStore({
  reducer: {
    authenticationFormSlice,
    curentUserSlice,
    producsSlise,
    basket,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
