import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shop.type'
import SHOP_DATA from './shop.data';

const initialState = {
    collections: null,
    isFetching: true,
    errorMessage: undefined
};

const shopReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload,
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload,
            }
        default:
            return state;
    }
}

export default shopReducer