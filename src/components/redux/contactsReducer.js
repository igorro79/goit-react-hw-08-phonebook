import { combineReducers } from 'redux';

const itemsReduser = (state = [{ id: 11, name: 'test', number: 123456789 }], action) => {
  switch (action.type) {
    case 'action/addContact':
      return [...state, action.payload];

    case 'action/removeContact':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
const filterReduser = (state = '', action) => {
  switch (action.type) {
    case 'action/filterContact':
      return action.payload;

    default:
      return state;
  }
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

export default rootReduser;
