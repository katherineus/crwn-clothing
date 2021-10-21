import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDtjMfzq91wA5-GNPZWMi9cHy6Say63CAY",
  authDomain: "crwn-db-1c9dd.firebaseapp.com",
  projectId: "crwn-db-1c9dd",
  storageBucket: "crwn-db-1c9dd.appspot.com",
  messagingSenderId: "701091806608",
  appId: "1:701091806608:web:4010e9c150b8f038a80715",
  measurementId: "G-1DT6CY2KL4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;