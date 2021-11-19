import { useState } from 'react';
import * as s from './Register.module.css';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

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
      <label className={s.contactFormLabel}>
        Name
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.contactFormLabel}>
        Phone
        <input
          className={s.contactFormInput}
          onChange={handleInput}
          type="email"
          value={email}
          name="email"
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
          title="enter password"
          required
        />
      </label>
      <button className={s.contactAddButton} type="submit">
        Register
      </button>
    </form>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Register;
