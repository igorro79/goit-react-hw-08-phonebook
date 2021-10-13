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

  useEffect(() => {
    // setShowButton( false );
    fetchImages();
    setPageNumber(prev => prev + 1);
  }, [searchQuery]);

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
        if (gallery.length > 12) {
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
        <ImageGalleryItem
          gallery={gallery}
          // pageCount={pageCount}
          onImageClick={onImageClick}
        />
      </ImageGallery>{' '}
      {showSpinner && <Spinner />}
      {showButton && <Button onClick={onShowMore} />}
      {showModal && <Modal onClose={toggleModal} image={biggerImage} />}
    </>
  );
}

export default App;

// class App extends Component {
//   state = {
//     showSpinner: false,
//     searchQuery: null,
//     showModal: false,
//     pageNumber: 1,
//     gallery: [],
//     showButton: false,
//     biggerImage: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchImages();
//       this.setState({ pageNumber: this.state.pageNumber + 1 });
//     }
//   }

//   fetchImages = () => {
//     this.setState({ showSpinner: true });

//     ApiService(this.state.searchQuery, this.state.pageNumber)
//       .then(res => {
//         if (res.hits.length === 0) {
//           this.setState({ showButton: false });
//           alert('Found nothing!!!! Try one more time!');
//         } else if (res.hits.length < 12) {
//           this.setState({ showButton: false });
//         } else {
//           this.setState({ showButton: true });
//         }

//         this.setState(prev => ({ gallery: [...prev.gallery, ...res.hits] }));
//         if (this.state.gallery.length > 12) {
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//           });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       })
//       .finally(() => {
//         this.setState({ showSpinner: false });
//       });
//   };

//   handleSearchbarSubmit = searchQuery => {
//     this.setState({ gallery: [], searchQuery, pageNumber: 1 });
//   };

//   onShowMore = () => {
//     this.fetchImages();
//     this.setState({ pageNumber: this.state.pageNumber + 1 });
//   };

//   onImageClick = imageObj => {
//     this.setState({ biggerImage: imageObj });
//     this.toggleModal();
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSearch={this.handleSearchbarSubmit} prevSearchQuery={this.state.searchQuery} />
//         <ImageGallery>
//           <ImageGalleryItem
//             gallery={this.state.gallery}
//             pageCount={this.pageCount}
//             onImageClick={this.onImageClick}
//           />
//         </ImageGallery>{' '}
//         {this.state.showSpinner && <Spinner />}
//         {this.state.showButton && <Button onClick={this.onShowMore} />}
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal} image={this.state.biggerImage} />
//         )}
//       </>
//     );
//   }
// }

// export default App;
