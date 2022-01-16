import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export function* rootSaga()
{
    yield all([
        call(shopSagas),
        call(userSagas),
    ])
}