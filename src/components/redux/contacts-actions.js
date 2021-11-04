import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';
export const addContact = createAction(types.ADD);
export const removeContact = createAction(types.DELETE);
export const filterContact = createAction(types.FILTER);

//============= vanila redux ==============

// export const addContact = (name, number, id) => ({
//   type: 'action/addContact',
//   payload: { name, number, id },
// });

// export const removeContact = id => ({
//   type: 'action/removeContact',
//   payload: id,
// });

// export const filterContact = value => ({
//   type: 'action/filterContact',
//   payload: value,
// });
//============= end of vanila redux ==============
