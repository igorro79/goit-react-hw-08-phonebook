import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';
import { contactsSelectors } from '../../redux/contacts';
import { TextField, Typography, Box } from '@mui/material';

const Filter = ({ filter, handleInput, filtered, reset }) => {
  return (
    <Box
      sx={{
        p: '5px',
        border: '1px solid grey',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ mr: 1 }} variant="subtitle1">
        Find Contact
      </Typography>{' '}
      <Box>
        {' '}
        <TextField
          fullWidth
          name="filter"
          value={filter}
          onChange={handleInput}
          sx={{ mr: 1 }}
          label="Enter a name"
          size="small"
          type="text"
          id="outlined-name"
          inputProps={{ 'aria-label': 'Enter new contact name' }}
        />
      </Box>
    </Box>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput: e => dispatch(actions.filterContact(e.target.value)),
    reset: () => {
      dispatch(actions.filterContact(''));
    },
  };
};
const mapStateToProps = state => {
  return {
    filtered: contactsSelectors.getVisibleContacts(state),
    filter: contactsSelectors.getFilter(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
