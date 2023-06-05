import { configureStore } from "@reduxjs/toolkit";
import { tweetsApi } from "./api/tweetsApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import followsSlice from "./follows/followsSlice";
import filtersSlice from "./filters/filtersSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, followsSlice.reducer)

const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
    follows: persistedReducer,
    filter: filtersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(tweetsApi.middleware),
})

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;