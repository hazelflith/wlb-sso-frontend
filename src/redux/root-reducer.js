import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import directoryReducer from './directory/directory.reducer'
import authReducer from './auth/store/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const rootReducer = combineReducers({
  directory: directoryReducer,
  auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)
