//IMPORTS------------------------------
import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    getDocs,
} from 'firebase/firestore';

//---------------------------------------------

//FIREBASE SETUP-----------------------------------------
const firebaseConfig = {
apiKey: "AIzaSyDAuF33seRqOfdVzdWhPnuU0Dv6WQ9ZPRU",
  authDomain: "pizzapp-95555.firebaseapp.com",
  projectId: "pizzapp-95555",
  storageBucket: "pizzapp-95555.appspot.com",
  messagingSenderId: "721547044607",
  appId: "1:721547044607:web:80b67a6971bb3acf35ceca"
};

const app = initializeApp(firebaseConfig);
//-----------------------------------------------------------

//GOOGLE PROVIDER--------------------------------------
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
//------------------------------------------------
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

//Create user doc from auth-------------------
export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}) => {
        if(!userAuth) return;
        const userDocRef = doc(db, 'users', userAuth.uid);

        const userSnapshot = await getDoc(userDocRef);

        if(!userSnapshot.exists()) {
            const {displayName, email} = userAuth;
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
//---------------------------------------------

//CREATE USER WITH EMAIL AND PW ------------------
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
//-------------------------------------------------

//SIGN IN WITH EMAIL AND PW-------------------------
export const signInWithUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
//--------------------------------------------------

//SIGN OUT USER---------------------------------------
export const signOutUser = async () => await signOut(auth);
//----------------------------------------------------

//AuthState changed ---------------------------------
export const onAuthStateChangedListener = (callback) =>
onAuthStateChanged(auth, callback);
//---------------------------------------------------