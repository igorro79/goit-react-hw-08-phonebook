import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import * as actions from '../../redux/contacts/contacts-actions';

import { Box } from '@mui/material';
const modalRoot = document.getElementById('modal-root');

function Modal(props, id) {
  const dispatch = useDispatch();

  const onEscButton = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      dispatch(actions.toggleModal());
    }
  };

  const closeModal = e => {
    if (e.currentTarget === e.target) {
      dispatch(actions.toggleModal());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscButton);
    return () => {
      window.removeEventListener('keydown', onEscButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { children } = props;

  return createPortal(
    <Box className={s.Overlay} onClick={closeModal}>
      <Box className={s.Modal}>{children}</Box>
    </Box>,
    modalRoot,
  );
}

export default Modal;
