import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/';
import { contactsSelectors } from '../../redux/';
import s from './ContactsListItem.module.css';

const ContactsListItem = ({ filtered, contacts, deleteContact, fetchContacts }) => {
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
    return filtered.map(contact => (
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
    contacts: contactsSelectors.getContacts(state),
    filter: contactsSelectors.getFilter(state),
    filtered: contactsSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
