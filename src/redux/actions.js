import { createAction } from '@reduxjs/toolkit';

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
