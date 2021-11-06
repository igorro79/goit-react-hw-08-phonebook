import { connect } from 'react-redux';
import s from './ContactFilter.module.css';
import * as actions from '../../redux/contacts-actions';

const Filter = ({ state, filter, handleInput, reset }) => {
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

const mapDispatchToProps = dispatch => {
  return {
    handleInput: e => dispatch(actions.filterContact(e.target.value)),
    reset: e => {
      dispatch(actions.filterContact(''));
      e.target.value = '';
    },
  };
};

export default connect(null, mapDispatchToProps)(Filter);
