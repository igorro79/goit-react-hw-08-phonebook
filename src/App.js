// import s from './App.module.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Contacts from './components/Contacts/Contacts';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <div>
      <AppBar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/contacts" component={Contacts} exact></Route>
      </Switch>
    </div>
    // <div className={s.contactSection}>
    //   <h1>Phonebook</h1>
    //   <Form />
    //   <Filter />
    //   <ContactsList>
    //     <ContactsListItem />
    //   </ContactsList>
    // </div>
  );
}

export default App;
