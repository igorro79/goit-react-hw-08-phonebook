// import s from './App.module.css';
import { Switch } from 'react-router-dom';
// import { Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Routes/Private-route';
import PublicRoute from './Routes/Public-route';

import Container from './components/Container/Container';

// import Contacts from './components/Contacts/Contacts';
// import Home from './components/Home/Home';
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';

import AppBar from './components/AppBar/AppBar';

const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const Home = lazy(() => import('./components/Home/Home'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));

function App() {
  const dispatch = useDispatch();
  const isFetchingContacts = useSelector(authSelectors.getIsFetchingContacts);
  console.log('isFetchingContacts', isFetchingContacts);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingContacts && (
      <Container>
        <AppBar />
        <Suspense fallback={<p>loading</p>}>
          <Switch>
            <PublicRoute path="/" exact>
              <Home />
            </PublicRoute>
            <PublicRoute path="/login" exact restricted>
              <Login />
            </PublicRoute>
            <PublicRoute path="/register" exact restricted>
              <Register />
            </PublicRoute>
            <PrivateRoute path="/contacts" exact>
              <Contacts />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
