import { useState } from 'react';
import s from './Searchbar.module.css';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Searchbar(props) {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('Enter text to search');
      setValue('');
      return;
    }
    if (value.trim() === props.prevSearchQuery) {
      alert('You already see a result, enter a NEW search request');
      return;
    }

    props.onSearch(value);
    setValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
