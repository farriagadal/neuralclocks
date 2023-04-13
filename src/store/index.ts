import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import routines from './slices/routines'

const rootReducer = combineReducers({
  routines
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['routines'] // Solo persistir el estado de este reducer
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

const persistor = persistStore(store)

export { store, persistor }
