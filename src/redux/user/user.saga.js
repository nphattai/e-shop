import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure,
    signUpSuccess, signUpFailure
} from './user.action';
import {
    GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION, SIGN_OUT_START, SIGN_UP_START,
} from './user.type';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);

        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);

        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* isAuthencated() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();

        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error.message));
    }
}

export function* signUp({ payload: { displayName, email, password, confirmPassword } }) {
    try {
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );

        console.log(user);

        yield put(signUpSuccess());

        yield getSnapshotFromUserAuth(user, { displayName });

    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isAuthencated);
}

export function* onSignOut() {
    yield takeLatest(SIGN_OUT_START, signOut);
}

export function* onSignUp() {
    yield takeLatest(SIGN_UP_START, signUp)
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp)
    ]);
}