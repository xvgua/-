<template>
  <div class="favorites-view">
    <div class="favorite-header">
      <div class="favorite-search-bar" @click="$router.push('/favorite-search')">
        <p class="favorite-search-placeholder">搜索您收藏过的视频/用户</p>
        <svg viewBox="0 0 28 28" fill="none" class="favorite-search-icon"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
      </div>
    </div>
    <div class="dots-container" @click="showUsers = !showUsers">
      <img src="/.figma/image/mp16ota7-59ut1au.svg" alt="更多" class="more-horizontal-icon">
    </div>
    <transition name="slide-fade">
      <div v-if="showUsers" class="user-box-section">
        <div class="user-scroll-container">
          <div class="user-avatars-row">
            <div class="user-avatar-item"><img src="/.figma/image/mp17hlka-hu400gf.png" alt="许氏" class="user-avatar-circle"><span class="user-name-label">许氏</span></div>
            <div class="user-avatar-item" @click="$router.push('/user-detail')"><img src="/.figma/image/mp17hlka-sxh3cuy.png" alt="阳氏" class="user-avatar-circle"><span class="user-name-label">阳氏</span></div>
            <div class="user-avatar-item"><img src="/.figma/image/mp17hlka-rqhzjgr.png" alt="牟式" class="user-avatar-circle"><span class="user-name-label">牟式</span></div>
            <div class="user-avatar-item"><img src="/.figma/image/mp17hlka-zyt3sq3.png" alt="江氏" class="user-avatar-circle"><span class="user-name-label">江氏</span></div>
            <div class="user-avatar-item"><img src="/.figma/image/mp17hlka-lo50qtx.png" alt="李氏" class="user-avatar-circle"><span class="user-name-label">李氏</span></div>
          </div>
        </div>
      </div>
    </transition>
    <div class="favorite-video-list">
      <div class="favorite-video-card" v-for="(video, idx) in videos" :key="video.id">
        <div class="favorite-card-image-wrapper">
          <img :src="video.image" alt="视频" class="favorite-card-image" @click="$router.push('/video-practice')">
          <div class="favorite-card-overlay"><div class="favorite-card-actions"><button class="action-button" @click.stop="pinTop(idx)">置顶</button><button class="action-button" @click.stop="removeFavorite(idx)">取消收藏</button></div></div>
        </div>
        <div class="favorite-card-info">
          <div class="video-info-left"><div class="video-title-row"><h3 class="video-title">{{ video.title }}</h3><span class="duration-time">{{ video.duration }}</span></div><div class="video-subtitle-row"><p class="video-subtitle">{{ video.subtitle }}</p><div class="rating-section"><span class="rating-label">评分：</span><img v-for="s in video.stars" :key="s" :src="s" alt="星" class="star-icon"><span class="duration-score">{{ video.score }}</span></div></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showUsers = ref(true)

const videos = reactive([
  {
    id: 1,
    image: '/.figma/image/mp17hlk9-5pild2b.png',
    title: '武当太极十三势',
    duration: '50:57',
    subtitle: '八法五步陈氏继承人',
    stars: [
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-53dqoex.svg',
    ],
    score: '4分',
  },
  {
    id: 2,
    image: '/.figma/image/mp17hlk3-yc8nxs5.png',
    title: '武当太极十三势',
    duration: '50:57',
    subtitle: '八法五步陈氏继承人',
    stars: [
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-1mf49ke.svg',
      '/.figma/image/mp17hlk3-53dqoex.svg',
    ],
    score: '4分',
  },
])

const pinTop = (idx) => {
  if (idx <= 0) return
  const item = videos.splice(idx, 1)[0]
  videos.unshift(item)
}

const removeFavorite = (idx) => {
  if (window.confirm('确定要取消收藏该视频吗？')) {
    videos.splice(idx, 1)
  }
}
</script>

<style scoped>
.favorites-view { max-width: 375px; width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; overflow-y: auto; overflow-x: hidden; margin: 0 auto; }
.favorite-header { display: flex; align-items: center; background: #daf0d0; padding: 8px 24px 9px 30px; height: 51px; min-height: 51px; position: sticky; top: 0; z-index: 100; }
.favorite-search-bar { display: flex; flex-grow: 1; align-items: center; justify-content: space-between; border: 1px solid #898989; border-radius: 5px; background: #e1f0da; padding: 3px 8px 3px 15px; height: 34px; cursor: pointer; }
.favorite-search-placeholder { line-height: 17px; color: #6b6b6b; font-size: 12px; margin: 0; }
.favorite-search-icon { width: 20px; height: 20px; flex-shrink: 0; }
.dots-container { position: sticky; top: 51px; background: #ffffff; z-index: 100; padding: 10px 0; display: flex; justify-content: center; align-items: center; cursor: pointer; }
.more-horizontal-icon { width: 40px; height: 40px; }
.user-box-section { padding: 0 13px; }
.user-scroll-container { display: flex; flex-direction: column; border: 1px solid #d9d9d9; border-radius: 8px; padding: 20px 15px; overflow: hidden; }
.user-avatars-row { display: flex; justify-content: flex-start; align-items: flex-start; gap: 12px; overflow-x: auto; flex-wrap: nowrap; -webkit-overflow-scrolling: touch; min-width: 0; cursor: grab; user-select: none; }
.user-avatars-row:active { cursor: grabbing; }
.user-avatars-row::-webkit-scrollbar { display: none; }
.user-avatar-item { display: flex; flex-direction: column; align-items: center; flex: 0 0 auto; min-width: 70px; cursor: pointer; }
.user-avatar-circle { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; background: #d9d9d9; }
.user-name-label { margin-top: 5px; font-size: 12px; line-height: 21px; color: #000000; }
.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateY(-10px); opacity: 0; }
.favorite-video-list { margin-top: 15px; padding: 0; flex: 1; }
.favorite-video-card { display: flex; flex-direction: column; margin: 12px 18px 0 23px; border-radius: 8px; width: 334px; position: relative; }
.favorite-card-image-wrapper { position: relative; width: 100%; height: 130px; border-radius: 8px; overflow: hidden; }
.favorite-card-image { width: 100%; height: 130px; object-fit: cover; display: block; }
.favorite-card-overlay { position: absolute; bottom: 10px; right: 10px; z-index: 2; }
.favorite-card-actions { display: flex; align-items: center; gap: 8px; }
.action-button { display: flex; align-items: center; justify-content: center; border: 1px solid #898989; border-radius: 8px; background-color: #e1f0da; padding: 11px; width: 66px; height: 21px; font-size: 12px; line-height: 12px; color: #303030; cursor: pointer; }
.action-button:last-child { padding-left: 1px; padding-right: 1px; }
.favorite-card-info { display: flex; flex-direction: column; margin-top: 8px; }
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
