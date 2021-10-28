import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../../redux/actions';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        placeholder="start typing"
        onChange={({ target }) => dispatch(filterContact(target.value))}
      />
    </>
  );
};

FilterContacts.propTypes = {
  filtered: PropTypes.func.isRequired,
};
