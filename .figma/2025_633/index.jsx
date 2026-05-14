import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.autoWrapper}>
          <div className={styles.rectangle3}>
            <div className={styles.rectangle7}>
              <p className={styles.textSmall}>陈氏</p>
              <div className={styles.search}>
                <div className={styles.icon} />
              </div>
            </div>
          </div>
          <img
            src="../image/mp2uylwm-8fopnrt.svg"
            className={styles.moreHorizontal}
          />
        </div>
        <div className={styles.autoWrapper2}>
          <div className={styles.slot}>
            <div className={styles.iconButton} />
            <p className={styles.text}>陈氏</p>
          </div>
          <div className={styles.rectangle5}>
            <img
              src="../image/mp2uylwn-ya0n4m8.svg"
              className={styles.accountCircle}
            />
            <p className={styles.textSmall3}>
              <span className={styles.textSmall2}>八法五步</span>
              <span className={styles.textSmall}>陈氏</span>
              <span className={styles.textSmall2}>继承人</span>
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
        </div>
      </div>
      <div className={styles.rectangle4}>
        <img src="../image/mp2uylwn-dg3uoz6.svg" className={styles.home} />
        <img src="../image/mp2uylwn-i00k0u4.svg" className={styles.film} />
        <img src="../image/mp2uylwn-4iddo7o.svg" className={styles.feather} />
        <img src="../image/mp2uylwn-ogd9ymg.svg" className={styles.user} />
      </div>
      <div className={styles.ellipse7}>
        <div className={styles.ellipse8}>
          <p className={styles.text2}>
            现在
            <br />
            练习
          </p>
        </div>
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
      <img src="../image/mp2uylwn-upidlm4.svg" className={styles.chevronLeft} />
    </div>
  );
}

export default Component;
