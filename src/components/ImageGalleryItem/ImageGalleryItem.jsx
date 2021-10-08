import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  render() {
    if (this.props.gallery) {
      return this.props.gallery.map(item => {
        return (
          <li key={item.id} className={s.ImageGalleryItem}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              className={s.ImageGalleryItemImage}
              onClick={() => {
                this.props.onImageClick(item);
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
}

export default ImageGalleryItem;
