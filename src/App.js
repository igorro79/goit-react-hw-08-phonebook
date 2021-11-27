import { Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Routes/Private-route';
import PublicRoute from './Routes/Public-route';

import { Container } from '@mui/material';

const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const Home = lazy(() => import('./components/Home/Home'));
// const Register = lazy(() => import('./components/Register/Register'));
// const Login = lazy(() => import('./components/Login/Login'));

function App() {
  const dispatch = useDispatch();
  const isFetchingContacts = useSelector(authSelectors.getIsFetchingContacts);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingContacts && (
      <Container>
        <Suspense fallback={<p>loading</p>}>
          <Switch>
            <PrivateRoute path="/contacts" exact>
              <Contacts />
            </PrivateRoute>
            <PublicRoute path="/" restricted>
              <Home />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
