import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { useSelector } from 'react-redux';
import InputForm from './inputForm/InputForm';

const ContactForm = () => {
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  console.log(items);

  const filterContacts = e => {
    return items.filter(e => e.name.toLowerCase().includes(filter));
  };
  return (
    <>
      <InputForm />
      <FilterContacts />
      <ContactList filteredContacts={filterContacts()} />
    </>
  );
};

export default ContactForm;

// const mapStateToProps = ({ items, filter }) => {
//   return {
//     items,
//     filter,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   onSubmit: value => dispatch(addContact(value)),
//   onDelete: id => dispatch(deleteContact(id)),
//   changiFilter: ({ target }) => dispatch(filterContact(target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
