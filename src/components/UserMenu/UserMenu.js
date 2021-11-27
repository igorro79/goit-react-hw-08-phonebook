import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import avatar from '../../images/avatar.png';
import Button from '@mui/material/Button';

import { Box, Typography, Avatar } from '@mui/material';

function AuthNav() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: '900',
        justifyContent: 'right',
        mb: '15px',
        mt: '10px',
      }}
    >
      {' '}
      <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24 }} />
      <Typography>
        {'   '}
        {'   '} Hello {name}
        {'   '}
        <Button variant="outlined" size="small" color="primary" onClick={handleClick}>
          Logout
        </Button>
      </Typography>
    </Box>
  );
}

export default AuthNav;
