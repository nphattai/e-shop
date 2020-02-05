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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

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

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.id);

        batch.set(newDocRef, obj);
    })

    console.log('addCollection is called')

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = async collections => {
    const transformedCollection = await collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            items,
            title,
        }
    })
    return transformedCollection;
}

export const convertCollectionsSnapshotToDirectoryMap = async collections => {
    const transformedDirectory = await collections.docs.map(doc => {
        const { title, imageUrl, linkUrl } = doc.data();

        return {
            id: doc.id,
            title,
            imageUrl,
            linkUrl
        }
    })
    return transformedDirectory;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

