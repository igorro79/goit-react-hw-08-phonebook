import { connect } from 'react-redux';
import s from './ContactFilter.module.css';
import * as actions from '../redux/contacts-actions';

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

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const lowLettersNames = filter.toLocaleLowerCase();
  const visibleContacts = items.filter(item =>
    item.name.toLocaleLowerCase().includes(lowLettersNames),
  );
  return { items: visibleContacts };
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
