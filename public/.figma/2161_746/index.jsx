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
        </div>
        <div className={styles.component4}>
          <p className={styles.videoPreview}>
            Video
            <br />
            Preview
          </p>
          <img src="../image/mp1cbzju-kgc2wku.svg" className={styles.play} />
        </div>
        <div className={styles.autoWrapper}>
          <div className={styles.textOnAPath} />
          <div className={styles.rectangle16}>
            <p className={styles.text}>&nbsp;&nbsp;</p>
            <div className={styles.instance}>
              <p className={styles.text2}>记录今日的努力...</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle8}>
          <div className={styles.autoWrapper2}>
            <img src="../image/mp1cbzju-x7de9od.svg" className={styles.home} />
            <img src="../image/mp1cbzju-m8zc8hk.svg" className={styles.film} />
            <img src="../image/mp1cbzju-3pw5sl2.svg" className={styles.feather} />
            <img src="../image/mp1cbzju-73t5dse.svg" className={styles.film} />
          </div>
          <p className={styles.text5}>
            <span className={styles.text3}>
              &nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视频&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className={styles.text4}>收藏</span>
            <span className={styles.text3}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的
            </span>
          </p>
        </div>
        <div className={styles.ellipse9}>
          <p className={styles.text6}>
            现在
            <br />
            练习
          </p>
        </div>
      </div>
      <div className={styles.chevronLeft3}>
        <div className={styles.chevronLeft2}>
          <div className={styles.chevronLeft}>
            <img src="../image/mp1cbzju-6ogp8kf.svg" className={styles.home} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
