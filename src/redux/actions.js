import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('contacts/delete');
export const addContact = createAction('contacts/add');
export const filterContact = createAction('contacts/filter');

export const getContactRequest = createAction('contacts/getRequest');
export const getContactSuccess = createAction('contacts/getSuccess');
export const getContactError = createAction('contacts/getError');

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const removeContactRequest = createAction('contacts/removeRequest');
export const removeContactSuccess = createAction('contacts/removeSuccess');
export const removeContactError = createAction('contacts/removeError');

// export const addContact = contact => {
//   return {
//     type: types.ADD,
//     payload: contact,
//   };
// };

// export const deleteContact = id => {
//   return {
//     type: types.DELETE,
//     payload: id,
//   };
// };

// export const filterContact = name => {
//   return {
//     type: types.FILTER,
//     payload: name,
//   };
// };
