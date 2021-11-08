import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts-operations';

import s from './ContactsListItem.module.css';

const ContactsListItem = ({ filter, contacts, deleteContact, fetchContacts }) => {
  const getVisibleContacts = (f, c) => {
    const normalizedFilter = f.toLowerCase();
    return c.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };
  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts.length === 0) {
    return (
      <li className={s.contactListItem}>
        <h4>The list is empty</h4>
      </li>
    );
  } else {
    return getVisibleContacts(filter, contacts).map(contact => (
      <li className={s.contactListItem} key={contact.id}>
        <p className={s.contactListName}>{contact.name}</p>
        <p className={s.contactListNumber}>{contact.number}</p>
        <button
          className={s.removeContactBtn}
          type="button"
          onClick={() => {
            deleteContact(contact.id);
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
    deleteContact: id => dispatch(actions.deleteContact(id)),
    fetchContacts: () => dispatch(actions.fetchContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
