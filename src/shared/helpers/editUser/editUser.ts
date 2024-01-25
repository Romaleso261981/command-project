import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/integations/firebase';

import type { UpdatedUser } from './types';

export const editPlant = async (userId: string, newData: UpdatedUser) => {
  await updateDoc(doc(db, 'plants', userId), newData);
};
