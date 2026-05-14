import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.rectangle3}>
          <div className={styles.button2}>
            <p className={styles.button}>发表</p>
          </div>
          <img src="../image/mp13pkbo-jb7m9ww.svg" className={styles.send} />
        </div>
        <div className={styles.autoWrapper}>
          <div className={styles.textOnAPath} />
          <div className={styles.rectangle16}>
            <p className={styles.text}>记录今日的努力...</p>
            <div className={styles.rectangle17}>
              <img src="../image/mp13pkbo-9ig8u8l.svg" className={styles.camera} />
              <p className={styles.text2}>图片/视频</p>
            </div>
          </div>
        </div>
        <div className={styles.autoWrapper2}>
          <div className={styles.button3}>
            <p className={styles.button}>@好友</p>
          </div>
          <div className={styles.button4}>
            <p className={styles.button}>&nbsp;&nbsp;添加定位</p>
            <img
              src="../image/mp13pkbo-sm9ipep.svg"
              className={styles.locationOn}
            />
          </div>
        </div>
      </div>
      <img src="../image/mp13pkbo-7bjk6ou.svg" className={styles.chevronLeft} />
    </div>
  );
}

export default Component;
