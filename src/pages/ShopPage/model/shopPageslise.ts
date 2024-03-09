import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/app/providers/StoreProvider/config/store";
import { getFirestoreData, setFirestoreData } from "@/shared/api";
import { deleteFirestoreData, getAllFirestoreData } from "@/shared/api/firebaseApi/firebaseActions";
import errorHandler from "@/shared/helpers/errorsHandler";
import { DataBasePath } from "@/shared/types/enums";

import type { Product } from "../type";
import type { ProductsTypes } from "./type";

export const addProduct = createAsyncThunk<
  void,
  Product,
  { rejectValue: string; state: RootState }
>("products/addProduct", async (data: Product, { rejectWithValue }) => {
  try {
    await setFirestoreData(DataBasePath.Products, data.id, data);
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const getProductById = createAsyncThunk<
  Product,
  { path: string; id: string },
  { rejectValue: string; state: RootState }
>("products/getProduct", async ({ path, id }, { rejectWithValue }) => {
  try {
    const res = await getFirestoreData(path, id);
    return res as Product;
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const getAllProducts = createAsyncThunk<
  Product[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>("products/getProducts", async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    const res = await getAllFirestoreData(path, queryLimit);
    return res as Product[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const showMoreProducts = createAsyncThunk<
  Product[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>("products/showMoreProducts", async ({ path, queryLimit, lastRefKey }, { rejectWithValue }) => {
  try {
    console.log("lastRefKey", lastRefKey);
    const res = await getAllFirestoreData(path, queryLimit);
    return res as Product[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const removeProductById = createAsyncThunk<
  void,
  { id: string },
  { rejectValue: string; state: RootState }
>("products/removeProductById", async ({ id }, { rejectWithValue }) => {
  try {
    await deleteFirestoreData(DataBasePath.Products, id);
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const addToBasket = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string; state: RootState }
>("basket/addToBasket", async (data, { rejectWithValue }) => {
  try {
    return data;
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

export const removeFromBasket = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string; state: RootState }
>("basket/removeFromBasket", async (product, { rejectWithValue }) => {
  try {
    return product;
  } catch (error) {
    return rejectWithValue(errorHandler(error, "signIn Error"));
  }
});

const initialState = {
  products: [],
  product: null,
  basket: [],
  lastRefKey: 0,
  total: 0,
  status: false,
  isLoading: false,
  isFetching: false,
} as ProductsTypes;

const productsSlise = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state) => {
      state.status = true;
    });
    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.status = false;
      state.product = payload;
    });
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = false;
      if (action.meta.arg.lastRefKey) state.lastRefKey = action.meta.arg.lastRefKey;
      state.products = action.payload;
    });
    builder.addCase(showMoreProducts.pending, (state) => {
      state.status = true;
    });
    builder.addCase(showMoreProducts.fulfilled, (state, { payload }) => {
      state.status = false;
      console.log("state.products", state.products);
      console.log("payload", payload);
      state.products = [...state.products, ...payload];
      if (payload.length) state.lastRefKey = [...state.products, ...payload].length - 1;
      state.isFetching = false;
    });
    builder.addCase(removeProductById.pending, (state) => {
      state.status = true;
    });
    builder.addCase(removeProductById.fulfilled, (state) => {
      state.status = false;
    });
    builder.addCase(addToBasket.fulfilled, (state, { payload }) => {
      state.status = false;
      state.basket.push(payload);
    });
    builder.addCase(removeFromBasket.fulfilled, (state, { payload }) => {
      state.status = false;
      state.basket = state.basket.filter((item) => {
        item.id === payload.id;
      });
    });
  },
});

export default productsSlise.reducer;
