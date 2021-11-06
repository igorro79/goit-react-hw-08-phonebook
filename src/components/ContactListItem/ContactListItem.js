import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts-actions';

import s from './ContactsListItem.module.css';

const ContactsListItem = ({ filter, contacts, removeContact }) => {
  const getVisibleContacts = (f, c) => {
    const normalizedFilter = f.toLowerCase();
    return c.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  if (contacts.length === 0) {
    return (
      <li className={s.contactListItem}>
        <h4>The list is empty</h4>
      </li>
    );
  } else {
    return getVisibleContacts(filter, contacts).map(contact => (
      <li className={s.contactListItem} key={shortid.generate()}>
        <p className={s.contactListName}>{contact.name}</p>
        <p className={s.contactListNumber}>{contact.number}</p>
        <button
          className={s.removeContactBtn}
          type="button"
          onClick={() => {
            removeContact(contact.id);
          }}
        >
          Remove
        </button>
      </li>
    ));
  }
};

ContactsListItem.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    contacts: state.items,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeContact: id => dispatch(actions.removeContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
