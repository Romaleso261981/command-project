import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyC3oGZXQ3ddivNrOgZ-WhR8q3HsQPIMbOk',
//   authDomain: 'login-page-237eb.firebaseapp.com',
//   projectId: 'login-page-237eb',
//   storageBucket: 'login-page-237eb.appspot.com',
//   // databaseURL: 'computer-app-68be2.appspot.com',
//   messagingSenderId: '312014664137',
//   appId: '1:312014664137:web:33ff6bd07a6826cc39f818'
//   // measurementId: 'G-24098F19LR'
// };
export const firebaseConfig = {
  apiKey: 'AIzaSyA0AdoQoblJrm_a9Qbh628U-Yt2-6DEKHQ',
  authDomain: 'new-spa-b84ea.firebaseapp.com',
  databaseURL: 'https://new-spa-b84ea-default-rtdb.firebaseio.com',
  projectId: 'new-spa-b84ea',
  storageBucket: 'yourstoragebucket.appspot.com',
  messagingSenderId: '326537037114',
  appId: '1:326537037114:web:7b126f6bf625fe0b7dfc03'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const imageDb = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// const firebaseConfig = {
//   apiKey: 'AIzaSyC3oGZXQ3ddivNrOgZ-WhR8q3HsQPIMbOk',
//   authDomain: 'login-page-237eb.firebaseapp.com',
//   projectId: 'login-page-237eb',
//   storageBucket: 'login-page-237eb.appspot.com',
//   messagingSenderId: '312014664137',
//   appId: '1:312014664137:web:33ff6bd07a6826cc39f818'
// };
