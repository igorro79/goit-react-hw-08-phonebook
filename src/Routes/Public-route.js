import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';

export default function PubliceRoute({ children, params, restricted = false }) {
  console.log(params);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  //   console.log(object);
  return <Route {...params}>{shouldRedirect ? <Redirect to="/contacts" /> : children}</Route>;
}
