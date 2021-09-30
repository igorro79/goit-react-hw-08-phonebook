import shortid from 'shortid';

const ContactsListItem = ({ contacts }) => {
  return contacts.map(contact => (
    <li className="contact-list-item" key={shortid.generate()}>
      <p className="contact-list-name">{contact.name}</p>
      <p className="contact-list-number">{contact.number}</p>
    </li>
  ));
};
export default ContactsListItem;
