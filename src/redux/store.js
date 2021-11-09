// import { createStore } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {},
  }),
  logger,
];

const store = configureStore({
  reducer: contactsReducer,
  middleware,
});

export default store;
