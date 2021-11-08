import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import shortid from 'shortid';
import s from './ContactForm.module.css';
import * as actions from '../../redux/contacts-operations';

function Form({ onSubmit }) {
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

    // const id = shortid.generate();
    onSubmit({ name, number });

    resetInput();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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

const useDispachToProps = dispatch => {
  return {
    onSubmit: newItem => {
      dispatch(actions.addContact(newItem));
    },
  };
};

export default connect(null, useDispachToProps)(Form);
