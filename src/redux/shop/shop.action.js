import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './shop.type';
import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
    return ({
        type: FETCH_COLLECTIONS_START
    })
}

export const fetchCollectionsSuccess = (collectionMap) => {
    return ({
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    })
}

export const fetchCollectionsFailure = (messages) => {
    return ({
        type: FETCH_COLLECTIONS_FAILURE,
        payload: messages
    })
}

export const fetchCollectionsStartAsync = () => async dispatch => {
    try {
        console.log('function async fetching is called')
        const collectionRef = firestore.collection("collections");

        dispatch(fetchCollectionsStart());

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = await convertCollectionsSnapshotToMap(snapshot);

            dispatch(fetchCollectionsSuccess(collectionMap));
        });
    } catch (error) {
        dispatch(fetchCollectionsFailure(error.messages));
    }
}
