## Project Gif

![Project 005 Snapshot](movie-app.gif)
[See live site here](https://mskose-movie-app-react.netlify.app/) 

## Description

With this project, I aimed to create a website to improve my skills with Firebase authentication, APIs, useContext hook, and React Router.


## Project Skeleton

```
movie-app-react
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```



## Firebase notes

- Step 1 : Create React App using `npx create-react-app movie-app`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.

![Project 005 Snapshot](firebase-create-app.gif)

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` for the official docs and create `Authentication` operations.
  - Add the Firebase Authentication JS codes in your `firebase.js` file and initialize Firebase Authentication:

```jsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

- Firebase method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Firebase method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Firebase method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Firebase method to `Authenticate Using Google with Popup` :

```jsx
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
```

- Firebase method to `Sign Out` :

```jsx
import { getAuth, signOut } from 'firebase/auth';

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

## Notes

- Got API key from: `https://www.themoviedb.org/documentation/api`
- Got data from: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
- Link to movie queries: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
- Link to movie details: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`