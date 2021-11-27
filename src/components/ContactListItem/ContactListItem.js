import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Grid, IconButton, Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsListItem = ({ contacts, filter, filtered, deleteContact }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  if (contacts.length === 0) {
    return (
      <>
        <Typography>Contacts:</Typography>
        <Grid container spacing={2}>
          <Grid key="1" item>
            <Typography>No contacts avalible</Typography>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return filtered.map(contact => (
      <Grid key={contact.id} item xs={12} sm={6} md={4} lg={3}>
        <Item sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Typography sx={{ mr: '5px' }}>{contact.name}</Typography>
          <Typography>
            <Link href={`tel:${contact.number}`}>{contact.number}</Link>
          </Typography>
          <IconButton
            sx={{ ml: 'auto' }}
            aria-label="Example"
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
