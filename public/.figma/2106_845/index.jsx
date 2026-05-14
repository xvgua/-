import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <p className={styles.text}>
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
  );
}

export default Component;
