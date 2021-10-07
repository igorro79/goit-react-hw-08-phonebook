import shortid from 'shortid';
import PropTypes from 'prop-types';

import s from './ContactsListItem.module.css';
const ContactsListItem = ({ contacts, removeContact }) => {
  if (contacts.length === 0) {
    return (
      <li className={s.contactListItem}>
        <h4>The list is empty</h4>
      </li>
    );
  } else {
    return contacts.map(contact => (
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
export default ContactsListItem;
