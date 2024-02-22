import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/providers/StoreProvider/config/store';
import { findData } from '@/shared/api/firebaseApi/firebaseActions';
import errorHandler from '@/shared/helpers/errorsHandler';

type findUsers = {
  displayName: string | null;
  photo: string | null;
};

type initialStateType = {
  findUsers: findUsers[];
  findUser: string;
  status: string;
};

export const handlerSearchUserInput = createAsyncThunk<
  findUsers[],
  string,
  { rejectValue: string; state: RootState }
>('firestore/handlerSearchUserInput', async (currentDisplayName, { rejectWithValue }) => {
  try {
    const user = await findData('users', 'displayName', currentDisplayName);

    return user;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
  }
});

const initialState = {
  findUsers: [],
  findUser: '',
  status: 'loading'
} as initialStateType;

const findUsers = createSlice({
  name: 'findUsers',
  initialState,
  reducers: {
    setClearSearchImputOnClose(state) {
      state.findUsers = [];
    },
    setClearSearchImputCloseButton(state) {
      state.findUsers = [];
      state.findUser = '';
    },
    setFindUser(state, action: PayloadAction<string>) {
      state.findUser = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handlerSearchUserInput.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerSearchUserInput.fulfilled, (state, action) => {
      state.findUsers = action.payload;
      state.status = 'auth';
    });

    builder.addCase(handlerSearchUserInput.rejected, (state) => {
      state.status = 'error';
    });
  }
});

export const { setClearSearchImputOnClose, setClearSearchImputCloseButton, setFindUser } =
  findUsers.actions;

export default findUsers.reducer;
