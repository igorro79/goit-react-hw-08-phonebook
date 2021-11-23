// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import avatar from '../../images/avatar.png';

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
      <button type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
}

export default AuthNav;
