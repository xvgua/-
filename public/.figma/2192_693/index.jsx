import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle1}>
        <img
          src="../image/mp1aix5r-a289jui.png"
          className={styles.a5C234A7D50209E0Fdc0}
        />
        <div className={styles.autoWrapper}>
          <img
            src="../image/mp1aix5q-7c3dh21.svg"
            className={styles.chevronsDown}
          />
          <img src="../image/mp1aix5q-2ip2cif.svg" className={styles.volumeX} />
        </div>
      </div>
      <div className={styles.rectangle9} />
      <div className={styles.rectangle11}>
        <img src="../image/mp1aix5q-emzkozk.png" className={styles.rectangle13} />
        <div className={styles.autoWrapper2}>
          <img src="../image/mp1aix5q-f1s9xgd.svg" className={styles.volumeX} />
          <img src="../image/mp1aix5q-796d7hr.svg" className={styles.pause} />
          <img src="../image/mp1aix5q-ww6yzpx.svg" className={styles.volumeX} />
        </div>
      </div>
      <img src="../image/mp1aix5q-pgo765t.svg" className={styles.chevronLeft} />
      <div className={styles.line1} />
      <div className={styles.rectangle12}>
        <p className={styles.text}>良好</p>
      </div>
    </div>
  );
}

export default Component;
