import { useState, useEffect } from 'react';
import * as s from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from '../../redux/auth';
import { errorReset } from '../../redux/auth/auth-slice';

import { TextField, Button, Typography } from '@mui/material';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const errorCurrent = useSelector(authSelectors.getErrorStatus);

  useEffect(() => {
    if (errorCurrent !== null) dispatch(errorReset(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    resetInput();
  };
  const errorCheck = useSelector(authSelectors.getErrorStatus);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        sx={{ mb: 1 }}
        label="Name"
        name="name"
        type="text"
        value={name}
        size="small"
        onChange={handleInput}
      />
      <TextField
        sx={{ mb: 1 }}
        label="Email"
        name="email"
        type="text"
        value={email}
        size="small"
        onChange={handleInput}
      />
      <TextField
        sx={{ mb: 1 }}
        label="Password"
        type="password"
        name="password"
        value={password}
        size="small"
        onChange={handleInput}
      />
      {errorCheck && (
        <Typography align="center" className={s.warning}>
          User with such email already exist.
        </Typography>
      )}
      <Button type="submit" size="small">
        SignUp
      </Button>
    </form>
  );
}

export default Register;
