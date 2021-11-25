import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
    // } //=========почему то не выходит сделать проверку ====== срабатывает на любой ввод=====

    onSubmit({ name, number });
    resetInput();
  };
  // const ariaLabel = { 'aria-label': 'Enter new contact name' };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Box
        component="span"
        sx={{
          p: 2,
          width: 'auto',
          border: '1px dashed grey',
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          autoFocus="true"
          size="small"
          id="outlined-name"
          placeholder="Enter a name"
          inputProps={{ 'aria-label': 'Enter new contact name' }}
        />
        <TextField
          autoFocus="true"
          size="small"
          id="outlined-name"
          placeholder="Enter a number"
          inputProps={{ 'aria-label': 'Enter new contact name' }}
        />
      </Box>

      <label className={s.contactFormLabel}>
        Name
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.contactFormLabel}>
        Phone
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.contactAddButton} type="submit">
        Add contact
      </button>
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
