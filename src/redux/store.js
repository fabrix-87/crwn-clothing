import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'
import rootReducer from "./root-reducer";
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const crwnStore = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(crwnStore)

const store = {crwnStore, persistor}

export default store;