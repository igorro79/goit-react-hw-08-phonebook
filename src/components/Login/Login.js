import { useState } from 'react';
import * as s from './Login.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.contactFormLabel}>
        Email
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="email"
          value={email}
          name="email"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="enter email"
          required
        />
      </label>
      <label className={s.contactFormLabel}>
        Password
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="password"
          value={password}
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="enter password"
          required
        />
      </label>
      <button className={s.contactAddButton} type="submit">
        Login
      </button>
    </form>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Login;
