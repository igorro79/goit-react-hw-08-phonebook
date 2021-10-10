import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscButton);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscButton);
  }
  onEscButton = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, image } = this.props;
    console.log(image);
    return createPortal(
      <div className={s.Overlay} onClick={onClose}>
        <div className={s.Modal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
