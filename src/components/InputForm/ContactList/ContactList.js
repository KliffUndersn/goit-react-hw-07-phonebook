import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/actions';

export const ContactList = ({ filteredContacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts && (
        <>
          <h3>Contacts</h3>
          <ul>
            {filteredContacts.map(e => (
              <li key={e.id}>
                {e.name} : {e.number}
                <button onClick={() => dispatch(deleteContact(e.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(Object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
