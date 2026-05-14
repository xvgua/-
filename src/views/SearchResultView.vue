<template>
  <div class="search-result-view">
    <div class="search-header">
      <svg viewBox="0 0 40 40" fill="none" class="back-btn" @click="$router.push('/search')">
        <path d="M25 30L15 20L25 10" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="search-input-wrapper">
        <input type="text" value="武氏太极" readonly class="search-input">
        <div class="search-icon-right">
          <svg viewBox="0 0 28 28" fill="none"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
      </div>
      <div class="tabs-bar">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          class="tab-label"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <div v-if="activeTab === tab.key" class="tab-indicator"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="user-box" v-show="activeTab !== 'video'">
        <div class="user-scroll">
          <div class="user-avatars">
            <div class="avatar-item"><img src="/.figma/image/mp25jhxr-gg40roy.png" alt="武松" class="avatar-img"><p class="avatar-name">武松</p></div>
            <div class="avatar-item"><img src="/.figma/image/mp25jhxp-z255i0o.png" alt="阳武" class="avatar-img"><p class="avatar-name">阳武</p></div>
            <div class="avatar-item"><img src="/.figma/image/mp25jhz4-vq4wtc5.png" alt="吴太" class="avatar-img"><p class="avatar-name">吴太</p></div>
            <div class="avatar-item"><img src="/.figma/image/mp25jhz2-rlbods6.png" alt="武奇" class="avatar-img"><p class="avatar-name">武奇</p></div>
          </div>
        </div>
      </div>
      <div class="video-cards" v-show="activeTab !== 'user'">
        <div class="video-card">
          <div class="video-thumbnail">
            <img src="/.figma/image/mp25jb5i-791z0kc.png" alt="视频" class="video-img">
          </div>
          <div class="video-info">
            <div class="video-title-row">
              <h3 class="video-title">武氏太极拳001</h3>
              <span class="video-duration">50:57</span>
            </div>
            <div class="video-subtitle-row">
              <p class="video-subtitle">武氏太极继承人</p>
              <div class="video-rating"><span class="rating-label">评分：</span><img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25jhxs-ltf9mxh.svg" alt="空星" class="star-icon"><span class="rating-score">4分</span></div>
            </div>
          </div>
        </div>
        <div class="video-card">
          <div class="video-thumbnail"><img src="/.figma/image/mp25jb5i-791z0kc.png" alt="视频" class="video-img"></div>
          <div class="video-info">
            <div class="video-title-row">
              <h3 class="video-title">武氏太极拳002</h3>
              <span class="video-duration">50:57</span>
            </div>
            <div class="video-subtitle-row">
              <p class="video-subtitle">武氏太极</p>
              <div class="video-rating"><span class="rating-label">评分：</span><img src="/.figma/image/mp25ji1o-zukz0mt.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25ji1o-zukz0mt.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25ji1o-zukz0mt.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25ji1o-zukz0mt.svg" alt="星" class="star-icon"><img src="/.figma/image/mp25ji1v-bx6j7uq.svg" alt="空星" class="star-icon"><span class="rating-score">4分</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('all')

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'video', label: '视频' },
  { key: 'user', label: '相关用户' },
  { key: 'tutorial', label: '教程' },
]
</script>

<style scoped>
.search-result-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; overflow-y: auto; }
.search-header { display: flex; flex-wrap: wrap; align-items: center; padding: 8px 18px 0 18px; background: #DAF0D0; min-height: 85px; position: sticky; top: 0; z-index: 10; }
.back-btn { width: 40px; height: 40px; cursor: pointer; flex-shrink: 0; }
.search-input-wrapper { flex: 1; margin-left: 20px; display: flex; align-items: center; border: 1px solid #898989; border-radius: 5px; background: #e1f0da; padding: 4px 6px 2px 10px; position: relative; }
.search-input { flex: 1; border: none; background: transparent; font-size: 17px; line-height: 24px; outline: none; color: #1E1E1E; }
.search-icon-right { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; }
.search-icon-right svg { width: 20px; height: 20px; }

.tabs-bar {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  padding: 0 24px 0 26px;
  gap: 40px;
}

.tab-label {
  position: relative;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  cursor: pointer;
  white-space: nowrap;
  padding-bottom: 4px;
}

.tab-label.active {
  font-weight: 500;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #4e9588;
  width: 51px;
  height: 1px;
}

.content { padding: 35px 17px 121px 18px; }
.user-box { padding: 0; margin-bottom: 23px; }
.user-scroll { display: flex; flex-direction: column; border: 1px solid #d9d9d9; border-radius: 8px; padding: 20px 15px; overflow: hidden; }
.user-avatars { display: flex; justify-content: flex-start; align-items: flex-start; gap: 12px; overflow-x: auto; flex-wrap: nowrap; -webkit-overflow-scrolling: touch; min-width: 0; cursor: grab; user-select: none; }
.user-avatars::-webkit-scrollbar { display: none; }
.user-avatars:active { cursor: grabbing; }
.avatar-item { display: flex; flex-direction: column; align-items: center; flex: 0 0 auto; min-width: 70px; }
.avatar-img { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 0; }
.avatar-name { margin-top: 5px; font-size: 12px; color: #000000; text-align: center; line-height: 21px; }
.video-cards { display: flex; flex-direction: column; gap: 21px; }
.video-card { position: relative; width: 334px; }
.video-thumbnail { position: relative; width: 334px; height: 131px; border-radius: 8px; overflow: hidden; margin-bottom: 2px; }
.video-img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
.video-info { display: flex; flex-direction: column; }
.video-title-row { display: flex; align-items: center; justify-content: space-between; }
.video-subtitle-row { display: flex; align-items: center; justify-content: space-between; }
.video-title { font-size: 15px; font-weight: normal; color: #000000; margin: 0; }
.video-subtitle { font-size: 11px; color: #6b6b6b; margin: 0; flex-shrink: 0; }
.video-duration { font-size: 13px; color: #000000; }
.video-rating { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
.rating-label { font-size: 13px; color: #000000; }
.star-icon { width: 15px; height: 14px; }
.rating-score { font-size: 13px; color: #000000; margin-left: 9px; }
</style>
