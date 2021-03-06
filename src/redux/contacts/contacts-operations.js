import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(err => dispatch(actions.fetchContactsError(err)));
};

export const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post(`/contacts`, contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(err => dispatch(actions.addContactError(err)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(err => dispatch(actions.deleteContactError(err)));
};

export const editContact = (id, updatedInfo) => dispatch => {
  dispatch(actions.editContactRequest());

  axios
    .patch(`/contacts/${id}`, updatedInfo)
    .then(({ data }) => dispatch(actions.editContactSuccess(data)))
    .catch(err => dispatch(actions.editContactError(err)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
};
