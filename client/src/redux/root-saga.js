import { all, call } from 'redux-saga/effects';

import { shopSaga } from './shop/shop.saga';
import { userSaga } from './user/user.saga';
import { cartSaga } from './cart/cart.saga';
import { directorySaga } from './directory/directory.saga.';

export default function* rootSaga() {
    yield all([call(shopSaga), call(userSaga), call(cartSaga), call(directorySaga)]);
}