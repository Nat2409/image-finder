import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ hits }) {
  return hits.map(hit => {
    return (
      <li key={hit.id} className={styles.imageGalleryItem}>
        <img
          src={hit.webformatURL}
          alt={hit.tags}
          className={styles.imageGalleryItem_image}
          data-large_image={hit.largeImageURL}
        />
      </li>
    );
  });
}
