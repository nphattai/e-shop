import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIWbjqY9nYQVbvatW8ZGF_mvvwONK1oiU",
    authDomain: "e-shop-db-ef58b.firebaseapp.com",
    databaseURL: "https://e-shop-db-ef58b.firebaseio.com",
    projectId: "e-shop-db-ef58b",
    storageBucket: "e-shop-db-ef58b.appspot.com",
    messagingSenderId: "411352410033",
    appId: "1:411352410033:web:e8e58dc7ac944bdc067f90",
    measurementId: "G-B3PHG37F0Y"
}

export const createUserProfileDocument = async (userAuth, additionlData) => {
    if (!userAuth) { return };

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionlData
            })
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

