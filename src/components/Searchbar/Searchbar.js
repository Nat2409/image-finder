import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handlerInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.searchbar} onSubmit={this.handlerSubmit}>
        <form className={styles.form}>
          <button type="submit" className={styles.form_button}>
            <span className={styles.form_button_label}>Search</span>
          </button>

          <input
            onChange={this.handlerInput}
            value={this.state.inputValue}
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
