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
    return {
      filter: state.filter,
      items: state.items.filter(e => e.id !== action.payload),
    };
  },
  [filterContact]: (state, action) => {
    return { filter: action.payload, items: [...state.items] };
  },
});

// const contactPercistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store);
export default store;

// const reducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case types.ADD:
//       return { filter: state.filter, items: [...state.items, action.payload] };
//     case types.DELETE:
//       return {
//         filter: state.filter,
//         items: state.items.filter(e => e.id !== action.payload),
//       };
//     case types.FILTER:
//       return { filter: action.payload, items: [...state.items] };
//     default:
//       return state;
//   }
// };

// const store = createStore(
//   persistReducer(contactPercistConfig, reducer),
//   composeWithDevTools(),
// );
