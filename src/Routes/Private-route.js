import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }, params) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return <Route {...params}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
}
