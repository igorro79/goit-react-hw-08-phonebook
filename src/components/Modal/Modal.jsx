import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  const onEscButton = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscButton);
    return () => {
      window.removeEventListener('keydown', onEscButton);
    };
  });

  const { onClose, image } = props;

  return createPortal(
    <div className={s.Overlay} onClick={onClose}>
      <div className={s.Modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
