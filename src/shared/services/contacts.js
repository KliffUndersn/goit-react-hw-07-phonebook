import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/KliffUndersn/goit-react-hw-07-phonebook/contacts',
});

export const fetchAllContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const fetchRemoveContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export default {
  fetchAllContacts,
  fetchAddContact,
  fetchRemoveContact,
};
