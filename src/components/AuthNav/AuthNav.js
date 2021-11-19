import { NavLink } from 'react-router-dom';
function AuthNav() {
  return (
    <nav>
      <NavLink to="/register" exact>
        Register
      </NavLink>

      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default AuthNav;
