import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle5}>
      <img src="../image/mp2uzedk-xcoax09.svg" className={styles.accountCircle} />
      <p className={styles.textSmall3}>
        <span className={styles.textSmall}>八法五步</span>
        <span className={styles.textSmall2}>陈氏</span>
        <span className={styles.textSmall}>继承人</span>
      </p>
      <div className={styles.group2}>
        <div className={styles.button2}>
          <p className={styles.button}>置顶</p>
        </div>
        <div className={styles.button2}>
          <p className={styles.button}>取消收藏</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
