import { NavLink as NativLink } from 'react-router-dom';
import { Link, Box } from '@mui/material';

function Navigation() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Link
          component={NativLink}
          to="/"
          variant="h6"
          underline="hover"
          color="#fff"
          sx={{
            p: 2,
          }}
        >
          Главная
        </Link>
        <Link
          component={NativLink}
          to="/contacts"
          variant="h6"
          underline="hover"
          color="#fff"
          sx={{
            p: 2,
          }}
        >
          Контакты
        </Link>
      </Box>
    </div>
  );
}

export default Navigation;
