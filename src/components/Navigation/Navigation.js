import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav style={{ display: 'flex' }}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
