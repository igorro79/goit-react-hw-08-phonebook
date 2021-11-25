import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import Form from '../ContactForm/ContactForm';

import ContactsList from '../ContactsList/ContactsList';
import ContactsListItem from '../ContactListItem/ContactListItem';
import Filter from '../ContactFilter/ContactFilter';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <ContactsList>
        <ContactsListItem />
      </ContactsList>
    </div>
  );
}
