import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,

  [actions.addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.deleteContactSuccess]: (state, { payload }) => {
    return state.filter(item => item.id !== payload);
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
