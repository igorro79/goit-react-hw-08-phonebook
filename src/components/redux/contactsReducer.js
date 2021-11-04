import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import * as actions from './contacts-actions';

const itemsReducer = createReducer([{ id: 11, name: 'test name', number: 123456789 }], {
  [actions.addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.removeContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (state, action) => {
    return action.payload;
  },
});
//============= vanila redux ==============
// const itemsReducer = (state = [{ id: 11, name: 'test', number: 123456789 }], action) => {
//   switch (action.type) {
//     case types.ADD:
//       return [...state, action.payload];

//     case types.DELETE:
//       return state.filter(item => item.id !== action.payload);

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case types.FILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };
//============= end of vanila redux ==============

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
