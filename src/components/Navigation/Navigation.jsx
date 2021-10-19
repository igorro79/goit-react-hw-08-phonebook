import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact className={s.navItem} activeClassName={s.activItem}>
        Home
      </NavLink>

      <NavLink to="/movies" className={s.navItem} activeClassName={s.activItem}>
        Movie
      </NavLink>
    </nav>
  );
}
