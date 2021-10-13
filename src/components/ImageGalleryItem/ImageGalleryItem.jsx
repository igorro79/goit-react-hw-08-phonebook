import s from './ImageGalleryItem.module.css';

function ImageGalleryItem(props) {
  if (props.gallery) {
    return props.gallery.map(item => {
      return (
        <li key={item.id} className={s.ImageGalleryItem}>
          <img
            src={item.webformatURL}
            alt={item.tags}
            className={s.ImageGalleryItemImage}
            onClick={() => {
              props.onImageClick(item);
            }}
          />
        </li>
      );
    });
  } else {
    return (
      <li>
        <h3>start search</h3>
      </li>
    );
  }
}

export default ImageGalleryItem;
