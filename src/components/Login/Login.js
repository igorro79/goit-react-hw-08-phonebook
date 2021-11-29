import { useState, useEffect } from 'react';
import * as s from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { authOperations, authSelectors, authReducer } from '../../redux/auth';
import { errorReset } from '../../redux/auth/auth-slice';
import { TextField, Button, Typography } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const errorCurrent = useSelector(authSelectors.getErrorStatus);

  useEffect(() => {
    if (errorCurrent !== null) dispatch(errorReset(null));
  }, []);

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));

    resetInput();
  };
  const errorCheck = useSelector(authSelectors.getErrorStatus);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        sx={{ mb: 1 }}
        label="Email"
        name="email"
        type="text"
        value={email}
        size="small"
        onChange={handleInput}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <TextField
        sx={{ mb: 1 }}
        label="Password"
        type="password"
        name="password"
        value={password}
        size="small"
        onChange={handleInput}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      {errorCheck && (
        <Typography align="center" className={s.warning}>
          Wrong email or password
        </Typography>
      )}
      <Button type="submit" size="small">
        Sign In
      </Button>
    </form>
  );
}

export default Login;
