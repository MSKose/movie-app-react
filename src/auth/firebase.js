import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//! see https://firebase.google.com/docs/auth/web/start for reference
export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    //! see https://firebase.google.com/docs/auth/web/manage-users for reference
    //! also, notice how we just used await and not then catch as it is on the docs
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(userCredential);
    // sessionStorage.setItem("user", JSON.stringify(userCredential.user));
  } catch (error) {
    console.log(error);
  }
};

//! see https://firebase.google.com/docs/auth/web/start for reference
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    // sessionStorage.setItem("user", JSON.stringify(userCredential.user));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//! see https://firebase.google.com/docs/auth/web/start for reference
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

//! see https://firebase.google.com/docs/auth/web/password-auth for reference
export const logOut = () => {
  signOut(auth);
};

//! Google pop-up sign in method
//! Do not forget to add your domain address to firebase authorized domain, or else this method wont work
//! see https://firebase.google.com/docs/auth/web/google-signin for reference
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
