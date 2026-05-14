import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.rectangle1}>
      <div className={styles.rectangle3}>
        <img src="../image/mp1yrhyo-oc5wqtd.svg" className={styles.chevronLeft} />
        <p className={styles.text}>详情</p>
        <img
          src="../image/mp1yrhyo-qyj07g8.svg"
          className={styles.moreHorizontal}
        />
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mp1yrhyo-rcoaql1.svg" className={styles.genericAvatar} />
        <div className={styles.autoWrapper}>
          <div className={styles.tab}>
            <p className={styles.label}>林悦</p>
          </div>
          <p className={styles.textSmall}>今天 10:13</p>
        </div>
        <p className={styles.text2}>&nbsp;·&nbsp;&nbsp;坚持打卡第12天</p>
      </div>
      <p className={styles.text3}>
        今天完成了《武当太极十三势》的第二次练习。
        <br />
        <br />
        刚开始练习“起势”和“云手”时，动作总是有些僵硬，尤其是重心转换的时候，身体容易前倾。跟着视频反复练了几遍后，感觉呼吸和动作逐渐能配合起来了。
        <br />
        <br />
        这次平台的 AI
        动作识别也给了我一些提醒，比如手臂抬起角度偏低、转身时膝盖方向不够稳定。虽然评分还不是特别高，但能清楚看到自己哪里做得不标准。
        <br />
        <br />
        太极拳看起来动作缓慢，但真正练起来才发现它很讲究身体控制和节奏。继续坚持打卡，希望下次能把动作做得更稳一些。
      </p>
      <div className={styles.autoWrapper3}>
        <img src="../image/mp1yrhyt-g26q3c5.png" className={styles.image5} />
        <img src="../image/mp1yrhyt-8ub4655.png" className={styles.image52} />
        <img src="../image/mp1yrhyt-q82r244.png" className={styles.rectangle18} />
      </div>
      <div className={styles.autoWrapper4}>
        <img src="../image/mp1yrhyo-2r5rcrt.svg" className={styles.thumbsUp} />
        <img src="../image/mp1yrhyo-ng4edxh.svg" className={styles.thumbsUp} />
        <img src="../image/mp1yrhyo-74eeff4.svg" className={styles.thumbsUp} />
      </div>
      <div className={styles.autoWrapper5}>
        <img src="../image/mp1yrhyo-srg605w.svg" className={styles.thumbsUp2} />
        <p className={styles.text6}>
          <span className={styles.text4}>
            陈氏传承人、杨氏太极爱好者、用户A 等13人
          </span>
          <span className={styles.text5}>&nbsp;赞了</span>
        </p>
      </div>
      <div className={styles.autoWrapper6}>
        <img src="../image/mp1yrhyo-vo0e3vv.svg" className={styles.externalLink} />
        <p className={styles.text7}>
          <span className={styles.text4}>用户B、用户C等4人</span>
          <span className={styles.text5}>&nbsp;转发了</span>
        </p>
      </div>
      <p className={styles.text10}>
        <span className={styles.text8}>张@李：</span>
        <span className={styles.text9}>
          云手这个动作我也经常做不稳，AI点评很有帮助。
        </span>
      </p>
    </div>
  );
}

export default Component;
