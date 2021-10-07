import React, { Component } from 'react';
import s from './App.module.css';

import Form from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsListItem from './components/ContactListItem/ContactListItem';
import Filter from './components/ContactFilter/ContactFilter';
class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }
  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) || [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  resetInput() {
    this.setState({ filter: '' });
  }
  addNewContact(name, number, id) {
    let useuExist = false;
    this.state.contacts.map(contact => {
      if (
        name.toLocaleLowerCase() === contact.name.toLocaleLowerCase() ||
        number === contact.number
      ) {
        alert('Such name or number alredy exist!');
        useuExist = true;
      }
    });
    if (!useuExist) {
      const newContact = { name, number, id };
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    } else {
      return;
    }
  }

  removeContact(id) {
    console.log(id);
    const onRemove = this.state.contacts.filter(contact => contact.id !== id);
    console.log(onRemove);
    this.setState({ contacts: [...onRemove] });
  }

  render() {
    let filtered;
    if (this.state.filter.length > 0) {
      const lowLettersNames = this.state.filter.toLocaleLowerCase();
      filtered = this.state.contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(lowLettersNames),
      );
    } else {
      filtered = this.state.contacts;
    }

    return (
      <div className={s.contactSection}>
        <h1>Phonebook</h1>

        <Form
          onSubmit={this.addNewContact}
          contacts={this.state.contacts}
          handleSubmit={this.handleSubmit}
        />
        <Filter
          reset={this.resetInput}
          filter={this.state.filter}
          onChange={this.onFilter}
          handleInput={this.handleInput}
        />
        <ContactsList>
          <ContactsListItem contacts={filtered} removeContact={this.removeContact} />
        </ContactsList>
      </div>
    );
  }
}

export default App;
