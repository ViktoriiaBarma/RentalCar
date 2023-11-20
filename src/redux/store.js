import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carSlice';
import { favoritesReducer } from './favorite/favoriteSlice';
import { filterReducer } from './cars/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
