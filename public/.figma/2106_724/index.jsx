import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.textContentHeading}>
      <p className={styles.heading}>打完半条命...</p>
      <p className={styles.subheading}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睡觉练太极
      </p>
    </div>
  );
}

export default Component;
