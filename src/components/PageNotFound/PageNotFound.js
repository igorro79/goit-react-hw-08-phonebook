import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function PageNotFound() {
  const history = useHistory();

  return (
    <Box>
      <Typography>Page not found 404</Typography>
      <Link to={'/'}>Home Page</Link>
    </Box>
  );
}
