import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetInput() {
    this.setState({ name: '', number: '' });
  }
  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();

    const { name, number } = this.state;
    const id = shortid.generate();
    this.props.onSubmit(name, number, id);
    this.resetInput();
  }
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.contactFormLabel}>
          Name
          <input
            className={s.contactFormInput}
            onChange={this.handleInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.contactFormLabel}>
          Phone
          <input
            className={s.contactFormInput}
            onChange={this.handleInput}
            type="tel"
            value={this.state.number}
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
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
