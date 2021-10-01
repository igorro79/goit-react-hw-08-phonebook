import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const Filter = ({ filter, handleInput, reset }) => {
  return (
    <div className={s.filterFormWrapper}>
      <label htmlFor="filter" className={s.filterLabel}>
        Find contacts by name
      </label>
      <input
        className={s.filterInput}
        placeholder="Input contact name"
        id="filter"
        onBlur={reset}
        onChange={handleInput}
        name="filter"
        type="text"
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default Filter;
