import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/contacts',
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
