import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.text3}>
      <span className={styles.text}>用户B、用户C等4人</span>
      <span className={styles.text2}>&nbsp;转发了</span>
    </p>
  );
}

export default Component;
