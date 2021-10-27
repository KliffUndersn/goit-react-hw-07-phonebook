import { useState } from 'react';
import { v4 as generate } from 'uuid';
import { useSelector } from 'react-redux';
import { addContact, getContact } from '../../../redux/operations';
import fields from './fields';
import { useDispatch } from 'react-redux';

const InputForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;

    const newName = items.map(e => e.name);
    if (newName.includes(e.target.name.value)) {
      return alert(`${e.target.name.value} says hello from chat`);
    }
    const singleContact = {
      id: generate(),
      name,
      number,
    };
    dispatch(addContact(singleContact));
    dispatch(getContact());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <input {...fields.name} onChange={handleChange} />
        <h2>Number</h2>
        <input {...fields.number} onChange={handleChange} />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default InputForm;
