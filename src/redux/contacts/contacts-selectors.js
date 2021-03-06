import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const contactToEdit = state => state.contacts.contactToEdit;
const getToggleModal = state => state.contacts.openModal;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getContacts,
  getVisibleContacts,
  getToggleModal,
  contactToEdit,
};
