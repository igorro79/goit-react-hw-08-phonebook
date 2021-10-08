import s from './ImageGallery.module.css';

const ImageGallery = ({ children }) => <ul className={s.ImageGallery}>{children}</ul>;

export default ImageGallery;
