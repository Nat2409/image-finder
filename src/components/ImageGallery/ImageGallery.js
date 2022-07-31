import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ hits, showPicture }) {
  return (
    <ul className={styles.imageGallery} onClick={showPicture}>
      <ImageGalleryItem hits={hits} />
    </ul>
  );
}
