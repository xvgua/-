import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.rectangle3}>
          <img src="../image/mp2pefv5-o7drbag.svg" className={styles.chevronLeft} />
          <p className={styles.text}>编辑资料</p>
        </div>
        <div className={styles.autoWrapper}>
          <img
            src="../image/mp2pefv5-108pv1c.svg"
            className={styles.genericAvatar}
          />
          <div className={styles.ellipse15}>
            <img src="../image/mp2pefv5-jhrzkqn.svg" className={styles.camera} />
          </div>
        </div>
        <div className={styles.rectangle26}>
          <div className={styles.autoWrapper2}>
            <p className={styles.text2}>名字</p>
            <p className={styles.text3}>林悦</p>
          </div>
          <div className={styles.autoWrapper3}>
            <p className={styles.textCode}>用户ID</p>
            <p className={styles.a123456}>123456</p>
            <img src="../image/mp2pefv5-g9hw8iu.svg" className={styles.copy} />
          </div>
          <div className={styles.autoWrapper4}>
            <p className={styles.text4}>简介</p>
            <p className={styles.text5}>爱生活，爱自己</p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper5}>
        <img src="../image/mp2pefv5-xctz9z4.png" className={styles.chevronLeft2} />
        <img src="../image/mp2pefv5-xctz9z4.png" className={styles.chevronLeft3} />
      </div>
    </div>
  );
}

export default Component;
