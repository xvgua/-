import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.autoWrapper}>
          <div className={styles.line1} />
          <img className={styles.rectangle13}>
            <div className={styles.line3} />
            <img src="../image/mp3unz54-io7y52g.svg" className={styles.star} />
            <img src="../image/mp3unz54-hucimzt.svg" className={styles.star} />
          </img>
        </div>
        <div className={styles.formSlot}>
          <img src="../image/mp3unz54-qhccv0p.svg" className={styles.close} />
          <div className={styles.button2}>
            <p className={styles.button}>发送</p>
          </div>
        </div>
      </div>
      <div className={styles.line2} />
      <img src="../image/mp3unz54-j6m5c45.svg" className={styles.chevronLeft} />
      <div className={styles.component2}>
        <img src="../image/mp3unz54-2h2ikwq.svg" className={styles.pause} />
      </div>
      <img src="../image/mp3unz55-zjtux04.png" className={styles.image21} />
    </div>
  );
}

export default Component;
