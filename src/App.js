import s from './App.module.css';

import Form from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsListItem from './components/ContactListItem/ContactListItem';
import Filter from './components/ContactFilter/ContactFilter';

function App() {
  return (
    <div className={s.contactSection}>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <ContactsList>
        <ContactsListItem />
      </ContactsList>
    </div>
  );
}

export default App;
