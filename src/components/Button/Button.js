import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', disabled, ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className} ${disabled && styles.button__disabled}`}
      disabled={disabled}
      {...delegated}
    />
  );
}

export default Button;
