import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle1}>
      <div className={styles.autoWrapper}>
        <img src="../image/mp13gbc4-qm5tyu6.svg" className={styles.messageCircle} />
        <div className={styles.slot}>
          <div className={styles.tab}>
            <p className={styles.label}>关注</p>
          </div>
          <div className={styles.tab2}>
            <p className={styles.label2}>发现</p>
          </div>
          <div className={styles.tab3}>
            <p className={styles.label3}>官方</p>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.icon} />
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mp13gbc7-ua6feft.png" className={styles.rectangle14} />
        <img src="../image/mp13gbc7-j72brh4.png" className={styles.rectangle9} />
      </div>
      <div className={styles.textContentHeading}>
        <p className={styles.heading}>恭迎联动！</p>
        <p className={styles.subheading}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ave母鸡卡
        </p>
        <img src="../image/mp13gbc4-m5itvge.svg" className={styles.accountCircle} />
      </div>
      <div className={styles.autoWrapper5}>
        <div className={styles.autoWrapper3}>
          <div className={styles.textOnAPath} />
          <img src="../image/mp13gbc7-mmwk48f.png" className={styles.rectangle13} />
          <div className={styles.textContentHeading2}>
            <p className={styles.heading}>一起健身！</p>
            <p className={styles.subheading}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;野人节
            </p>
            <div className={styles.accountCircle3}>
              <img
                src="../image/mp13gbc4-m5itvge.svg"
                className={styles.accountCircle2}
              />
            </div>
          </div>
        </div>
        <div className={styles.autoWrapper4}>
          <img src="../image/mp13gbc7-qfh4151.png" className={styles.rectangle13} />
          <div className={styles.ellipse11}>
            <img src="../image/mp13gbc4-etfualb.svg" className={styles.penTool} />
          </div>
          <div className={styles.textContentHeading3}>
            <p className={styles.heading}>打卡运动第...</p>
            <p className={styles.subheading}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不是香蕉
            </p>
            <img
              src="../image/mp13gbc4-m5itvge.svg"
              className={styles.accountCircle4}
            />
          </div>
        </div>
      </div>
      <div className={styles.textContentHeading4}>
        <p className={styles.heading}>打完半条命...</p>
        <p className={styles.subheading}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;睡觉练太极
        </p>
        <img src="../image/mp13gbc4-m5itvge.svg" className={styles.accountCircle} />
      </div>
      <div className={styles.rectangle8}>
        <img src="../image/mp13gbc4-thflows.svg" className={styles.home} />
        <img src="../image/mp13gbc4-q6iuo7l.svg" className={styles.film} />
        <img src="../image/mp13gbc4-8082vbo.svg" className={styles.feather} />
        <img src="../image/mp13gbc4-kc1mpsc.svg" className={styles.user} />
        <p className={styles.text4}>
          <span className={styles.text}>
            &nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className={styles.text2}>视频</span>
          <span className={styles.text}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收藏
          </span>
          <span className={styles.text3}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className={styles.text}>我的</span>
        </p>
      </div>
      <div className={styles.ellipse9}>
        <p className={styles.text5}>
          现在
          <br />
          练习
        </p>
      </div>
    </div>
  );
}

export default Component;
