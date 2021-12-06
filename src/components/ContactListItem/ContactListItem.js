import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Grid, IconButton, Link, Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as actions from '../../redux/contacts/contacts-actions';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsListItem = ({ contacts, filtered, deleteContact, openEditContactForm }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  if (contacts.length === 0) {
    return (
      <Grid key="1" item>
        <Typography>No contacts avalible</Typography>
      </Grid>
    );
  } else {
    return filtered.map(contact => (
      <Grid key={contact.id} item xs={12} sm={6} md={4} lg={3}>
        <Item
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'left', flexShrink: '3', overflow: 'hidden' }}>
            <Typography sx={{ mr: '5px', overflow: 'auto' }}>{contact.name}</Typography>
            <Typography sx={{ mr: '5px', overflow: 'auto' }}>
              <Link href={`tel:${contact.number}`}>{contact.number}</Link>
            </Typography>
          </Box>
          <IconButton
            sx={{ ml: 'auto' }}
            aria-label="edit contact"
            onClick={() => openEditContactForm(contact)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete contact"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Item>
      </Grid>
    ));
  }
};

ContactsListItem.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    filter: contactsSelectors.getFilter(state),
    filtered: contactsSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
    openEditContactForm: contact => {
      dispatch(actions.toggleModal());
      dispatch(actions.editContact(contact));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
