import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <div className={styles.textOnAPath} />
        <div className={styles.autoWrapper2}>
          <div className={styles.autoWrapper}>
            <div className={styles.rectangle3}>
              <div className={styles.rectangle7}>
                <p className={styles.textSmall}>搜索您收藏过的视频/用户</p>
                <div className={styles.search}>
                  <div className={styles.icon} />
                </div>
              </div>
            </div>
            <img
              src="../image/mp16qyhy-nvfwe98.svg"
              className={styles.moreHorizontal}
            />
          </div>
          <div className={styles.rectangle5}>
            <img
              src="../image/mp16qyhy-guwai24.svg"
              className={styles.accountCircle}
            />
            <p className={styles.textSmall2}>八法五步陈氏继承人</p>
            <div className={styles.group2}>
              <div className={styles.button2}>
                <p className={styles.button}>置顶</p>
              </div>
              <div className={styles.button2}>
                <p className={styles.button}>取消收藏</p>
              </div>
            </div>
          </div>
          <div className={styles.group4}>
            <div className={styles.group11}>
              <img
                src="../image/mp16qyhy-8bw9zxg.svg"
                className={styles.accountCircle2}
              />
              <p className={styles.textSmall3}>太极拳基础</p>
              <div className={styles.group22}>
                <div className={styles.button3}>
                  <p className={styles.button}>置顶</p>
                </div>
                <div className={styles.button3}>
                  <p className={styles.button}>取消收藏</p>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.rectangle9}>
            <div className={styles.group23}>
              <div className={styles.button3}>
                <p className={styles.button}>置顶</p>
              </div>
              <div className={styles.button3}>
                <p className={styles.button}>取消收藏</p>
              </div>
            </div>
            <p className={styles.textSmall}>八法五步（东北大学跟练版）</p>
            <img
              src="../image/mp16qyhy-8bw9zxg.svg"
              className={styles.accountCircle3}
            />
          </img>
        </div>
      </div>
      <img src="../image/mp16qyhy-22z67va.png" className={styles.rectangle10} />
      <div className={styles.rectangle4}>
        <img src="../image/mp16qyhy-sg8zcuy.svg" className={styles.home} />
        <img src="../image/mp16qyhy-3oqmtxr.svg" className={styles.film} />
        <img src="../image/mp16qyhy-lblc0d9.svg" className={styles.feather} />
        <img src="../image/mp16qyhy-sj2s0vi.svg" className={styles.user} />
      </div>
      <div className={styles.ellipse7}>
        <div className={styles.ellipse8}>
          <p className={styles.text}>
            现在
            <br />
            练习
          </p>
        </div>
      </div>
      <p className={styles.text4}>
        <span className={styles.text2}>
          &nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视频&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={styles.text3}>收藏</span>
        <span className={styles.text2}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的
        </span>
      </p>
    </div>
  );
}

export default Component;
