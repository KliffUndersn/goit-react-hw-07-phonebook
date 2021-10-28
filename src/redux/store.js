import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  getContactSuccess,
  addContactSuccess,
  removeContactSuccess,
  filterContact,
} from './actions';

const initialStore = {
  filter: '',
  items: [],
};

const reducer = createReducer(initialStore, {
  [getContactSuccess]: (state, action) => {
    return { filter: '', items: action.payload };
  },
  [addContactSuccess]: (state, action) => {
    return { filter: state.filter, items: [...state.items, action.payload] };
  },
  [removeContactSuccess]: (state, action) => {
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
