import { useState } from 'react';

import s from './Searchbar.module.css';

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

    props.getSearchQuery(value);
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          placeholder="Search movies"
          onChange={onChange}
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
