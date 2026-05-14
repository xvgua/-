import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.group2}>
      <div className={styles.button2}>
        <p className={styles.button}>置顶</p>
      </div>
      <div className={styles.button2}>
        <p className={styles.button}>取消收藏</p>
      </div>
    </div>
  );
}

export default Component;
