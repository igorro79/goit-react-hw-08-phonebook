import PropTypes from 'prop-types';

const ContactsList = ({ children }) => {
  return (
    <>
      <h2>Contacts:</h2>
      <ul className="contact-list">{children}</ul>
    </>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node,
};
export default ContactsList;
