import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.text3}>
      <span className={styles.text}>张@李：</span>
      <span className={styles.text2}>
        云手这个动作我也经常做不稳，AI点评很有帮助。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span className={styles.text}>我：</span>
      <span className={styles.text2}>回复内容</span>
    </p>
  );
}

export default Component;
