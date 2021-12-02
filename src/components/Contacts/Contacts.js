import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import * as actions from '../../redux/contacts/contacts-actions';

import { Box, Container, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/Add';

import ContactsList from '../ContactsList/ContactsList';
import ContactsListItem from '../ContactListItem/ContactListItem';
import Filter from '../ContactFilter/ContactFilter';
import UserMenu from '../../components/UserMenu/UserMenu';
import Modal from '../../components/Modal/Modal';
import AddContactForm from '../../components/AddContactForm/AddContactForm';
import EditContactForm from '../../components/EditContactForm/EditContactForm';

function Contacts(addNewContact) {
  const dispatch = useDispatch();
  const shoudModalOpen = useSelector(contactsSelectors.getToggleModal);
  const contactToEdit = useSelector(contactsSelectors.contactToEdit);
  // const { id, name, number } = contactToEdit;
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
        <Button
          sx={{ fontSize: 20, mr: 2 }}
          aria-label="add contact"
          onClick={() => dispatch(actions.toggleModal())}
          variant="contained"
          startIcon={<AddBoxIcon fontSize="large" />}
        >
          Add contact
        </Button>
        {/* <IconButton aria-label="add contact" onClick={() => dispatch(actions.toggleModal())}>
          <AddBoxIcon color="primary" sx={{ fontSize: 40 }} />
        </IconButton> */}
        <Filter />
      </Box>
      <hr />
      <ContactsList>
        <ContactsListItem />
      </ContactsList>

      {shoudModalOpen && (
        <Modal>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '50px',
              borderRadius: '5px',
            }}
          >
            <AddContactForm />
          </Box>
        </Modal>
      )}
      {shoudModalOpen && contactToEdit && (
        <Modal>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '50px',
              borderRadius: '5px',
            }}
          >
            <EditContactForm />
          </Box>
        </Modal>
      )}
    </Container>
  );
}

export default Contacts;
