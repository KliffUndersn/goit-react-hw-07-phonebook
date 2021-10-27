import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContact } from '../../../redux/operations';

export const ContactList = () => {
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  // console.log(items);

  const filterContacts = e => {
    console.log(items);
    return items.filter(e => e.name.toLowerCase().includes(filter));
  };
  const dispatch = useDispatch();
  return (
    <>
      {filterContacts && (
        <>
          <h3>Contacts</h3>
          <ul>
            {filterContacts().map(e => (
              <li key={e.id}>
                {e.name} : {e.number}
                <button onClick={() => dispatch(removeContact(e.id))}>
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
