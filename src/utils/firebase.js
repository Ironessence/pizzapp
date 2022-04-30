import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqib0gxsWH19-wJj4JhBcLN7cYJ2BLhrE",
  authDomain: "pizzaapptest-f4c91.firebaseapp.com",
  projectId: "pizzaapptest-f4c91",
  storageBucket: "pizzaapptest-f4c91.appspot.com",
  messagingSenderId: "850816459142",
  appId: "1:850816459142:web:cc130b5691d8a731f58c07"
  };
  
 const firebaseApp = initializeApp(firebaseConfig);

 const googleProvider = new GoogleAuthProvider();
 googleProvider.setCustomParameters({
     prompt: 'select_account'
 });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const db = getFirestore();

//upload categories frop shop data to firestore database
//-----------------------------

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');

}

//-----------------------------


export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
onAuthStateChanged(auth, callback);

