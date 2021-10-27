import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import InputForm from './inputForm/InputForm';

const ContactForm = () => {
  return (
    <>
      <InputForm />
      <FilterContacts />
      <ContactList />
    </>
  );
};

export default ContactForm;
