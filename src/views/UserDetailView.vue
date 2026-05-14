<template>
  <div class="user-detail-view">
    <div class="detail-header">
      <button class="back-button" @click="$router.push('/favorites')">
        <img src="/.figma/image/mp181h6y-rkm83a8.svg" alt="返回">
      </button>
    </div>
    <div class="user-info-section">
      <div class="user-profile-row">
        <img src="/.figma/image/mp180s72-3ok3bpq.png" alt="阳氏" class="user-profile-avatar">
        <div class="user-profile-info"><h2 class="user-name-large">阳氏</h2><p class="user-description">太极拳第二百三十二代传人</p></div>
      </div>
      <div class="divider-line">————————————</div>
    </div>
    <div class="video-list">
      <div class="video-card" v-for="i in 2" :key="i">
        <div class="card-image-wrapper">
          <img :src="i === 1 ? '/.figma/image/mp181h3m-hx6clh0.png' : '/.figma/image/mp181h6u-kghr5a7.png'" alt="视频" class="card-image" @click="$router.push('/video-detail')">
          <div class="card-overlay"><div class="card-actions"><button class="action-button">置顶</button><button class="action-button">取消收藏</button></div></div>
        </div>
        <div class="card-info">
          <div class="video-info-left">
            <div class="video-title-row">
              <h3 class="video-title">阳氏太极拳视频00{{ i }}</h3>
              <span class="duration-time">{{ i === 1 ? '50:57' : '20:24' }}</span>
            </div>
            <div class="video-subtitle-row">
              <p class="video-subtitle">阳氏</p>
              <div class="rating-section">
                <span class="rating-label">评分：</span>
                <img src="/.figma/image/mp180s6w-m2144gb.svg" alt="星" class="star-icon">
                <img src="/.figma/image/mp180s6w-m2144gb.svg" alt="星" class="star-icon">
                <img src="/.figma/image/mp180s6w-m2144gb.svg" alt="星" class="star-icon">
                <img src="/.figma/image/mp180s6w-m2144gb.svg" alt="星" class="star-icon">
                <span class="duration-score">4分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-detail-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; overflow-y: auto; }
.detail-header { display: flex; align-items: center; background: #daf0d0; padding: 8px 24px 9px 30px; height: 51px; min-height: 51px; position: sticky; top: 0; z-index: 100; }
.back-button { width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; display: flex; align-items: center; justify-content: center; }
.back-button img { width: 40px; height: 40px; }
.user-info-section { padding: 20px 24px; border-bottom: 1px solid #e5e5e5; }
.user-profile-row { display: flex; align-items: center; gap: 20px; margin-bottom: 12px; }
.user-profile-avatar { width: 95px; height: 95px; border-radius: 50%; object-fit: cover; border: 1px solid #a4a4a4; background: #d9d9d9; }
.user-profile-info { display: flex; flex-direction: column; gap: 6px; }
.user-name-large { font-size: 32px; line-height: 45px; color: #000000; margin: 0; }
.user-description { font-size: 12px; line-height: 17px; color: #6b6b6b; margin: 0; }
.divider-line { text-align: center; color: #999; font-size: 12px; margin: 16px 0; }
.video-list { padding: 0 13px; flex: 1; }
.video-card { display: flex; flex-direction: column; margin: 12px 18px 0 23px; border-radius: 8px; width: 334px; position: relative; }
.card-image-wrapper { position: relative; width: 100%; height: 130px; border-radius: 8px; overflow: hidden; }
.card-image { width: 100%; height: 130px; object-fit: cover; display: block; }
.card-overlay { position: absolute; bottom: 10px; right: 10px; z-index: 2; }
.card-actions { display: flex; align-items: center; gap: 8px; }
.action-button { display: flex; align-items: center; justify-content: center; border: 1px solid #898989; border-radius: 8px; background-color: #e1f0da; padding: 11px; width: 66px; height: 21px; font-size: 12px; line-height: 12px; color: #303030; cursor: pointer; }
.action-button:last-child { padding-left: 1px; padding-right: 1px; }
.card-info { display: flex; flex-direction: column; margin-top: 8px; }
.video-info-left { display: flex; flex-direction: column; margin-bottom: 6px; }
.video-title { font-size: 15px; line-height: 20px; color: #000000; margin: 0 0 2px 0; }
.video-title-row { display: flex; align-items: center; justify-content: space-between; }
.video-subtitle-row { display: flex; align-items: center; justify-content: space-between; }
.video-subtitle { font-size: 12px; line-height: 16px; color: #6b6b6b; margin: 0; flex-shrink: 0; }
.rating-section { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
.rating-label { font-size: 13px; color: #000000; }
.star-icon { width: 15px; height: 14px; }
.duration-time { font-size: 13px; color: #000000; }
.duration-score { font-size: 13px; color: #000000; }
</style>
