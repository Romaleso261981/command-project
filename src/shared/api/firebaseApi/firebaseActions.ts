import type { QueryDocumentSnapshot } from 'firebase/firestore';
import { collection, getDocs, limit, query, startAfter } from 'firebase/firestore';

import type { DocumentData, DocumentReference } from './models';
import { db, deleteDoc, doc, getDoc, setDoc, updateDoc } from './models';

export const setFirestoreData = async <T extends DocumentData>(
  path: string,
  id: string,
  data: T,
): Promise<DocumentReference<T>> => {
  console.log(id);
  const docRef = doc(db, path, id) as DocumentReference<T>;

  await setDoc(docRef, data);

  return docRef;
};

export const deleteFirestoreData = async (path: string, id: string): Promise<void> => {
  const docRef = doc(db, path, id);

  await deleteDoc(docRef);
};

export const getAllFirestoreData = async <T extends DocumentData>(
  path: string,
  queryLimit: number,
  lastRefKey?: number,
): Promise<T[] | null> => {
  const collectionRef = collection(db, path);

  if (lastRefKey) {
    const q = query(collectionRef, startAfter(lastRefKey), limit(queryLimit));
    const querySnapshot = await getDocs(q);
    const products: T[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      products.push(doc.data() as T);
    });
    return products;
  } else {
    const q = query(collectionRef, limit(queryLimit));
    console.log('q', q);
    const querySnapshot = await getDocs(q);
    console.log('querySnapshot', querySnapshot);
    const products: T[] = [];

    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      console.log('doc', doc);
      products.push(doc.data() as T);
    });
    console.log('products', products);
    return products;
  }
};

export const getFirestoreData = async <T extends DocumentData>(
  path: string,
  id: string,
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
  data: Partial<T>,
): Promise<void> => {
  const docRef = doc(db, path, id);
  await updateDoc(docRef, data);
};
