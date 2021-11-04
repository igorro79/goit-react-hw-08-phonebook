import { createStore } from 'redux';
import contactsReduser from '../redux/contactsReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactsReduser, composeWithDevTools());
export default store;
