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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
