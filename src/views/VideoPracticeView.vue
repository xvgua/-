<template>
  <div class="video-practice-view">
    <div v-if="!isZoomed" class="normal-view">
      <div class="top-area">
        <button class="back-button" @click="$router.push('/practice')"><img src="/.figma/image/mp19p0jm-jblpzgi.svg" alt="返回"></button>
        <div class="vps-favorite-btn" :class="{ 'vps-favorited': isFavorited }" @click="toggleFavorite">
          <svg viewBox="0 0 30 30" fill="none">
            <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>    
        <button class="sound-btn" @click="toggleSound">
            <img v-if="!isMuted" src="/.figma/image/mp19qaqt-1du192h.svg" alt="有声音" class="sound-icon">
            <img v-else src="/.figma/image/mp19q1p9-spv9a6g.svg" alt="静音" class="sound-icon">
          </button>
        <div class="stick-figure-area">

          <img v-if="currentScene === 0" src="/.figma/image/mp19p0j1-t5fahwf.png" alt="动作示范1" class="stick-figure">
          <img v-else src="/.figma/image/mp1a3xqz-xbur6rc.png" alt="动作示范2" class="stick-figure">
          
          <button class="expand-btn" @click="isZoomed = true"><img src="/.figma/image/mp1ahh29-knxuw0h.svg" alt="展开"></button>
          <div class="excellent-badge"><span class="excellent-text">{{ currentScene === 0 ? '优秀' : '良好' }}</span></div>
        </div>
      </div>
      <div class="divider-line"></div>
      <div class="bottom-area">
        <div class="video-preview">
          <img v-if="currentScene === 0" src="/.figma/image/mp19p0jo-ecy3qhj.png" alt="练习视频1" class="preview-video">
          <img v-else src="/.figma/image/mp1a41id-3ffig5w.png" alt="练习视频2" class="preview-video">
        </div>
        <div class="playback-controls">
          <button class="control-btn" @click="switchScene"><img src="/.figma/image/mp4vrdw4-ot7oi1h.svg" alt="后退"></button>
          <button class="control-btn" @pointerdown="startLongPress" @pointerup="cancelLongPress" @pointerleave="cancelLongPress" @click="togglePlay">
            <img v-if="isPlaying" src="/.figma/image/mp4vtf9n-cerkzrt.svg" alt="暂停">
            <img v-else src="/.figma/image/mp4vssxc-ycn9f0u.svg" alt="播放">
          </button>
          <button class="control-btn" @click="switchScene"><img src="/.figma/image/mp4vrs1s-iy5raom.svg" alt="前进"></button>
        </div>
      </div>
    </div>

    <div v-else class="zoomed-view">
      <div class="zoomed-top">
        <button class="back-button" @click="$router.push('/practice')"><img src="/.figma/image/mp19p0jm-jblpzgi.svg" alt="返回"></button>
        <button class="collapse-btn" @click="isZoomed = false"><img src="/.figma/image/mp1ak106-eg3h9nk.svg" alt="收起"></button>
        <div class="vps-favorite-btn" :class="{ 'vps-favorited': isFavorited }" @click="toggleFavorite">
          <svg viewBox="0 0 30 30" fill="none">
            <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>    
        <button class="sound-btn" @click="toggleSound">
          <img v-if="!isMuted" src="/.figma/image/mp19qaqt-1du192h.svg" alt="有声音">
          <img v-else src="/.figma/image/mp19q1p9-spv9a6g.svg" alt="静音">
        </button>
      </div>
      <div class="zoomed-image-area">
        <div class="zoomed-image-wrapper">
          <img v-if="currentScene === 0" src="/.figma/image/mp1aicus-pzpgejh.png" alt="放大图1" class="zoomed-image">
          <img v-else src="/.figma/image/mp1ajusr-pujcqv1.png" alt="放大图2" class="zoomed-image">
          <div class="zoomed-badge"><span class="excellent-text">{{ currentScene === 0 ? '优秀' : '良好' }}</span></div>
          
        </div>
      </div>
      <div class="zoomed-controls">
        <button class="control-btn" @click="switchScene"><img src="/.figma/image/mp4vrdw4-ot7oi1h.svg" alt="后退"></button>
        <button class="control-btn" @pointerdown="startLongPress" @pointerup="cancelLongPress" @pointerleave="cancelLongPress" @click="togglePlay">
          <img v-if="isPlaying" src="/.figma/image/mp4vtf9n-cerkzrt.svg" alt="暂停">
          <img v-else src="/.figma/image/mp4vssxc-ycn9f0u.svg" alt="播放">
        </button>
        <button class="control-btn" @click="switchScene"><img src="/.figma/image/mp4vrs1s-iy5raom.svg" alt="前进"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentScene = ref(0)
const isPlaying = ref(true)
const isZoomed = ref(false)
const isMuted = ref(false)
const isFavorited = ref(false)
let autoSwitchTimer = null
let practiceTimer = null
let longPressTimer = null
const SWITCH_INTERVAL = 3000
const PRACTICE_DURATION = 20000
const LONG_PRESS_DURATION = 3000

const startLongPress = () => {
  longPressTimer = setTimeout(() => {
    router.push('/practice-complete')
  }, LONG_PRESS_DURATION)
}
const cancelLongPress = () => {
  if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null }
}

const toggleSound = () => { isMuted.value = !isMuted.value }
const toggleFavorite = () => { isFavorited.value = !isFavorited.value }
const switchScene = () => { currentScene.value = currentScene.value === 0 ? 1 : 0; resetSwitch() }
const togglePlay = () => { isPlaying.value = !isPlaying.value; isPlaying.value ? startSwitch() : stopSwitch() }
const resetSwitch = () => { if (isPlaying.value) { stopSwitch(); startSwitch() } }

const startSwitch = () => { stopSwitch(); autoSwitchTimer = setInterval(() => { currentScene.value = currentScene.value === 0 ? 1 : 0 }, SWITCH_INTERVAL) }
const stopSwitch = () => { if (autoSwitchTimer) { clearInterval(autoSwitchTimer); autoSwitchTimer = null } }

const startTimer = () => { clearTimer(); practiceTimer = setTimeout(() => { router.push('/practice-complete') }, PRACTICE_DURATION) }
const clearTimer = () => { if (practiceTimer) { clearTimeout(practiceTimer); practiceTimer = null } }

onMounted(() => { startSwitch(); startTimer() })
onUnmounted(() => { stopSwitch(); clearTimer(); cancelLongPress() })
</script>

<style scoped>
.video-practice-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.normal-view { width: 100%; height: 100%; display: flex; flex-direction: column; }
.top-area { width: 100%; height: 350px; background: #ffffff; padding: 0 6px 0 167px; position: relative; flex-shrink: 0; }
.back-button { position: absolute; top: 3px; left: -1px; width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; z-index: 10; }
.back-button img { width: 40px; height: 40px; }
.stick-figure-area { position: absolute; top: 40px; left: 33px; right: 8px; height: 322px; }
.vps-favorite-btn { position: absolute; top: 3px; left: 285px; z-index: 10; width: 35px; height: 35px; cursor: pointer; }
.vps-favorite-btn svg { width: 35px; height: 35px; }
.vps-favorite-btn path { fill: none; transition: fill 0.2s ease; }
.vps-favorite-btn.vps-favorited path { fill: #FFD700; }
.stick-figure { width: 100%; max-width: 334px; height: 322px; object-fit: contain; }
.sound-btn { position: absolute; top: 0; right: 0; width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; z-index: 5; }
.sound-icon { width: 40px; height: 40px; }
.expand-btn { position: absolute; bottom: -6px; left: 50%; transform: translateX(-85%); width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; z-index: 205; }
.expand-btn img { width: 40px; height: 40px; }
.excellent-badge { position: absolute; bottom: 40px; right: 22px; display: flex; align-items: center; justify-content: center; border-radius: 100px; background: #e5f5de; padding: 22px 12px; width: 73px; height: 73px; z-index: 5; opacity: 0.6; }
.excellent-text { font-size: 24px; line-height: 29px; color: #000000; }
.divider-line { width: 100%; height: 6px; background: #888888; flex-shrink: 0;z-index: 105; }
.bottom-area { flex: 1; background: #f3f3f3; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 16px; position: relative; }
.video-preview { position: absolute; top: 10px; left: 15px; right: 10px; height: 219px; }
.preview-video { width: 100%; max-width: 350px; height: 219px; object-fit: cover; border-radius: 8px; }
.playback-controls { display: flex; align-items: center; justify-content: space-between; width: 260px;z-index:90 }
.control-btn { background: none; border: none; padding: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.control-btn img { width: 40px; height: 40px; }
.zoomed-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; }
.zoomed-top { width: 100%; padding: 3px 4px 14px 13px; display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; }
.collapse-btn { width: 40px; height: 40px; cursor: pointer;left:50%; transform: translateX(395%); background: none; border: none; padding: 0; margin-top: 3px; }
.collapse-btn img { width: 40px; height: 40px; }
.zoomed-image-area { flex: 1; display: flex; align-items: center; justify-content: center; margin-top: 60px; padding: 0 7px;z-index:300; }
.zoomed-image-wrapper { position: relative; width: 100%; max-width: 361px; height: 462px; }
.zoomed-image { width: 100%; max-width: 361px; height: 462px; border-radius: 12px; object-fit: cover; }
.zoomed-badge { position: absolute; bottom: 40px; right: 22px; display: flex; align-items: center; justify-content: center; border-radius: 100px; background: #e5f5de; padding: 22px 13px; min-width: 73px; min-height: 73px; opacity: 0.6; }
.zoomed-controls { display: flex; align-items: center; justify-content: space-between;width: 260px;margin-left:58px;margin-bottom:16px }
</style>
