import {
    GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
    SIGN_OUT_START, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS,
    SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from "./user.type";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case GOOGLE_SIGN_IN_START:
        case EMAIL_SIGN_IN_START:
        case SIGN_OUT_START:
        case SIGN_UP_START:
        case SIGN_UP_SUCCESS:
            return {
                ...state
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
};

export default userReducer;