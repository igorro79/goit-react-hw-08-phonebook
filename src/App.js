import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';
import Modal from './components/Modal/Modal';
import ApiService from './services/ApiService';

function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [biggerImage, setBiggerImage] = useState(null);

  const fetchImages = () => {
    setShowSpinner(true);

    ApiService(searchQuery, pageNumber)
      .then(res => {
        if (res.hits.length === 0) {
          setShowButton(false);
          alert('Found nothing!!!! Try one more time!');
        } else if (res.hits.length < 12) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }

        setGallery(prev => [...prev, ...res.hits]);
        if (pageNumber > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setShowSpinner(false);
      });
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    fetchImages();
    setPageNumber(prev => prev + 1);
  }, [searchQuery]);

  const handleSearchbarSubmit = searchQuery => {
    setGallery([]);
    setSearchQuery(searchQuery);
    setPageNumber(1);
  };

  const onShowMore = () => {
    fetchImages();
    setPageNumber(prev => prev + 1);
  };

  const onImageClick = imageObj => {
    setBiggerImage(imageObj);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Searchbar onSearch={handleSearchbarSubmit} prevSearchQuery={searchQuery} />
      <ImageGallery>
        <ImageGalleryItem gallery={gallery} onImageClick={onImageClick} />
      </ImageGallery>{' '}
      {showSpinner && <Spinner />}
      {showButton && <Button onClick={onShowMore} />}
      {showModal && <Modal onClose={toggleModal} image={biggerImage} />}
    </>
  );
}

export default App;
