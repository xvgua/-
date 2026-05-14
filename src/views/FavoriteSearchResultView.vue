<template>
  <div class="fsr-view">
    <div class="fsr-scroll-area">
      <div class="fsr-header-spacer"></div>
      <div class="fsr-main-content">
        <div v-if="showSlot" class="fsr-slot-card">
          <div class="fsr-slot-avatar-item">
            <div class="fsr-slot-avatar"></div>
            <p class="fsr-slot-name">张氏</p>
          </div>
        </div>
        <div class="fsr-video-card">
          <div class="fsr-card-img-wrap">
            <img src="/.figma/image/mp2uylwu-yl166dx.png" alt="视频" class="fsr-card-img">
          </div>
          <div class="fsr-card-info">
            <div class="fsr-video-info-left">
              <div class="fsr-video-title-row">
                <h3 class="fsr-video-title">张氏太极拳</h3>
                <span class="fsr-duration-time">50:57</span>
              </div>
              <div class="fsr-video-subtitle-row">
                <p class="fsr-video-subtitle">张氏太极继承人</p>
                <div class="fsr-rating-section">
                  <span class="fsr-rating-label">评分：</span>
                  <img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="fsr-star">
                  <img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="fsr-star">
                  <img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="fsr-star">
                  <img src="/.figma/image/mp25jhz4-anpgmb7.svg" alt="星" class="fsr-star">
                  <img src="/.figma/image/mp25jhxs-ltf9mxh.svg" alt="星" class="fsr-star">
                  <span class="fsr-duration-score">4分</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fsr-header-fixed">
      <div class="fsr-header-bar">
        <img src="/.figma/image/mp2uylwn-upidlm4.svg" class="fsr-back-btn" @click="$router.back()">
        <div class="fsr-search-box">
          <p class="fsr-search-text">张氏</p>
          <div class="fsr-search-svg">
            <svg viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="6" stroke="#1E1E1E" stroke-width="2"/><line x1="13" y1="13" x2="18" y2="18" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
        </div>
      </div>
      <img src="/.figma/image/mp2uylwm-8fopnrt.svg" class="fsr-more-icon" @click="toggleDots">
    </div>

    <div class="fsr-bottom-nav">
      <img src="/.figma/image/mp2uylwn-dg3uoz6.svg" class="fsr-nav-icon-home">
      <img src="/.figma/image/mp2uylwn-i00k0u4.svg" class="fsr-nav-icon-film">
      <img src="/.figma/image/mp2uylwn-4iddo7o.svg" class="fsr-nav-icon-feather">
      <img src="/.figma/image/mp2uylwn-ogd9ymg.svg" class="fsr-nav-icon-user">
    </div>

    <div class="fsr-nav-labels">
      <span class="fsr-label-gray">&nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span class="fsr-label-gray">视频&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span class="fsr-label-dark">收藏</span>
      <span class="fsr-label-gray">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的</span>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const showSlot = ref(true)
const toggleDots = () => { showSlot.value = !showSlot.value }
</script>

<style scoped>
.fsr-view {
  position: relative;
  width: 375px;
  height: 100%;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
}

.fsr-scroll-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 667px;
  overflow-y: auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 79px 11px 312px 13px;
}

.fsr-scroll-area::-webkit-scrollbar { display: none; }

.fsr-header-spacer { height: 0; }

.fsr-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

.fsr-slot-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 15px;
  overflow: hidden;
  width: 350px;
}

.fsr-slot-avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}

.fsr-slot-avatar {
  border: 1px solid #87b9b0;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-image: url(/.figma/image/mp2uylwu-454cklm.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #d9d9d9;
}

.fsr-slot-name {
  margin-top: 5px;
  font-size: 12px;
  line-height: 21px;
  color: #000000;
}

.fsr-video-card {
  display: flex;
  flex-direction: column;
  margin: 12px 18px 0 23px;
  border-radius: 8px;
  width: 334px;
}

.fsr-card-img-wrap {
  position: relative;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
}

.fsr-card-img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  display: block;
}

.fsr-card-info {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}

.fsr-video-info-left {
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
}

.fsr-video-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fsr-video-subtitle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fsr-video-title {
  font-size: 15px;
  line-height: 20px;
  color: #000000;
  margin: 0;
}

.fsr-duration-time {
  font-size: 13px;
  color: #000000;
}

.fsr-video-subtitle {
  font-size: 12px;
  line-height: 16px;
  color: #6b6b6b;
  margin: 0;
  flex-shrink: 0;
}

.fsr-rating-section {
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
}

.fsr-rating-label {
  font-size: 13px;
  color: #000000;
}

.fsr-star {
  width: 15px;
  height: 14px;
}

.fsr-duration-score {
  font-size: 13px;
  color: #000000;
}

.fsr-header-fixed {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  z-index: 10;
}

.fsr-header-bar {
  display: flex;
  align-items: center;
  padding: 8px 16px 0 18px;
  background: #DAF0D0;
  height: 51px;
}

.fsr-back-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  flex-shrink: 0;
}

.fsr-search-box {
  flex: 1;
  margin-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #898989;
  border-radius: 5px;
  background: #e1f0da;
  padding: 6px 11px 6px 10px;
  overflow: hidden;
  height: auto;
  min-height: 34px;
}

.fsr-search-text {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  color: #1E1E1E;
  padding-right: 28px;
  margin: 0;
  line-height: 1.4;
}

.fsr-search-svg {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fsr-search-svg svg { width: 20px; height: 20px; }

.fsr-more-icon {
  position: absolute;
  top: 42px;
  left: 163px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.fsr-bottom-nav {
  display: flex;
  position: absolute;
  top: 606px;
  left: -2px;
  align-items: flex-start;
  outline: 1px solid #000000;
  outline-offset: -1px;
  background: #daf0d0;
  padding: 3px 32px 17px 17px;
  width: 384px;
  height: 61px;
  z-index: 4;
}

.fsr-nav-icon-home { width: 40px; height: 40px; }
.fsr-nav-icon-film { margin-left: 20px; width: 40px; height: 40px; }
.fsr-nav-icon-feather { margin-left: 135px; width: 40px; height: 40px; }
.fsr-nav-icon-user { margin-top: 1px; margin-left: 20px; width: 40px; height: 40px; }

.fsr-nav-labels {
  position: absolute;
  top: 650px;
  left: 10px;
  width: 346px;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  z-index: 3;
}

.fsr-label-gray { color: #6b6b6b; }
.fsr-label-dark { color: #1e1e1e; }
</style>
