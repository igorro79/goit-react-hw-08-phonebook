import { connect } from 'react-redux';
import s from './ContactFilter.module.css';
import * as actions from '../../redux/contacts-actions';
import { contactsSelectors } from '../../redux/';

const Filter = ({ filter, handleInput, filtered, reset }) => {
  //   if (filtered.length < 1) {
  //     reset();
  // }
  return (
    <div className={s.filterFormWrapper}>
      <label htmlFor="filter" className={s.filterLabel}>
        Find contacts by name
      </label>
      <input
        className={s.filterInput}
        placeholder="Input contact name"
        id="filter"
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
    reset: () => {
      dispatch(actions.filterContact(''));
    },
  };
};
const mapStateToProps = state => {
  return {
    filtered: contactsSelectors.getVisibleContacts(state),
    filter: contactsSelectors.getFilter(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
