import api from '../shared/services/contacts';
import {
  getContactError,
  getContactRequest,
  getContactSuccess,
  // addContact,
  addContactError,
  addContactRequest,
  addContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from './actions';

export const getContact = () => {
  const actionFunc = async dispatch => {
    dispatch(getContactRequest());

    try {
      const data = await api.fetchAllContacts();
      dispatch(getContactSuccess(data));
    } catch (error) {
      dispatch(getContactError(error));
    }
  };

  return actionFunc;
};

export const addContact = data => {
  const actionFunc = async (dispatch, getStore) => {
    // const { contact } = getStore();
    // const result = contact.find(item => item.name === data.name);
    // if (contact) {
    // }
    dispatch(addContactRequest());
    try {
      const newContact = await api.fetchAddContact(data);
      dispatch(addContactSuccess(newContact));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

  return actionFunc;
};

export const removeContact = id => {
  const actionFunc = async dispatch => {
    dispatch(removeContactRequest());
    try {
      const contactId = await api.fetchRemoveContact(id);
      dispatch(removeContactSuccess(contactId));
    } catch (error) {
      dispatch(removeContactError(error));
    }
  };

  return actionFunc;
};

export default {
  getContact,
  addContact,
  removeContact,
};
