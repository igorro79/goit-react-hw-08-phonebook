import PropTypes from 'prop-types';
const Filter = ({ filter, handleInput, reset }) => {
  return (
    <label>
      Find contacts by name
      <input
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
