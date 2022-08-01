import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBro8Skqyuhh6xdx5HcsjxSse0kchMpT8M",
  authDomain: "movie-app-react-34f5c.firebaseapp.com",
  projectId: "movie-app-react-34f5c",
  storageBucket: "movie-app-react-34f5c.appspot.com",
  messagingSenderId: "883654936802",
  appId: "1:883654936802:web:9c36b79984bfc5663e76bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    console.log(email, password);
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};
