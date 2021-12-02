import { Typography, Box, Link } from '@mui/material';
import { Link as NativLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Box>
      <Typography sx={{ fontSize: '44px', textAlign: 'center' }}>
        Page not found <br /> 404
      </Typography>
      <Link component={NativLink} sx={{ fontSize: '24px', textAlign: 'center' }} to={'/'}>
        Home Page
      </Link>
    </Box>
  );
}
