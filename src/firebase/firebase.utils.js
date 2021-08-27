// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAouCvhtYi1c-09iN_i4maBpMvsNi9gkHc",
  authDomain: "crwn-db-2a212.firebaseapp.com",
  projectId: "crwn-db-2a212",
  storageBucket: "crwn-db-2a212.appspot.com",
  messagingSenderId: "326158371539",
  appId: "1:326158371539:web:7abefb40421f074e3b6226"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            /*
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            */
            console.log('login effettuato')
        }).catch((error) => {
            /*
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            */
            console.log(error)
        });
    }

export default firebase;