import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import s from './AppBar.module.css';

function AppBar() {
  return (
    <div className={s.container}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </div>
  );
}

export default AppBar;
