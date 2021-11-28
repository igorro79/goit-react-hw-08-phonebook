// import PropTypes from 'prop-types';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
import { useEffect } from 'react';
import { NavLink as NativLink, Switch, useHistory } from 'react-router-dom';
// import PublicRoute from '../../Routes/Public-route';
import { Link, Box, Typography, Container } from '@mui/material';
import * as s from './Home.module.css';

function Home({ children }) {
  // const history = useHistory();
  // useEffect(() => {
  // history.push('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  console.log(children);
  return (
    <Container>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Typography sx={{ marginBottom: 5 }} variant="h4">
            Welcome to your Phonebook.
          </Typography>
          <Typography sx={{ marginBottom: 2, textAlign: 'center' }}>
            You can{' '}
            <Link component={NativLink} to="/register" activeClassName={s.active} underline="hover">
              {' '}
              SignUp
            </Link>{' '}
            or{' '}
            <Link component={NativLink} to="/login" activeClassName={s.active} underline="hover">
              SignIn
            </Link>{' '}
          </Typography>
        </Box>
        {children}
      </Box>
    </Container>
  );
}

export default Home;
