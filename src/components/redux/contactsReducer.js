import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch (action.type) {
    case 'action/addContact':
      return [...state, action.payload];

    case 'action/removeContact':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case 'action/filterContact':
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
