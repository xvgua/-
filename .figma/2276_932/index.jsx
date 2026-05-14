import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.slot}>
      <div className={styles.iconButton} />
      <p className={styles.text}>陈氏</p>
    </div>
  );
}

export default Component;
