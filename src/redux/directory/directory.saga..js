import { call, takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_DIRECTORY_START } from './directory.type';
import { fetchDirectoryFailure, fetchDirectorySuccess } from './directory.action';
import { convertCollectionsSnapshotToDirectoryMap, firestore } from '../../firebase/firebase.utils';

export function* fetchDirectory() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const directoryMap = yield call(
            convertCollectionsSnapshotToDirectoryMap,
            snapshot
        );
        yield put(fetchDirectorySuccess(directoryMap));
    } catch (error) {
        yield put(fetchDirectoryFailure(error.message));

    }
}

export function* onFetchDirectoryStart() {
    yield takeLatest(FETCH_DIRECTORY_START, fetchDirectory);
}

export function* directorySaga() {
    yield all([call(onFetchDirectoryStart)]);
}