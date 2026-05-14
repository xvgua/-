import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <img src="../image/mp1ajusq-ircbf1u.svg" className={styles.skipBack} />
        <div className={styles.autoWrapper}>
          <img src="../image/mp1ajusq-tof2mz4.svg" className={styles.chevronsUp} />
          <img src="../image/mp1ajusq-a7h626r.svg" className={styles.pause} />
        </div>
        <img src="../image/mp1ajusq-wtyp59k.svg" className={styles.skipForward} />
        <img src="../image/mp1ajusq-q4y34d0.svg" className={styles.volumeX} />
      </div>
      <div className={styles.autoWrapper2}>
        <img src="../image/mp1ajusq-vt16k7h.svg" className={styles.chevronsUp} />
        <div className={styles.a5C234A7D50209E0Fdc0}>
          <div className={styles.rectangle12}>
            <p className={styles.text}>优秀</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
