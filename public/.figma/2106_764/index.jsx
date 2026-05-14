import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.slot}>
      <div className={styles.tab}>
        <p className={styles.label}>关注</p>
      </div>
      <div className={styles.tab2}>
        <p className={styles.label}>发现</p>
      </div>
      <div className={styles.tab3}>
        <p className={styles.label2}>官方</p>
      </div>
    </div>
  );
}

export default Component;
