import { configureStore, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterContact,
} from './actions';

const initialStore = {
  filter: '',
  items: [],
};

const reducer = createReducer(initialStore, {
  [getContactSuccess]: (state, action) => {
    console.log(action.payload);
    return { filter: '', items: action.payload };
  },
  [addContactSuccess]: (state, action) => {
    console.log(action.payload);
    return { filter: state.filter, items: [...state.items, action.payload] };
  },
  [removeContactSuccess]: (state, action) => {
    console.log(action.payload);
    return {
      filter: state.filter,
      items: state.items.filter(e => e.id !== action.payload),
    };
  },
  [filterContact]: (state, action) => {
    return { filter: action.payload, items: [...state.items] };
  },
});

const store = configureStore({
  reducer: reducer,
});

export default store;
