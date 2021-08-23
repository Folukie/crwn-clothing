import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUU6pVtgRH31ijD1sAhfS8xJMTUs-I7fU",
  authDomain: "crwn-clothing-f546d.firebaseapp.com",
  projectId: "crwn-clothing-f546d",
  storageBucket: "crwn-clothing-f546d.appspot.com",
  messagingSenderId: "307906021482",
  appId: "1:307906021482:web:a4d022a758486f3eb46213",
  measurementId: "G-GMRCXTL0GD",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_acount'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;