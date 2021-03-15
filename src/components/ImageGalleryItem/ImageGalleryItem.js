import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, setLargeImg }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => setLargeImg(image)}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
