import type { FileWithPath } from '@mantine/dropzone';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/StoreProvider/config/store';
import { getFirestoreData, setFirestoreData } from '@/shared/api';
import { deleteFirestoreData, getAllFirestoreData } from '@/shared/api/firebaseApi/firebaseActions';
import errorHandler from '@/shared/helpers/errorsHandler';
import { DataBasePath } from '@/shared/types/enums';

import type { ProductsTypes } from './type';

export type Product = {
  id: string;
  title: string;
  brand: string;
  images: FileWithPath[];
  imageURL: string;
  description: string;
  maxQuantity: number;
  quantity: number;
  price: number;
  isRecommended: boolean;
  dateAdded: number;
};

export const addProduct = createAsyncThunk<
  void,
  Product,
  { rejectValue: string; state: RootState }
>('products/addProduct', async (data: Product, { rejectWithValue }) => {
  try {
    await setFirestoreData(DataBasePath.Products, data.id, data);
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const getProductById = createAsyncThunk<
  Product,
  { path: string; id: string },
  { rejectValue: string; state: RootState }
>('products/getProduct', async ({ path, id }, { rejectWithValue }) => {
  try {
    const res = await getFirestoreData(path, id);
    return res as Product;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const getAllProducts = createAsyncThunk<
  Product[],
  { path: string; queryLimit: number; lastRefKey?: number },
  { rejectValue: string; state: RootState }
>('products/getProducts', async ({ path, queryLimit }, { rejectWithValue }) => {
  try {
    console.log('path', path);
    console.log('queryLimit', queryLimit);
    const res = await getAllFirestoreData(path, queryLimit);
    return res as Product[];
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const removeProductById = createAsyncThunk<
  void,
  { id: string },
  { rejectValue: string; state: RootState }
>('products/removeProductById', async ({ id }, { rejectWithValue }) => {
  try {
    await deleteFirestoreData(DataBasePath.Products, id);
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const addToBasket = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string; state: RootState }
>('basket/addToBasket', async (data, { rejectWithValue }) => {
  try {
    return data;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

export const removeFromBasket = createAsyncThunk<
  Product,
  Product,
  { rejectValue: string; state: RootState }
>('basket/removeFromBasket', async (product, { rejectWithValue }) => {
  try {
    console.log('removeFromBasket product.id ---', product.id);
    return product;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'signIn Error'));
  }
});

const initialState = {
  products: [],
  product: null,
  basket: [],
  status: false,
  isLoading: false,
  isFetching: false,
} as ProductsTypes;

const productsSlise = createSlice({
  name: 'products',
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
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      console.log('payload', payload);
      state.status = false;
      state.products = payload;
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
