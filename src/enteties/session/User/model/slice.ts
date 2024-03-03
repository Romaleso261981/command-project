import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { USER_RULE } from '@/constants/constans';

type CurrentUser = {
  phoneNumber: string;
  smsCode: string;
  displayName: string;
  rule: 'user' | 'admin';
};

export enum Rule {
  ADMIN = 'admin',
  USER = 'user'
}

const initialState = {
  phoneNumber: '',
  smsCode: '',
  displayName: '',
  rule: USER_RULE
} as CurrentUser;

const curentUserSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },

    setSmsCode(state, action: PayloadAction<string>) {
      state.smsCode = action.payload;
    },

    setDisplayName(state, action: PayloadAction<string>) {
      state.displayName = action.payload;
    }
  }
});

export const { setPhoneNumber, setSmsCode, setDisplayName } = curentUserSlice.actions;

export default curentUserSlice.reducer;
