import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PubliceRoute({ children, params, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return <Route {...params}>{shouldRedirect ? <Redirect to="/contacts" /> : children}</Route>;
}
