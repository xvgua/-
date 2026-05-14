import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component4}>
      <p className={styles.videoPreview}>
        Video
        <br />
        Preview
      </p>
      <img src="../image/mp1cchb5-tkbodhd.svg" className={styles.play} />
    </div>
  );
}

export default Component;
