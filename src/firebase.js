import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { store } from "./Redux/Store";
import { getUser } from "./Redux/Action";

const firebaseConfig = {
  apiKey: "AIzaSyCztJIgLqkr8OLvVx6gTpmz2rpJlNJMhO0",
  authDomain: "crypto-currency-60a58.firebaseapp.com",
  projectId: "crypto-currency-60a58",
  storageBucket: "crypto-currency-60a58.appspot.com",
  messagingSenderId: "275865601820",
  appId: "1:275865601820:web:af8880883a07d0695c5cd9",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result.user.displayName,
        email: result.user.email,
        id: result.user.uid,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
      })
    );
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    console.log(error);
    store.dispatch(getUser(null));
  }
};

export { auth };
