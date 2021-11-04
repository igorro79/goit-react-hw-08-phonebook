export const addContact = (name, number, id) => ({
  type: 'action/addContact',
  payload: { name, number, id },
});

export const removeContact = id => ({
  type: 'action/removeContact',
  payload: id,
});

export const filterContact = value => ({
  type: 'action/filterContact',
  payload: value,
});
