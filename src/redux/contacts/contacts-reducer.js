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
  [actions.editContactSuccess]: (state, { payload }) => {
    return state.map(item => (item.id !== payload.id ? item : payload));
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

const openModal = createReducer(false, {
  [actions.toggleModal]: state => {
    return (state = !state);
  },
});
const contactToEdit = createReducer(null, {
  [actions.editContact]: (state, { payload }) => {
    return (state = payload);
  },
});

export default combineReducers({
  items,
  filter,
  loading,
  openModal,
  contactToEdit,
});
