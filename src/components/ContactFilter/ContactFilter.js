import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const Filter = ({ filter, handleInput, reset }) => {
  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        placeholder="Input contact name"
        onBlur={reset}
        onChange={handleInput}
        name="filter"
        type="text"
        value={filter}
      />
    </label>
  );
};
export default Filter;
