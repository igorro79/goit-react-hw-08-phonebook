// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

function AuthNav() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div>
      <p>Hello user</p>
      <button type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
}

export default AuthNav;
