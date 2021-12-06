import { useState } from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { contactsOperations, contactsSelectors, contactsActions } from '../../redux/contacts';
import { TextField, Typography, Box, Button } from '@mui/material';

function Form({ onSubmit, currentContact, contacts, noChanges, abortEditContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setName(currentContact.name);
    setNumber(currentContact.number);
    setId(currentContact.id);
    return () => {
      abortEditContact();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.filter(contact => contact.id !== id).find(contact => contact.name === name)) {
      alert('This NAME already is in the list of contacts');
      return;
    }
    if (name === currentContact.name && number === currentContact.number) {
      noChanges();
      return;
    }

    if (
      contacts
        .filter(contact => contact.id !== id)
        .find(contact => Number(contact.number) === Number(number))
    ) {
      alert('This NUMBER already is in the list of contacts');
      return;
    }

    onSubmit(currentContact.id, { name, number });
    resetInput();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          p: '3px',
          border: '1px solid grey',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="subtitle1">Add new Contact</Typography>{' '}
        <Box
          sx={{
            mb: '3px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TextField
            sx={{ mr: 1 }}
            label="Enter a name"
            size="small"
            type="text"
            fullWidth
            value={name}
            onChange={handleInput}
            name="name"
            required
            id="outlined-name"
            inputProps={{
              'aria-label': 'Enter new contact name',
              pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              title:
                "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
            }}
          />
          <TextField
            size="small"
            required
            type="text"
            value={number}
            onChange={handleInput}
            id="outlined-name"
            name="number"
            fullWidth
            label="Enter a number"
            inputProps={{
              'aria-label': 'Enter new contact number',
              pattern:
                '[+]?[0-9,]{1,4}?[-, ]?[(]?[0-9, ]{1,3}?[)]?[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,9}',
              title:
                'Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
            }}
          />
        </Box>
        <Button size="small" type="submit">
          Edit contact
        </Button>
      </Box>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const useStateToProps = (state, id) => {
  return {
    currentContact: contactsSelectors.contactToEdit(state),
    contacts: contactsSelectors.getContacts(state),
  };
};

const useDispachToProps = dispatch => {
  return {
    noChanges: () => {
      dispatch(contactsActions.toggleModal());
    },
    abortEditContact: () => {
      dispatch(contactsActions.editContact(null));
    },
    onSubmit: (id, newItem) => {
      dispatch(contactsOperations.editContact(id, newItem));
      dispatch(contactsActions.toggleModal());
      dispatch(contactsActions.editContact(null));
    },
  };
};

export default connect(useStateToProps, useDispachToProps)(Form);
