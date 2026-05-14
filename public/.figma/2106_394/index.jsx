import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle1}>
      <div className={styles.autoWrapper}>
        <img src="../image/mp12mt87-flbrbeg.svg" className={styles.messageCircle} />
        <div className={styles.slot}>
          <div className={styles.tab}>
            <p className={styles.label}>关注</p>
          </div>
          <div className={styles.tab2}>
            <p className={styles.label2}>发现</p>
          </div>
          <div className={styles.tab3}>
            <p className={styles.label}>官方</p>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.icon} />
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mp12mt8a-d9fzoqu.png" className={styles.rectangle15} />
        <img src="../image/mp12mt8a-1fspoci.png" className={styles.rectangle15} />
      </div>
      <div className={styles.textContentHeading}>
        <p className={styles.heading}>感觉今天又进...</p>
        <p className={styles.subheading}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户2
        </p>
        <img src="../image/mp12mt87-ymumdd7.svg" className={styles.accountCircle} />
      </div>
      <div className={styles.autoWrapper5}>
        <div className={styles.autoWrapper3}>
          <div className={styles.textOnAPath} />
          <div className={styles.textContentHeading3}>
            <p className={styles.subheading2}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户1
            </p>
            <div className={styles.textContentHeading2}>
              <img
                src="../image/mp12mt87-ymumdd7.svg"
                className={styles.accountCircle}
              />
              <p className={styles.heading2}>今日分享</p>
              <p className={styles.heading3}>今日分享</p>
              <p className={styles.subheading3}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户1
              </p>
              <img
                src="../image/mp12mt87-ymumdd7.svg"
                className={styles.accountCircle2}
              />
            </div>
          </div>
          <img src="../image/mp12mt8a-ynyjhgv.png" className={styles.rectangle16} />
        </div>
        <div className={styles.autoWrapper4}>
          <div className={styles.rectangle8}>
            <img src="../image/mp12mt87-51mzz5n.svg" className={styles.home} />
            <img src="../image/mp12mt87-r7uc0nq.svg" className={styles.film} />
            <img src="../image/mp12mt87-93rj0aa.svg" className={styles.feather} />
            <img src="../image/mp12mt87-zcbkod1.svg" className={styles.user} />
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
          <img src="../image/mp12mt8a-7g5ycgs.png" className={styles.rectangle16} />
          <div className={styles.ellipse11}>
            <img src="../image/mp12mt87-k2ntsji.svg" className={styles.penTool} />
          </div>
          <div className={styles.textContentHeading4}>
            <p className={styles.heading}>咕咕嘎嘎</p>
            <p className={styles.subheading}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高松灯
            </p>
            <img
              src="../image/mp12mt87-ymumdd7.svg"
              className={styles.accountCircle}
            />
          </div>
          <div className={styles.ellipse9}>
            <p className={styles.text5}>
              现在
              <br />
              练习
            </p>
          </div>
        </div>
      </div>
      <div className={styles.textContentHeading5}>
        <p className={styles.heading}>新式功法！</p>
        <p className={styles.subheading}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户3
        </p>
        <img src="../image/mp12mt87-ymumdd7.svg" className={styles.accountCircle} />
      </div>
    </div>
  );
}

export default Component;
