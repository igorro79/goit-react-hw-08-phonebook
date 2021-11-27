import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';

const ContactsList = ({ children }) => {
  return (
    <>
      <Typography>Contacts:</Typography>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node,
};
export default ContactsList;
