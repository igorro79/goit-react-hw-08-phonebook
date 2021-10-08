import React, { Component } from 'react';
// import s from './App.module.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    showSpinner: false,
    searchQuery: null,
    showModal: false,
    pageNumber: 1,
    apiKey: '22940171-5681176a4d1601b312f680141',
    gallery: [],
    showButton: false,
    biggerImage: null,
  };
  fetchImages = () => {
    this.setState({ showSpinner: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.pageNumber}&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(res => {
        if (res.hits.length === 0) {
          alert('Found nothing!!!! Try one more time!');
        } else if (res.hits.length < 12) {
          this.setState({ showButton: false });
        } else {
          this.setState({ showButton: true });
        }

        this.setState(prev => ({ gallery: [...prev.gallery, ...res.hits] }));
        console.log(res.hits);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ showSpinner: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ gallery: [] });
    this.setState({ searchQuery });
    this.setState({ pageNumber: 1 });
  };

  onShowMore = () => {
    this.fetchImages();
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  onImageClick = imageObj => {
    this.setState({ biggerImage: imageObj });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSearchbarSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            gallery={this.state.gallery}
            pageCount={this.pageCount}
            onImageClick={this.onImageClick}
          />
        </ImageGallery>{' '}
        {this.state.showSpinner && <Spinner />}{' '}
        {this.state.showButton && <Button onClick={this.onShowMore} />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.state.biggerImage} />
        )}
      </>
    );
  }
}

export default App;
