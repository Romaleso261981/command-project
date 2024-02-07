import type RootState from '@/app/providers/StoreProvider/config/store';

export const getCaptcha = (state: RootState) => state.authenticationFormSlice.captchaFetch;

export const getCurrentUserFetch = (state: RootState) =>
  state.authenticationFormSlice.currentUserFetch;
export const getisTaken = (state: RootState) => state.authenticationFormSlice.isTaken;

export const getStepFormState = (state: RootState) => state.authenticationFormSlice.stepForm;

export const getPhoneNumber = (state: RootState) => state.curentUserSlice.phoneNumber;
export const getSmsCode = (state: RootState) => state.curentUserSlice.smsCode;
export const getDisplayName = (state: RootState) => state.curentUserSlice.displayName;
