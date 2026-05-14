import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.textContentHeading}>
      <p className={styles.heading}>今日分享</p>
      <p className={styles.subheading}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户1</p>
    </div>
  );
}

export default Component;
