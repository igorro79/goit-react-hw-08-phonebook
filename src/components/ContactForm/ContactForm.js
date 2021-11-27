import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { TextField, Typography, Box, Button } from '@mui/material';

function Form({ onSubmit, contacts }) {
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

    // if (contacts.map(contact => contact.name === name)) {
    // alert('already exist')
    //   return;
    // } //=========сделать проверку ======

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
            // placeholder="Enter a name"
            inputProps={{ 'aria-label': 'Enter new contact name' }}
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
            inputProps={{ 'aria-label': 'Enter new contact number' }}
          />
        </Box>
        <Button size="small" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const useStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const useDispachToProps = dispatch => {
  return {
    onSubmit: newItem => {
      dispatch(contactsOperations.addContact(newItem));
    },
  };
};

export default connect(useStateToProps, useDispachToProps)(Form);
