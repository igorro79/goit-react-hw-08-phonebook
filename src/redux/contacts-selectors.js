import { createSelector } from 'reselect';
const getContacts = state => state.items;
const getFilter = state => state.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getContacts,
  getVisibleContacts,
};
