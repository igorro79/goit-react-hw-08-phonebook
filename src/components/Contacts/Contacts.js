import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import { Box, Container } from '@mui/material';

import Form from '../ContactForm/ContactForm';

import ContactsList from '../ContactsList/ContactsList';
import ContactsListItem from '../ContactListItem/ContactListItem';
import Filter from '../ContactFilter/ContactFilter';
import UserMenu from '../../components/UserMenu/UserMenu';

export default function Contacts() {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(contactsOperations.fetchContacts()), []);

  return (
    <Container>
      <UserMenu />
      <Box
        sx={{
          display: 'flex',
          mb: '10px',
        }}
      >
        <Box sx={{ mr: '3px' }}>
          <Form />
        </Box>
        {'  '}
        <Filter />
      </Box>
      <ContactsList>
        <ContactsListItem />
      </ContactsList>
    </Container>
  );
}
