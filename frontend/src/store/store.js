import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from '@redux-devtools/extension'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducer'
import rootSaga from './saga'

const persistedReducer = persistReducer(
  {
    key: 'dev.boxBreakers',
    storage,
  },
  rootReducer,
)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, logger]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export const persist = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
