import type { DocumentData, DocumentReference } from './models';
import { db, deleteDoc, doc, getDoc, setDoc, updateDoc } from './models';

export const setFirestoreData = async <T extends DocumentData>(
  path: string,
  id: string,
  data: T
): Promise<DocumentReference<T>> => {
  const docRef = doc(db, path, id) as DocumentReference<T>;

  await setDoc(docRef, data);

  return docRef;
};

export const deleteFirestoreData = async (path: string, id: string): Promise<void> => {
  const docRef = doc(db, path, id);

  await deleteDoc(docRef);
};

export const getFirestoreData = async <T extends DocumentData>(
  path: string,
  id: string
): Promise<T | undefined> => {
  const docRef = doc(db, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as T;
  }

  return undefined;
};

export const updateFirestoreData = async <T>(
  path: string,
  id: string,
  data: Partial<T>
): Promise<void> => {
  const docRef = doc(db, path, id);
  await updateDoc(docRef, data);
};
