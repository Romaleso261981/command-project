import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import type { RootState } from '@/app/providers/StoreProvider/config/store';
import type { ConfirmationResult, UserInfo } from '@/features/Authentication/model/types';
import { auth, db } from '@/shared/config/firebase/firebase';
import errorHandler from '@/shared/helpers/errorsHandler';
import { getFirestoreData, setFirestoreData } from '@/shared/api/firebaseApi/firebaseActions';

type formTypes = {
  stepForm: string;
  smsCode: string;
  currentUserFetch: UserInfo[] | void;
  status: string;
  isTaken: boolean | void;
  captchaFetch: ConfirmationResult | null;
};

enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

const setupRecaptcha = (phoneNumber: string) => {
  const recapthca = new RecaptchaVerifier(auth, 'sign-in-button', {
    size: 'invisible'
  });
  return signInWithPhoneNumber(auth, phoneNumber, recapthca);
};

let recaptchaObj: ConfirmationResult;

export const signIn = createAsyncThunk<void, string, { rejectValue: string; state: RootState }>(
  'auth/signPhoneNumber',
  async (phoneNumber: string, { rejectWithValue, dispatch }) => {
    try {
      recaptchaObj = await setupRecaptcha(phoneNumber);
      dispatch(setCurrentStepForm('sms'));
    } catch (error) {
      return rejectWithValue(errorHandler(error, 'signIn Error'));
    }
  }
);

export const handlerVerifyCode = createAsyncThunk<
  DocumentData | void,
  string,
  { rejectValue: string; state: RootState }
>('firestore/handlerVerifyCode', async (smsCode: string, { rejectWithValue, dispatch }) => {
  try {
    await recaptchaObj.confirm(smsCode);
    const currentUserUid = auth.currentUser?.uid;
    if (!currentUserUid) {
      return;
    }
    let fetchCurrentUser = await getFirestoreData('users', currentUserUid!);
    // const collectionRef = collection(db, 'users');
    // const docsQuery = query(collectionRef, where('uid', '==', currentUserUid));
    // const querySnapshot = await getDocs(docsQuery);

    if (fetchCurrentUser === undefined) {
      dispatch(setCurrentStepForm('nick'));
      return;
    }

    if (fetchCurrentUser?.displayName) {
      dispatch(setCurrentStepForm('auth'));
    }

    return fetchCurrentUser;
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
  }
});

export const handlerNicknameInput = createAsyncThunk<
  void,
  string,
  { rejectValue: string; state: RootState }
>('firestore/handlerNicknameInput', async (currentDisplayName, { rejectWithValue, dispatch }) => {
  try {
    const currentUser = auth.currentUser;
    const currentUserUid = auth.currentUser?.uid;
    if (!currentUserUid) {
      return;
    }
    const collectionRef = collection(db, 'users');
    const docsQuery = query(collectionRef, where('displayName', '==', currentDisplayName));
    const querySnapshot = await getDocs(docsQuery);
    if (querySnapshot.empty) {
      const currentUserInfo = {
        displayName: currentDisplayName,
        email: currentUser?.email,
        phoneNumber: currentUser?.phoneNumber,
        photoURL: currentUser?.photoURL,
        providerId: currentUser?.providerId
      };
      await setFirestoreData('users', currentUserUid, currentUserInfo);
      dispatch(setCurrentStepForm('auth'));
      return;
    } else {
      errorHandler('Nickname already been taken', 'handlerNicknameInput Error');
    }
  } catch (error) {
    return rejectWithValue(errorHandler(error, 'handlerVerifyCode Error'));
  }
});

const initialState = {
  stepForm: 'login',
  smsCode: '',
  currentUserFetch: [],
  status: 'loading',
  isTaken: false,
  captchaFetch: null
} as formTypes;

const formType = createSlice({
  name: 'formType',
  initialState,
  reducers: {
    setCurrentStepForm(state, action: PayloadAction<string>) {
      state.stepForm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handlerVerifyCode.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerVerifyCode.fulfilled, (state, action) => {
      state.status = 'auth';
      state.currentUserFetch = action.payload;
    });

    builder.addCase(handlerVerifyCode.rejected, (state) => {
      state.status = 'error';
    });

    builder.addCase(handlerNicknameInput.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(handlerNicknameInput.fulfilled, (state, action) => {
      state.status = 'auth';
      state.isTaken = action.payload;
    });

    builder.addCase(handlerNicknameInput.rejected, (state) => {
      state.status = 'error';
    });
    builder.addCase(signIn.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signIn.fulfilled, (state) => {
      state.status = Status.SUCCES;
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

export const { setCurrentStepForm } = formType.actions;

export default formType.reducer;
