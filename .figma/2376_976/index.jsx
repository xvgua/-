import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.formSlot}>
          <div className={styles.button2}>
            <p className={styles.button}>发送</p>
          </div>
        </div>
        <div className={styles.line1} />
        <img className={styles.rectangle13}>
          <div className={styles.line3} />
          <img src="../image/mp3v7b3h-4ze7g51.svg" className={styles.star} />
          <img src="../image/mp3v7b3h-989ki0u.svg" className={styles.star} />
          <img src="../image/mp3v7b3h-ekbvasm.svg" className={styles.star} />
        </img>
        <p className={styles.text}>评论</p>
        <div className={styles.ellipse12}>
          <p className={styles.text2}>
            现在
            <br />
            练习
          </p>
        </div>
        <img src="../image/mp3v7b3h-7lz5obf.svg" className={styles.close} />
        <div className={styles.rectangle7}>
          <div className={styles.autoWrapper}>
            <img src="../image/mp3v7b3h-qvn30pu.svg" className={styles.home} />
            <img src="../image/mp3v7b3h-fg4cnnr.svg" className={styles.film} />
            <img src="../image/mp3v7b3h-azk3l12.svg" className={styles.feather} />
            <img src="../image/mp3v7b3h-3nn7ecy.svg" className={styles.user} />
          </div>
          <p className={styles.text5}>
            <span className={styles.text3}>
              &nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视频&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收藏
            </span>
            <span className={styles.text4}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的
            </span>
          </p>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mp3v7b3h-w41n29g.svg" className={styles.chevronLeft} />
        <div className={styles.component2}>
          <img src="../image/mp3v7b3h-7kmosda.svg" className={styles.pause} />
        </div>
      </div>
    </div>
  );
}

export default Component;
