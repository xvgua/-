<template>
  <div class="vd-frame">
    <div class="vd-video-area">
      <img :src="detailVideoSrc" alt="视频" class="vd-video-img">
      <div class="vd-back-btn" @click="$router.back()">
        <svg viewBox="0 0 40 40" fill="none"><path d="M25 10L15 20L25 30" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="vd-audio-ctrl" @click="togglePlay">
        <svg v-if="!isPlaying" viewBox="0 0 48 48" fill="none"><path d="M16 12L36 24L16 36V12Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg v-else viewBox="0 0 48 48" fill="none"><rect x="14" y="12" width="6" height="24" rx="2" fill="#1E1E1E"/><rect x="28" y="12" width="6" height="24" rx="2" fill="#1E1E1E"/></svg>
      </div>
      <div class="vd-top-actions">
        <svg class="vd-star-icon" :class="{ 'vd-starred': isStarred }" @click="toggleStar" viewBox="0 0 30 30" fill="none">
          <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="vd-book-icon" :class="{ 'vd-book-filled': isInfoOpen }" @click="openVideoInfo" viewBox="0 0 30 30" fill="none">
          <path d="M5 24.375C5 23.5462 5.32924 22.7513 5.91529 22.1653C6.50134 21.5792 7.2962 21.25 8.125 21.25H25M5 24.375C5 25.2038 5.32924 25.9987 5.91529 26.5847C6.50134 27.1708 7.2962 27.5 8.125 27.5H25V2.5H8.125C7.2962 2.5 6.50134 2.82924 5.91529 3.41529C5.32924 4.00134 5 4.7962 5 5.625V24.375Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="vd-progress-bar">
        <div class="vd-progress-fill" :style="{ width: (currentPage / 13 * 100) + '%' }"></div>
      </div>
    </div>

    <div class="vd-title-banner" v-if="!isCommentOpen">
      <span class="vd-banner-text">动作拆解</span>
    </div>

    <div class="vd-content" v-if="!isCommentOpen">
      <div class="vd-main-row">
        <div class="vd-figure-col">
          <img :src="detailFigureSrc" alt="动作" class="vd-figure-img">
          <span class="vd-page-num">{{ currentPage }}/13</span>
        </div>
        <button class="vd-practice-btn" @click="$router.push('/video-practice')">练习</button>
      </div>

      <div class="vd-arrow-row">
        <svg class="vd-arrow-left" @click="prevPage" viewBox="0 0 24 24" fill="none"><path d="M15 4L7 12L15 20" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="vd-arrow-right" @click="nextPage" viewBox="0 0 24 24" fill="none"><path d="M9 4L17 12L9 20" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>

      <div class="vd-comments-header">
        <span class="vd-comments-title">评论</span>
        <div class="vd-comment-input-box" @click="openComment"></div>
      </div>

      <div class="vd-comment-items" v-for="(c, i) in commentPages[0]" :key="i">
        <div class="vd-comment-row">
          <img src="/.figma/image/mp25jhz4-vq4wtc5.png" alt="头像" class="vd-comment-avatar">
          <span class="vd-comment-name">{{ c.name }}</span>
        </div>
        <div class="vd-comment-bubble">{{ c.comment }}</div>
      </div>

    </div>

    <div class="vd-comment-form" v-if="isCommentOpen">
      <div class="vd-form-header">
        <span class="vd-comments-title">评论</span>
        <img src="/.figma/image/mp3v7j4t-0gqoelb.svg" alt="关闭" class="vd-form-close-btn" @click="closeComment">
      </div>
      <div class="vd-form-slot">
        <textarea
          v-model="newComment"
          class="vd-form-textarea"
          placeholder="写下你的评论..."
          rows="3"
        ></textarea>
        <button class="vd-form-send-btn" @click="sendComment">发送</button>
      </div>
    </div>

  <Teleport to="body">
    <div v-if="isInfoOpen" class="vd-info-overlay" @click.self="closeVideoInfo">
      <div class="vd-info-panel">
        <div class="vd-info-header">
          <img src="/.figma/image/mp3w72hs-78shkw0.svg" alt="头像" class="vd-info-avatar">
          <div class="vd-info-meta">
            <span class="vd-info-name">太极拳人</span>
            <span class="vd-info-subtitle">太极拳全精通！全部都会厉害吧</span>
          </div>
          <img src="/.figma/image/mp3w72hs-a1y45cf.svg" alt="关闭" class="vd-info-close" @click="closeVideoInfo">
        </div>
        <button class="vd-info-follow-btn">关注</button>
        <span class="vd-info-label">视频简介：</span>
        <p class="vd-info-text">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介。。。。。。。。。。。。</p>
        <div class="vd-info-rating">
          <span class="vd-info-rating-label">评分：</span>
          <img src="/.figma/image/mp3w72hs-4ts1v0l.svg" alt="星" class="vd-info-star">
          <img src="/.figma/image/mp3w72hs-vt3s0un.svg" alt="星" class="vd-info-star">
          <img src="/.figma/image/mp3w72hs-4ts1v0l.svg" alt="星" class="vd-info-star">
          <img src="/.figma/image/mp3w72hs-4ts1v0l.svg" alt="星" class="vd-info-star">
          <img src="/.figma/image/mp3w72hs-z1vytjk.svg" alt="星" class="vd-info-star">
          <span class="vd-info-score">4分</span>
        </div>
      </div>
    </div>
  </Teleport>
</div>
</template>

<script setup>
import { ref, reactive, computed, onUnmounted } from 'vue'

const currentPage = ref(1)
const isPlaying = ref(false)
const isStarred = ref(false)
const isDetailStep = ref(false)
const isCommentOpen = ref(false)
const isInfoOpen = ref(false)
const newComment = ref('')
const detailVideoSrc = computed(() => isDetailStep.value ? '/.figma/image/mp3t6n1m-yagbssi.png' : '/.figma/image/mp3r27oe-3zheg6h.png')
const detailFigureSrc = computed(() => isDetailStep.value ? '/.figma/image/mp3tg4yo-w6aykqt.png' : '/.figma/image/mp3r27oe-3zheg6h.png')

let autoPlayTimer = null
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    autoPlayTimer = setInterval(() => {
      if (currentPage.value < 13) {
        currentPage.value++
        isDetailStep.value = !isDetailStep.value
      } else {
        isPlaying.value = false
        clearInterval(autoPlayTimer)
        autoPlayTimer = null
      }
    }, 1000)
  } else {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}
const toggleStar = () => { isStarred.value = !isStarred.value }
const toggleDetailStep = () => { isDetailStep.value = !isDetailStep.value }
const openComment = () => { isCommentOpen.value = true }
const closeComment = () => { isCommentOpen.value = false }
const sendComment = () => {
  const text = newComment.value.trim()
  if (!text) return
  commentPages[0].unshift({ name: '我', comment: text })
  newComment.value = ''
  isCommentOpen.value = false
}
const openVideoInfo = () => { isInfoOpen.value = true }
const closeVideoInfo = () => { isInfoOpen.value = false }
const prevPage = () => { if (currentPage.value > 1) { currentPage.value--; isDetailStep.value = !isDetailStep.value } }
const nextPage = () => { if (currentPage.value < 13) { currentPage.value++; isDetailStep.value = !isDetailStep.value } }

const commentPages = reactive([
  [
    { name: '张三', comment: '动作讲解非常细致，特别是手部动作。' },
    { name: '李四', comment: '这个动作拆解很实用，跟着练了两遍感觉进步很大！' },
    { name: '王五', comment: '太极拳看起来慢，但细节真的好多，感谢分享。' },
    { name: '赵六', comment: '每天坚持打卡，希望能把起势和云手练得更稳。' },
    { name: '陈七', comment: 'AI动作识别很准，手臂角度提醒帮了大忙。' },
  ],
])
onUnmounted(() => {
  clearInterval(autoPlayTimer)
})
</script>

<style scoped>
.vd-frame {
  width: 100%;
  height: 100%;
  position: relative;
  background: #ffffff;
  overflow-y: auto;
}

.vd-video-area {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 375px;
  height: 219px;
  flex-shrink: 0;
}

.vd-video-img {
  width: 375px;
  height: 219px;
  object-fit: cover;
  display: block;
  z-index:50
}

.vd-back-btn {
  position: absolute;
  top: 3px;
  left: 0;
  z-index: 3;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.vd-back-btn svg {
  width: 40px;
  height: 40px;
}

.vd-top-actions {
  position: absolute;
  top: 3px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 3;
}

.vd-star-icon,
.vd-book-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.vd-star-icon path {
  fill: none;
  transition: fill 0.2s ease;
}

.vd-star-icon.vd-starred path {
  fill: #FFD700;
}

.vd-book-icon path {
  fill: none;
  transition: fill 0.2s ease;
}

.vd-book-filled path {
  fill: #1E1E1E;
}

.vd-audio-ctrl {
  position: absolute;
  top: 180px;
  left: 15px;
  width: 30px;
  height: 10px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.vd-audio-ctrl svg {
  width: 48px;
  height: 48px;
  margin-left: -9px;
  margin-top: -9px;
}

.vd-progress-bar {
  position: absolute;
  bottom: 15px;
  left: 48px;
  width: 279px;
  height: 6px;
  background: #888888;
}

.vd-progress-fill {
  height: 100%;
  background: #4da59f;
}

.vd-title-banner {
  width: 375px;
  height: 78px;
  opacity: 0.65;
  border-radius: 30px;
  background: #daf0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -27px;
  position: relative;
  z-index: 0;
}

.vd-banner-text {
  padding-top: 20px;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 1.2px;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
}

.vd-content {
  width: 375px;
  background: #ffffff;
  padding: 0 12px 80px 12px;
  position: relative;
}

.vd-main-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 73px;
  padding-right: 0;
}

.vd-figure-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vd-figure-img {
  width: 199px;
  height: 160px;
  object-fit: cover;
}

.vd-page-num {
  margin: 6px 0 0 79px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0;
  color: #000000;
}

.vd-practice-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  margin-top: 157px;
  border: 1px solid #4da59f;
  border-radius: 8px;
  background: #4da59f;
  padding: 1px;
  width: 54px;
  height: 29px;
  font-size: 16px;
  line-clamp: 1;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
}

.vd-arrow-row {
  position: absolute;
  top: 69px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  pointer-events: none;
}

.vd-arrow-left,
.vd-arrow-right {
  width: 24px;
  height: 24px;
  cursor: pointer;
  pointer-events: auto;
}

.vd-comments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-left: 0;
  padding-right: 11px;
}

.vd-comments-title {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  color: #000000;
}

.vd-comment-input-box {
  border: 1px solid #006b57;
  border-radius: 12px;
  background: #ffffff;
  width: 303px;
  height: 36px;
  cursor: pointer;
}

.vd-comment-items {
  margin-top: 22px;
  padding-right: 11px;
  padding-left: 2px;
}

.vd-comment-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4px;
  width: 35px;
}

.vd-comment-avatar {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.vd-comment-name {
  margin-top: 3px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0;
  color: #000000;
}

.vd-comment-bubble {
  border: 1px solid #006b57;
  border-radius: 12px;
  background: #ffffff;
  padding: 10px 14px;
  font-size: 14px;
  color: #000000;
  min-height: 36px;
  width: 303px;
  margin-left: 37px;
  margin-top: -60px;
}

.vd-comment-form {
  background: #ffffff;
  padding: 0 12px 80px 12px;
  position: relative;
}

.vd-form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.vd-form-close-btn {
  width: 23px;
  height: 24px;
  cursor: pointer;
}

.vd-form-slot {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid #006b57;
  border-radius: 8px;
  background: #ffffff;
  margin-top: 12px;
  padding: 8px 8px 12px 8px;
}

.vd-form-textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  background: transparent;
  min-height: 250px;
}

.vd-form-textarea::placeholder {
  color: #999999;
}

.vd-form-send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4da59f;
  border-radius: 8px;
  background: #4da59f;
  padding: 1px;
  width: 52px;
  height: 29px;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  font-family: Inter, "PingFang SC", sans-serif;
  margin-top: 8px;
}
</style>

<style>
.vd-info-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.vd-info-panel {
  width: 320px;
  border: 1px solid #006b57;
  border-radius: 8px;
  background: #ffffff;
  padding: 0 1px 36px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 300px;
  max-height: 90vh;
  overflow-y: auto;
}

.vd-info-header {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding-right: 0;
  padding-left: 2px;
}

.vd-info-avatar {
  margin-top: 10px;
  border-radius: 100px;
  width: 36px;
  height: 36px;
}

.vd-info-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-top: 8px;
  margin-left: 7px;
  flex: 1;
}

.vd-info-name {
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 14px;
}

.vd-info-subtitle {
  display: inline-flex;
  align-items: flex-start;
  align-self: stretch;
  margin-top: 1px;
  background: #ffffff;
  line-height: 17px;
  letter-spacing: 0;
  color: #6b6b6b;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 12px;
}

.vd-info-close {
  margin-left: auto;
  width: 23px;
  height: 24px;
  cursor: pointer;
}

.vd-info-follow-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  margin-top: 2px;
  margin-left: 226px;
  border: 1px solid #4da59f;
  border-radius: 8px;
  background: #4da59f;
  padding: 1px;
  width: 54px;
  height: 29px;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  font-family: Inter, "PingFang SC", sans-serif;
}

.vd-info-label {
  margin: 6px 0 0;
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 14px;
}

.vd-info-text {
  margin: 9px 0 0;
  width: 292px;
  height: 200px;
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 14px;
  overflow-y: auto;
}

.vd-info-rating {
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-top: 30px;
  margin-bottom: 5px;
}

.vd-info-rating-label {
  width: 70px;
  height: 20px;
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 14px;
}

.vd-info-star {
  margin-left: 5px;
  width: 25px;
  height: 24px;
}

.vd-info-star:first-of-type {
  margin-left: 12px;
}

.vd-info-score {
  margin: 0 0 0 17px;
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 14px;
}
</style>
