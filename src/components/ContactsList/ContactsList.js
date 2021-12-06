import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const ContactsList = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node,
};
export default ContactsList;
