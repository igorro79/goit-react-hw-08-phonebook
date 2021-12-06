import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsOperations, contactsSelectors, contactsActions } from '../../redux/contacts';
import { TextField, Typography, Box, Button } from '@mui/material';

function AddContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    if (contacts.find(contact => contact.name === name)) {
      alert('This NAME already is in the list of contacts');
      return;
    }

    if (contacts.find(contact => Number(contact.number) === Number(number))) {
      alert('This NUMBER already is in the list of contacts');
      return;
    }

    onSubmit({ name, number });
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

              // eslint-disable-next-line no-useless-escape
              pattern:
                '[+]?[0-9,]{1,4}?[-, ]?[(]?[0-9, ]{1,3}?[)]?[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,9}',
              title:
                'Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
            }}
          />
        </Box>
        <Button size="small" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: newItem => {
      dispatch(contactsOperations.addContact(newItem));
      dispatch(contactsActions.toggleModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
