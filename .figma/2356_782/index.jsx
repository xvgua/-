import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.rectangle3}>
          <img src="../image/mp2spbau-nkb9r01.svg" className={styles.chevronLeft} />
          <p className={styles.text}>元元</p>
        </div>
        <div className={styles.rectangle27}>
          <p className={styles.text2}>
            Hi，我是元元，陪你一起练习太极的小助手。你提问，我回答，帮你一起消化学到的太极文化OVO
          </p>
        </div>
      </div>
      <div className={styles.rectangle28}>
        <div className={styles.rectangle29}>
          <p className={styles.text3}>给元元发消息...</p>
        </div>
      </div>
      <img src="../image/mp2spbau-bnwejvo.png" className={styles.arrowLeftCircle} />
    </div>
  );
}

export default Component;
