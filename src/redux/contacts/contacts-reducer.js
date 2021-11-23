import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contacts-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, action) => {
    console.log('from action', action.payload);
    return [...state, action.payload];
  },
  [actions.deleteContactSuccess]: (state, { payload }) => {
    return state.filter(item => item.id !== payload);
  },
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [actions.filterContact]: (_, action) => {
    return action.payload;
  },
});

// const error = createReducer('', {});

export default combineReducers({
  items,
  filter,
  loading,
  //   error,
});

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
