import { Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './Routes/Private-route';
import PublicRoute from './Routes/Public-route';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Spinner from './components/Spinner/Spinner';

import { Container } from '@mui/material';

const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));

const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const Home = lazy(() => import('./components/Home/Home'));

function App() {
  const dispatch = useDispatch();
  const isFetchingContacts = useSelector(authSelectors.getIsFetchingContacts);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingContacts && (
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PrivateRoute path="/contacts" exact>
              <Suspense fallback={<Spinner />}>
                <Contacts />
              </Suspense>
            </PrivateRoute>
            <PublicRoute path="/" exact restricted>
              <Home />
            </PublicRoute>
            <PublicRoute path="/login" exact restricted>
              <Home>
                <Suspense fallback={<Spinner />}>
                  <Login />
                </Suspense>
              </Home>
            </PublicRoute>
            <PublicRoute path="/register" exact restricted>
              <Home>
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              </Home>
            </PublicRoute>
            <PublicRoute>
              <Suspense fallback={<Spinner />}>
                <PageNotFound />
              </Suspense>
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
