import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.removeContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (_, action) => {
    return action.payload;
  },
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
