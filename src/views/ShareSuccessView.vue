<template>
  <div class="success-view">
    <div class="header-area">
      <div class="back-bar"><button class="back-btn" @click="$router.back()"><img src="/.figma/image/mp1cn7xs-uj2vs6o.svg" alt="返回"></button></div>
      <p class="success-title">分享成功！</p>
      <div class="recommendation-area">
        <p class="rec-title">相关练习推荐:</p>
        <div class="video-list-scroll">
          <div class="video-item" v-for="(v, i) in videos" :key="i">
            <img :src="v.img" alt="缩略图" class="thumb">
            <span class="duration-badge">{{ v.duration }}</span>
            <div class="info-row"><span class="video-title">{{ v.title }}</span><span class="rating-label">评分：</span><img src="/.figma/image/mp1cn7xr-pvhfnd5.svg" alt="星" class="star" v-for="s in v.stars" :key="s"><img src="/.figma/image/mp1cn7xr-c4hgupp.svg" alt="半星" class="star" v-if="v.half"><span class="score-text">{{ v.score }}分</span></div>
            <p class="author-name">{{ v.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const videos = [
  { title: '武当太极十三势', duration: '50:57', stars: 4, half: true, score: '4', author: '武当资内', img: '/.figma/image/mp1cn7y9-lzq3xgz.png' },
  { title: '陈氏太极拳', duration: '1:20:12', stars: 5, half: false, score: '5', author: '', img: '/.figma/image/mp1cn7y9-it71504.png' },
  { title: '武当太极十三势', duration: '50:57', stars: 4, half: true, score: '4', author: '武当资内', img: '/.figma/image/mp1cn7y9-lzq3xgz.png' },
  { title: '武当太极十三势', duration: '50:57', stars: 4, half: true, score: '4', author: '武当资内', img: '/.figma/image/mp1cn7y9-lzq3xgz.png' },
  { title: '到底了_(:з」∠)_', duration: '', stars: 4, half: true, score: '4', author: '武当资内', img: '' },
]
</script>

<style scoped>
.success-view { width: 100%; height: 100%; background: #ffffff; position: relative; overflow-y: auto; display: flex; flex-direction: column; }
.header-area { background: #ffffff; padding-bottom: 491px; width: 100%; min-height: 667px; position: relative; }
.back-bar { display: flex; align-items: flex-start; background: #ededed; padding: 0 10px 11px 0; height: 51px; }
.back-btn { width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; }
.back-btn img { width: 40px; height: 40px; }
.success-title { margin: 48px 0 0 40px; line-height: 77px; color: #000000; font-size: 64px; font-weight: normal; }
.recommendation-area { position: absolute; top: 233px; left: 0; display: flex; flex-direction: column; background: #ededed; padding: 6px 23px 55px 22px; width: 100%; min-height: 428px; }
.rec-title { margin: 0 0 0 1px; line-height: 18px; color: #000000; font-size: 15px; font-weight: normal; }
.video-list-scroll { margin-top: 9px; width: 100%; max-width: 334px; height: 340px; overflow-y: auto; }
.video-item { position: relative; width: 100%; max-width: 334px; height: 131px; margin-bottom: 10px; }
.thumb { position: absolute; top: 0; left: 0; border-radius: 8px; width: 100%; height: 131px; object-fit: cover; }
.duration-badge { position: absolute; bottom: -1px; right: 10px; color: #ffffff; font-size: 13px; z-index: 1; }
.info-row { display: flex; align-items: center; margin-top: 135px; padding-left: 1px; }
.video-title { color: #000000; font-size: 15px; }
.rating-label { margin-left: 68px; color: #000000; font-size: 13px; }
.star { margin-left: 3px; width: 15px; height: 14px; }
.score-text { margin-left: 9px; color: #000000; font-size: 13px; }
.author-name { margin-top: 1px; color: #6b6b6b; font-size: 11px; }
</style>
