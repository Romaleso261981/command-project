import { doc, setDoc } from 'firebase/firestore';

import { db } from '@/integations/firebase';

import type { NewUser } from './types';

export const addDoc = async (data: NewUser) => {
  const plantRef = doc(db, 'plants', Date());
  await setDoc(plantRef, data);
};
