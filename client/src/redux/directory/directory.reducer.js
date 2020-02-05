import { FETCH_DIRECTORY_START, FETCH_DIRECTORY_SUCCESS, FETCH_DIRECTORY_FAILURE } from "./directory.type";

const initialState = {
    sections: [],
    error: null,
}

const directoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_DIRECTORY_START:
            return {
                ...state
            }
        case FETCH_DIRECTORY_SUCCESS:
            return {
                ...state,
                sections: payload
            }
        case FETCH_DIRECTORY_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default directoryReducer