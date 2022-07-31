import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.props.toggleModal}>
        <div className={styles.modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
