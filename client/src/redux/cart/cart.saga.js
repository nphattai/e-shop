import { takeLatest, put, call, all } from 'redux-saga/effects';
import { clearCart } from './cart.action';
import { SIGN_OUT_SUCCESS } from '../user/user.type'

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)]);
}