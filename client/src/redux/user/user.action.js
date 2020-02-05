import {
    GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
    CHECK_USER_SESSION,
    SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE,
    SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from './user.type';

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = emailAndPassword => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (message) => ({
    type: SIGN_IN_FAILURE,
    payload: message
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION,
})

export const signOutStart = () => ({
    type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS,
})

export const signOutFailure = (message) => ({
    type: SIGN_OUT_FAILURE,
    payload: message
})

export const signUpStart = formData => ({
    type: SIGN_UP_START,
    payload: formData
})

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS,
})

export const signUpFailure = (message) => ({
    type: SIGN_UP_FAILURE,
    payload: message
})