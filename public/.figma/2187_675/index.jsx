import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.formSlot}>
      <div className={styles.slot} />
      <img src="../image/mp1y9wb6-hscxyqm.svg" className={styles.genericAvatar} />
      <div className={styles.text2}>
        <p className={styles.text}>林悦</p>
      </div>
      <div className={styles.textSmall2}>
        <p className={styles.textSmall}>今天 7:56</p>
      </div>
      <img src="../image/mp1y9wb6-mq41d9q.svg" className={styles.moreHorizontal} />
      <div className={styles.textSmall3}>
        <p className={styles.text}>今日打卡12天</p>
      </div>
      <div className={styles.rectangle6}>
        <img src="../image/mp1y9wb6-2atfsu4.svg" className={styles.playCircle} />
        <div className={styles.autoWrapper}>
          <div className={styles.text4}>
            <p className={styles.text3}>Twinkle Twinkle Little Star</p>
          </div>
          <div className={styles.textSmall4}>
            <p className={styles.textSmall}>Jane Taylor</p>
          </div>
        </div>
      </div>
      <img src="../image/mp1y9wb6-aw1omy4.svg" className={styles.messageCircle} />
      <img src="../image/mp1y9wb6-pke430l.svg" className={styles.thumbsUp} />
      <img src="../image/mp1y9wb6-527t3jx.svg" className={styles.externalLink} />
    </div>
  );
}

export default Component;
