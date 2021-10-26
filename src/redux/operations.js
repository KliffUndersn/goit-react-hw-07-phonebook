import api from '../shared/services/contacts';
import actions from './actions';

export const getContact = () => {
  const actionFunc = async dispatch => {
    dispatch(actions.getContactRequest());

    try {
      const data = await api.fetchAllContact();
      dispatch(actions.getContactSuccess(data));
    } catch (error) {
      dispatch(actions.getContactError(error));
    }
  };

  return actionFunc;
};

export const addContact = data => {
  const actionFunc = async (dispatch, getStore) => {
    const { Contact } = getStore();
    const result = Contact.items.find(item => item.title === data.title);
    if (result) {
    }
    dispatch(actions.addContactRequest());
    try {
      const newContact = await api.fetchAddContact(data);
      dispatch(actions.addContactuccess(newContact));
    } catch (error) {
      dispatch(actions.addContactError(error));
    }
  };

  return actionFunc;
};

export const removeContact = id => {
  const actionFunc = async dispatch => {
    dispatch(actions.removeContactRequest());
    try {
      const removeContact = await api.fetchRemoveContact(id);
      dispatch(actions.removeContactuccess(id));
    } catch (error) {
      dispatch(actions.removeContactError(error));
    }
  };

  return actionFunc;
};

export default {
  getContact,
  addContact,
  removeContact,
};
