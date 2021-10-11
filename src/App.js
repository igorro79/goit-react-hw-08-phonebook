import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Spinner from './components/Spinner/Spinner';
import Modal from './components/Modal/Modal';
import ApiService from './services/ApiService';
class App extends Component {
  state = {
    showSpinner: false,
    searchQuery: null,
    showModal: false,
    pageNumber: 1,
    gallery: [],
    showButton: false,
    biggerImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  }

  fetchImages = () => {
    this.setState({ showSpinner: true });

    ApiService(this.state.searchQuery, this.state.pageNumber)
      .then(res => {
        if (res.hits.length === 0) {
          this.setState({ showButton: false });
          alert('Found nothing!!!! Try one more time!');
        } else if (res.hits.length < 12) {
          this.setState({ showButton: false });
        } else {
          this.setState({ showButton: true });
        }

        this.setState(prev => ({ gallery: [...prev.gallery, ...res.hits] }));
        if (this.state.gallery.length > 12) {
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
        this.setState({ showSpinner: false });
      });
  };

  handleSearchbarSubmit = searchQuery => {
    this.setState({ gallery: [], searchQuery, pageNumber: 1 });
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
        <Searchbar onSearch={this.handleSearchbarSubmit} prevSearchQuery={this.state.searchQuery} />
        <ImageGallery>
          <ImageGalleryItem
            gallery={this.state.gallery}
            pageCount={this.pageCount}
            onImageClick={this.onImageClick}
          />
        </ImageGallery>{' '}
        {this.state.showSpinner && <Spinner />}
        {this.state.showButton && <Button onClick={this.onShowMore} />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={this.state.biggerImage} />
        )}
      </>
    );
  }
}

export default App;
