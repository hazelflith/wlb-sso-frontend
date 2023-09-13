import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
// import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

export const persistor = persistStore(store)

export default store
