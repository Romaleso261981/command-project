import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/integations/firebase';

export const deletePlant = async (plantId: string) => {
  await deleteDoc(doc(db, 'plants', plantId));
};
