import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, setLargeImg }) => {
  const { webformatURL, tags } = image;
  return (
    <li className={styles.ImageGalleryItem} onClick={() => setLargeImg(image)}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles['ImageGalleryItem-image']}
      />
    </li>
  );
};

export default ImageGalleryItem;
