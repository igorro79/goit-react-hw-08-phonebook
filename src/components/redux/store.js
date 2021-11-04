// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/contactsReducer';

// import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({ reducer: rootReducer });
export default store;
