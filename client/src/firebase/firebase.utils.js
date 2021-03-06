// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { 
    getFirestore, 
    setDoc, 
    getDoc, 
    doc
} from "firebase/firestore"

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
export const firestore = getFirestore();

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth();

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}


export const createUserProfileDocument = async (userAuth, ...additionData) => {
    if(!userAuth) return;
    
    const userRef = doc(firestore, "users", userAuth.uid);
    let snapShot = await getDoc(userRef);

    if(!snapShot.exists()){
        const { displayName, email} = userAuth;
        const createAt = new Date();

        try{
            const userData = {
                displayName,
                email,
                createAt
             }

            Object.assign(userData, ...additionData);

            await setDoc(userRef, userData);
            console.log("utente creato!");
            
            snapShot = await getDoc(userRef);

        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return { ...snapShot.data(), id: snapShot.id};
}

export const signInWithGoogle = async () => {
    return signInWithPopup(auth, googleProvider)
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

export const convertCollectionsSnapshotToMap = (collections) => {
    const covertedCollections = collections.docs.map(
        doc => {
            const { title, items} = doc.data()
            
            return {
                routeName: encodeURI(title),
                id: doc.id,
                title,
                items
            }
        }
        )
        
        return covertedCollections.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {})
    }
    

    
    /*
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestore, collectionKey)
    
    const batch = writeBatch(firestore)

    objectsToAdd.forEach(element => {
        const newDocRef = doc(collectionRef)
        batch.set(newDocRef, element)
    });

    return await batch.commit()
}
*/

export default firebase;