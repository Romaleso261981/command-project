import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import type { UserInfo } from '@/features/Authentication/model/types';

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
): Promise<T | null> => {
  const docRef = doc(db, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as T;
  }

  return null;
};

export const updateFirestoreData = async <T>(
  path: string,
  id: string,
  data: Partial<T>
): Promise<void> => {
  const docRef = doc(db, path, id);
  await updateDoc(docRef, data);
};

export const findData = async (
  path: string,
  field: string,
  searchData: string
): Promise<{ displayName: string | null; photo: string | null }[]> => {
  const collectionRef = collection(db, path);
  const start = searchData;
  const end = searchData + 'uf8ff';
  const docsQuery = query(
    collectionRef,
    where(field, '>=', start),
    where(field, '<=', end),
    orderBy(field)
  );
  const querySnapshot = await getDocs(docsQuery);
  const user: UserInfo[] = [];
  querySnapshot.forEach((doc: DocumentData) => {
    user.push(doc.data());
  });

  return user.map((item) => {
    return { displayName: item.displayName, photo: item.photoURL };
  });
};
