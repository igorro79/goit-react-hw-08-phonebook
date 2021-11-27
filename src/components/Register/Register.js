import { useState } from 'react';
import * as s from './Register.module.css';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import authOperations from '../../redux/auth/auth-operations';
import { TextField, Button } from '@mui/material';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        sx={{ mb: 1 }}
        id="outlined-name"
        label="Name"
        name="name"
        type="text"
        value={name}
        size="small"
        onChange={handleInput}
      />
      <TextField
        sx={{ mb: 1 }}
        id="outlined-name"
        label="Email"
        name="email"
        type="text"
        value={email}
        size="small"
        onChange={handleInput}
      />
      <TextField
        sx={{ mb: 1 }}
        id="outlined-name"
        label="Password"
        type="password"
        name="password"
        value={password}
        size="small"
        onChange={handleInput}
      />
      <Button type="submit" size="small">
        SignUp
      </Button>
    </form>
  );
}

export default Register;
