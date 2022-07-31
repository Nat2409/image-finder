import React from 'react';
import styles from './Button.module.css';

export default function Button({ eventLoadMore }) {
  return (
    <button type="button" onClick={eventLoadMore} className={styles.button}>
      Load more
    </button>
  );
}
