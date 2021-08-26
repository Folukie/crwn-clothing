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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`useers/${userAuth.uid}`);
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_acount" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
