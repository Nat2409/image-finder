import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Button from '../components/Button/Button';
import Loader from '../components/Loader';
import Modal from '../components/Modal/Modal';

import fetchPicturesApi from '../fetchPicturesApi';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    hits: [],
    page: 1,
    query: '',
    key: '17512246-8cb81e257606609dfb7634e3b',
    isLoading: false,
    error: null,
    showModal: false,
    pictureForModal: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.handlerFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.query !== this.state.query && this.handlerFetch();
  }
  handleSearchFormSubmit = value => {
    this.setState({ query: value, page: 1, hits: [] });
  };
  handlerShowModal = e => {
    // const { large_image } = e.target.dataset;

    // console.log('e.target.dataset', e.target.dataset);
    // console.log('imageUrl', e.target.dataset.large_image);
    this.setState({
      pictureForModal: e.target.dataset.large_image,
      showModal: true,
    });
  };

  handlerHideModal = () => {
    this.setState({ showModal: false });
  };

  handlerFetch = () => {
    this.setState({ isLoading: true });
    fetchPicturesApi(this.state)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading, showModal, pictureForModal } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {showModal && (
          <Modal image={pictureForModal} toggleModal={this.handlerHideModal} />
        )}
        <ImageGallery hits={hits} showPicture={this.handlerShowModal} />
        {this.state.isLoading && <Loader />}
        {hits.length > 0 && !isLoading && (
          <Button eventLoadMore={this.handlerFetch} />
        )}
      </div>
    );
  }
}
