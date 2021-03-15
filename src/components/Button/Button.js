import React from 'react';

import styles from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={styles.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
