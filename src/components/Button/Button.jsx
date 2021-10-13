import s from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <div className={s.buttonWrapper}>
      <button type="button" onClick={onClick} className={s.Button}>
        {' '}
        Load more
      </button>
    </div>
  );
};

export default Button;
