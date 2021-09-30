import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';

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
      // name: '',
      // number: '',
      filter: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }
  resetInput() {
    this.setState({ name: '', number: '', filter: '' });
  }
  handleInput(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        { name: this.state.name, id: shortid.generate(), number: this.state.number },
        ...prevState.contacts,
      ],
    }));
    this.resetInput();
  }

  render() {
    const lowLettersNames = this.state.filter.toLocaleLowerCase();

    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowLettersNames),
    );
    return (
      <div>
        <h1>Phonebook</h1>

        <Form
          // name={this.state.name}
          // number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
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
