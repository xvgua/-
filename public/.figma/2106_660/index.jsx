import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.formSlot}>
      <div className={styles.slot} />
      <img src="../image/mp1y9was-0itdzht.svg" className={styles.genericAvatar} />
      <p className={styles.text}>林悦</p>
      <p className={styles.textSmall}>今天 7:56</p>
      <img src="../image/mp1y9was-7hpge4w.svg" className={styles.moreHorizontal} />
      <p className={styles.textSmall2}>今日打卡12天</p>
      <div className={styles.rectangle6}>
        <img src="../image/mp1y9was-3bfascu.svg" className={styles.playCircle} />
        <div className={styles.autoWrapper}>
          <p className={styles.text2}>Twinkle Twinkle Little Star</p>
          <p className={styles.textSmall3}>Jane Taylor</p>
        </div>
      </div>
      <img src="../image/mp1y9was-rbjg59e.svg" className={styles.messageCircle} />
      <img src="../image/mp1y9was-d1jdsod.svg" className={styles.thumbsUp} />
      <img src="../image/mp1y9was-a2p9xlu.svg" className={styles.externalLink} />
    </div>
  );
}

export default Component;
