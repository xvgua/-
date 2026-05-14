<template>
  <div class="practice-view">
    <div class="practice-header-section">
      <button class="back-button" @click="$router.back()"><img src="/.figma/image/mp192vrw-h9uylsh.svg" alt="返回"></button>
      <div class="search-bar">
        <p class="search-text">找到您想要的教程，点击直接开始练习！</p>
        <svg viewBox="0 0 28 28" fill="none" class="search-icon"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
      </div>
      <div class="stats-area">
        <img src="/.figma/image/mp192vot-3e3vea4.png" alt="奖杯" class="trophy-image">
        <div class="count-wrapper"><p class="count-label">你已<br>练习了：</p><div class="count-box"><p class="count-number">2 次</p></div></div>
      </div>
    </div>
    <div class="video-list">
      <div class="video-card" @click="$router.push('/video-practice')" v-for="(v, i) in videos" :key="i">
        <div class="card-image-wrapper"><img :src="v.img" alt="视频" class="card-image"></div>
        <div class="card-info-row">
          <span class="card-title-text">{{ v.title }}</span>
          <span class="duration-badge">{{ v.duration }}</span>
        </div>
        <div class="card-info-rowt">
          <span class="author-name">{{ v.subtitle }}</span>
          <span class="rating-label">评分：</span>
          <img :src="v.stars >= 1 ? '/.figma/image/mp11xooo-jf60oo1.svg' : '/.figma/image/mp11xooo-mhdbdke.svg'" alt="星" class="star-icon">
          <img :src="v.stars >= 2 ? '/.figma/image/mp11xooo-jf60oo1.svg' : '/.figma/image/mp11xooo-mhdbdke.svg'" alt="星" class="star-icon">
          <img :src="v.stars >= 3 ? '/.figma/image/mp11xooo-jf60oo1.svg' : '/.figma/image/mp11xooo-mhdbdke.svg'" alt="星" class="star-icon">
          <img :src="v.stars >= 4 ? '/.figma/image/mp11xooo-jf60oo1.svg' : '/.figma/image/mp11xooo-mhdbdke.svg'" alt="星" class="star-icon">
          <img :src="v.stars >= 5 ? '/.figma/image/mp11xooo-jf60oo1.svg' : (v.halfStar ? '/.figma/image/mp11xooo-mhdbdke.svg' : '/.figma/image/mp11xooo-mhdbdke.svg')" alt="星" class="star-icon">
          <span class="rating-score">{{ v.score }}分</span>
        </div>
      </div>
      <div class="bottom-tip"><p class="tip-text">到底了_(:з」∠)_</p></div>
    </div>
  </div>
</template>

<script setup>
const videos = [
  { title: '武当太极十三势', duration: '50:57', stars: 4, halfStar: true, score: '4', subtitle: '武当资内', img: '/.figma/image/mp192be6-8vwm5pg.png' },
  { title: '陈氏太极拳', duration: '1:20:12', stars: 5, halfStar: false, score: '5', subtitle: '', img: '/.figma/image/mp192be6-oltqhh8.png' },
  { title: '武当太极十三势', duration: '50:57', stars: 4, halfStar: true, score: '4', subtitle: '武当资内', img: '/.figma/image/mp192be6-8vwm5pg.png' },
  { title: '武当太极十三势', duration: '50:57', stars: 4, halfStar: true, score: '4', subtitle: '武当资内', img: '/.figma/image/mp192be6-pbrt2eh.png' },
]
</script>

<style scoped>
.practice-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; overflow-y: auto; }
.practice-header-section { position: relative; background: #e5f5de; padding: 9px 18px 46px 44px; width: 100%; }
.back-button { position: absolute; top: -1px; left: -4px; width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; z-index: 10; }
.back-button img { width: 40px; height: 40px; }
.search-bar { display: flex; align-items: center; border: 1px solid #819b74; border-radius: 5px; background: #daf0d0; padding: 6px 2px 6px 10px; margin-right: 7px; margin-bottom: 10px; }
.search-text { font-size: 13px; line-height: 16px; color: #6b6b6b; margin: 0; white-space: nowrap; }
.search-icon { width: 20px; height: 20px; flex-shrink: 0; margin-left: auto; }
.stats-area { position: relative; margin-left: 169px; width: 144px; height: 162px; }
.trophy-image { position: absolute; top: -15px; left: -230px; width: 218px; height: 218px; }
.count-wrapper { position: relative; z-index: 5; }
.count-label { position: absolute; top: 0; left: -22px; height: 162px; font-size: 45px; line-height: 54px; color: #000000; margin: 0; white-space: nowrap; }
.count-box { position: absolute; top: 115px; left: -15px;border: 1px solid #819b74; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: #e7f2e1; padding: 15px 25px 15px 14px; width: 137px; height: 84px; }
.count-number { font-size: 45px; line-height: 54px; color: #000000; margin: 0; }
.video-list { width: 100%; max-width: 375px; padding: 23px 18px 46px 44px; }
.video-card { display: flex; flex-direction: column; align-items: flex-start; width: 334px; height: 165px; margin-top: 16px; margin-left: 50%; transform: translateX(-50%); cursor: pointer; }
.card-image-wrapper { position: relative; width: 334px; height: 131px; }
.card-image-wrapper img { position: absolute; top: 0; left: 0; border-radius: 8px; width: 334px; height: 131px; object-fit: cover; }
.card-image { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 8px; }
.card-info-row { display: flex; align-items: center; align-self: stretch; margin-top: 3px; padding-right: 0; padding-left: 1px; }
.card-title-text { width: 122px; height: 18px; letter-spacing: 0; color: #000000; font-size: 15px; line-height: 18px; }
.duration-badge { margin-left: auto; width: 39px; height: 16px; letter-spacing: 0; color: #000000; font-size: 13px; flex-shrink: 0; }
.card-info-rowt { display: flex; align-items: center; align-self: stretch; margin-top: 3px; padding-right: 0; padding-left: 1px; }
.author-name { margin-right: auto; height: 12px; letter-spacing: 0; color: #6b6b6b; font-size: 11px; line-height: 12px; flex-shrink: 0; }
.rating-label { margin: 0px 0px 0px 51px; width: 39px; height: 15px; letter-spacing: 0; color: #000000; font-size: 13px; line-height: 15px; }
.star-icon { margin-left: 3px; width: 15px; height: 14px; }
.rating-score { margin: 0px 0px 0px 9px; width: 22px; letter-spacing: 0; color: #000000; font-size: 13px; line-height: 15px; }
.bottom-tip { margin-top: 10px; padding-left: 1px; }
.tip-text { font-size: 15px; line-height: 17px; color: #000000; margin: 0 0 4px 67px; }
</style>
