import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBjNQKLPIMFlmvdPVHwVhyOM4XTpMnC-M8',
  authDomain: 'crown-clothing-db-e59e8.firebaseapp.com',
  projectId: 'crown-clothing-db-e59e8',
  storageBucket: 'crown-clothing-db-e59e8.appspot.com',
  messagingSenderId: '185199583771',
  appId: '1:185199583771:web:2ceb4d7876e2afd83c4ebe',
  measurementId: 'G-N26L94S9ST',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
