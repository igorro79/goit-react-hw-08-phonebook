import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }, params) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  //   console.log(object);
  return <Route {...params}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
}
