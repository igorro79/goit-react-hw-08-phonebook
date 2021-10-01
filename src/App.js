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
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],

      filter: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }
  resetInput() {
    this.setState({ filter: '' });
  }
  addNewContact(name, number, id) {
    const newContact = { name, number, id };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  }

  render() {
    const lowLettersNames = this.state.filter.toLocaleLowerCase();
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowLettersNames),
    );

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
          <ContactsListItem contacts={filtered} />
        </ContactsList>
      </div>
    );
  }
}

export default App;
