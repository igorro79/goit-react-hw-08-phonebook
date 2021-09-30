// import shortid from 'shortid';

const ContactsList = ({ children }) => {
  return (
    <>
      <h3>Contacts</h3>
      <ul className="contact-list">{children}</ul>
    </>
  );
};
export default ContactsList;
