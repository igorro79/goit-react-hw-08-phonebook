// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import avatar from '../../images/avatar.png';
import Button from '@mui/material/Button';

function AuthNav() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <p>Hello {name}</p>
      <Button variant="outlined" size="small" color="error" onClick={handleClick}>
        Exit
      </Button>
    </div>
  );
}

export default AuthNav;
