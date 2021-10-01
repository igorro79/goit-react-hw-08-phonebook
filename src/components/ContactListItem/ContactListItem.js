import shortid from 'shortid';
import s from './ContactsListItem.module.css';
const ContactsListItem = ({ contacts }) => {
  return contacts.map(contact => (
    <li className={s.contactListItem} key={shortid.generate()}>
      <p className={s.contactListName}>{contact.name}</p>
      <p className={s.contactListNumber}>{contact.number}</p>
    </li>
  ));
};
export default ContactsListItem;
