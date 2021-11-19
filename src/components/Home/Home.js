// import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Register from '../Register/Register';
import Login from '../Login/Login';
function Home() {
  return (
    <>
      <div>
        <h1>Welcome to a Phonebook</h1>
        {/* <p>
          You can{' '}
          <NavLink to="/login" exact>
            Login
          </NavLink>{' '}
          or{' '}
          <NavLink to="/register" exact>
            Register
          </NavLink>
        </p> */}

        <p>you personal phonebook</p>
      </div>

      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </>
  );
}
export default Home;
