<template>
  <div class="home-view">
    <div class="home-header">
      <div class="search-bar" @click="$router.push('/search')">
        <input type="text" readonly placeholder="">
        <div class="search-icon">
          <svg viewBox="0 0 28 28" fill="none">
            <circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/>
            <line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <img src="/.figma/image/mp1cwmnb-b5ohopn.svg" alt="用户" class="search-bar-avatar">
    </div>

    <div class="home-content">
      <div class="banner-section"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd"
           @mousedown="handleMouseDown"
           @mousemove="handleMouseMove"
           @mouseup="handleMouseUp"
           @mouseleave="handleMouseUp">
        <div class="carousel-container">
          <div class="carousel-track"
               :class="{ dragging: isDragging }"
               :style="{ transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))` }">
            <div class="carousel-slide" v-for="(image, index) in bannerImages" :key="index" @click="handleBannerClick">
              <img :src="image" :alt="'Banner ' + (index + 1)">
            </div>
          </div>
        </div>
        <div class="pagination-dots">
          <span v-for="(image, index) in bannerImages" :key="index"
                class="dot" :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"></span>
        </div>
      </div>

      <div class="categories-row">
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp11xonh-q2ak49u.png" alt="Ellipse 2"></div>
          <p class="category-label">陈式</p>
        </div>
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp11xono-ktdpqw5.png" alt="Ellipse 4"></div>
          <p class="category-label">杨式</p>
        </div>
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp11xonk-9fpfp8v.png" alt="Ellipse 3"></div>
          <p class="category-label">吴式</p>
        </div>
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp11xonq-0fk9vux.png" alt="Ellipse 6"></div>
          <p class="category-label">武式</p>
        </div>
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp1cwmnb-b5ohopn.svg" alt="Ellipse 7"></div>
          <p class="category-label">赵式</p>
        </div>
        <div class="category-item">
          <div class="ellipse-avatar"><img src="/.figma/image/mp1cwmnb-b5ohopn.svg" alt="Ellipse 8"></div>
          <p class="category-label">孙式</p>
        </div>
      </div>

      <div class="video-card" v-for="i in 6" :key="i" @click="$router.push('/video-detail')">
        <div class="card-image-wrapper">
          <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-c5m2f7d.png' : '/.figma/image/mp11xoop-thqjq63.png'" alt="视频封面">
        </div>
        <div class="card-info-row">
          <span class="card-title-text">24势简化太极拳</span>
          <span class="duration-badge">44:54</span>
        </div>
        <div class="card-info-rowt">
          <span class="author-name">太极拳人</span>
          <span class="rating-label">评分：</span>
            <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-erplg97.svg' : '/.figma/image/mp11xooo-jf60oo1.svg'" alt="星" class="star-icon">
            <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-erplg97.svg' : '/.figma/image/mp11xooo-jf60oo1.svg'" alt="星" class="star-icon">
            <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-erplg97.svg' : '/.figma/image/mp11xooo-jf60oo1.svg'" alt="星" class="star-icon">
            <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-erplg97.svg' : '/.figma/image/mp11xooo-jf60oo1.svg'" alt="星" class="star-icon">
            <img :src="i % 2 === 0 ? '/.figma/image/mp11xoyx-qmbbtm8.svg' : '/.figma/image/mp11xooo-mhdbdke.svg'" alt="半星" class="star-icon">
          <span class="rating-score">4分</span>
        </div>
      </div>
      <div style="height: 16px;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bannerImages = ref([
  '/.figma/image/mp2wmcpb-0slukmg.png',
  '/.figma/image/mp2wmxiy-6glf9tf.png',
  '/.figma/image/mp2wpuc9-xntlr9x.png',
])

const currentSlide = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const isSwiping = ref(false)
const didDrag = ref(false)
const dragOffset = ref(0)
let autoPlayTimer = null
const AUTO_PLAY_INTERVAL = 3000

const goToSlide = (index) => {
  if (index >= 0 && index < bannerImages.value.length) {
    currentSlide.value = index
    resetAutoPlay()
  }
}

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % bannerImages.value.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + bannerImages.value.length) % bannerImages.value.length }

const startAutoPlay = () => { stopAutoPlay(); autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL) }
const stopAutoPlay = () => { if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null } }
const resetAutoPlay = () => { stopAutoPlay(); startAutoPlay() }

const handleTouchStart = (e) => {
  isDragging.value = true; isSwiping.value = false; didDrag.value = false
  startX.value = e.touches[0].clientX; currentX.value = startX.value
  dragOffset.value = 0
  stopAutoPlay()
}
const handleTouchMove = (e) => {
  if (!isDragging.value) return
  const diffX = Math.abs(e.touches[0].clientX - startX.value)
  const diffY = Math.abs(e.touches[0].clientY - startX.value)
  if (!isSwiping.value && diffX > 10 && diffX > diffY * 1.5) { isSwiping.value = true; didDrag.value = true }
  if (isSwiping.value) { currentX.value = e.touches[0].clientX; dragOffset.value = currentX.value - startX.value }
}
const handleTouchEnd = () => {
  if (!isDragging.value) return
  const diff = currentX.value - startX.value
  if (Math.abs(diff) > 50 && isSwiping.value) { diff > 0 ? prevSlide() : nextSlide() }
  isDragging.value = false; isSwiping.value = false
  dragOffset.value = 0
  startAutoPlay()
}
const handleMouseDown = (e) => {
  isDragging.value = true; isSwiping.value = false; didDrag.value = false
  startX.value = e.clientX; currentX.value = startX.value
  dragOffset.value = 0
  stopAutoPlay()
}
const handleMouseMove = (e) => {
  if (!isDragging.value) return
  const diffX = Math.abs(e.clientX - startX.value)
  const diffY = Math.abs(e.clientY - startX.value)
  if (!isSwiping.value && diffX > 10 && diffX > diffY * 1.5) { isSwiping.value = true; didDrag.value = true }
  if (isSwiping.value) { currentX.value = e.clientX; dragOffset.value = currentX.value - startX.value }
}
const handleMouseUp = () => {
  if (!isDragging.value) return
  const diff = currentX.value - startX.value
  if (Math.abs(diff) > 50 && isSwiping.value) { diff > 0 ? prevSlide() : nextSlide() }
  isDragging.value = false; isSwiping.value = false
  dragOffset.value = 0
  startAutoPlay()
}

const handleBannerClick = () => { if (!didDrag.value) router.push('/activity') }

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())
</script>

<style scoped>
.home-view { width: 100%; height: 100%; display: flex; flex-direction: column; }
.home-header { width: 100%; height: 51px; background: #DAF0D0; flex-shrink: 0; position: relative; z-index: 20; display: flex; align-items: flex-start; padding-top: 8px; }
.search-bar { width: 306px; height: 34px; background: #E1F0DA; border: 1px solid #898989; border-radius: 5px; margin-left: 30px; display: flex; align-items: center; padding: 0 10px; position: relative; cursor: pointer; }
.search-bar input { flex: 1; border: none; background: transparent; font-size: 12px; font-weight: 400; color: #6B6B6B; outline: none; line-height: 1; }
.search-icon { width: 26px; height: 26px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.search-icon svg { width: 20px; height: 20px; }
.search-bar-avatar { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; flex-shrink: 0; margin-left: 8px; margin-top: 2px; }
.home-content { flex: 1; overflow-y: auto; overflow-x: hidden; position: relative; z-index: 10; padding: 0 13px 100px; -webkit-overflow-scrolling: touch; }
.home-content::-webkit-scrollbar { display: none; }
.banner-section { margin-top: 0; position: relative; width: 375px; height: 273px; margin-left: -13px; overflow: hidden; }
.carousel-container { width: 100%; height: 100%; position: relative; touch-action: pan-y; user-select: none; -webkit-user-select: none; }
.carousel-track { display: flex; height: 100%; transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); will-change: transform; }
.carousel-track.dragging { transition: none; }
.carousel-slide { min-width: 100%; height: 100%; position: relative; }
.carousel-slide img { width: 100%; height: 100%; object-fit: cover; border: 1px solid #000000; filter: drop-shadow(0px 4px 4px #00000040); }
.pagination-dots { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); z-index: 15; display: flex; align-items: center; gap: 8px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.5); transition: all 0.3s ease; cursor: pointer; }
.dot.active { background: #FFFFFF; transform: scale(1.2); }
.categories-row { display: flex; justify-content: flex-start; gap: 15px; margin-top: 16px; padding: 0 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.categories-row::-webkit-scrollbar { display: none; }
.category-item { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; width: 70px; }
.category-label { font-size: 12px; color: #000000; line-height: 1; margin: 0; }
.ellipse-avatar { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; overflow: hidden; }
.ellipse-avatar img { width: 100%; height: 100%; object-fit: cover; }
.video-card { display: flex; flex-direction: column; align-items: flex-start; width: 334px; height: 165px; margin-top: 16px; margin-left: 50%; transform: translateX(-50%); cursor: pointer; }
.card-image-wrapper { position: relative; width: 334px; height: 131px; }
.card-image-wrapper img { position: absolute; top: 0; left: 0; border-radius: 8px; width: 334px; height: 131px; object-fit: cover; }
.duration-badge { margin-left: auto; width: 39px; height: 16px; letter-spacing: 0; color: #000000; font-size: 13px; flex-shrink: 0; }
.card-info-row { display: flex; align-items: center; align-self: stretch; margin-top: 3px; padding-right: 0; padding-left: 1px; }
.card-info-rowt { display: flex; align-items: center; align-self: stretch; margin-top: 3px; padding-right: 0; padding-left: 1px; }
.card-title-text { width: 122px; height: 18px; letter-spacing: 0; color: #000000; font-size: 15px; line-height: 18px; }
.rating-label { margin: 0px 0px 0px 51px; width: 39px; height: 15px; letter-spacing: 0; color: #000000; font-size: 13px; line-height: 15px; }
.star-icon { margin-left: 3px; width: 15px; height: 14px; }
.rating-score { margin: 0px 0px 0px 9px; width: 22px; letter-spacing: 0; color: #000000; font-size: 13px; line-height: 15px; }
.author-name { margin-right: auto; height: 12px; letter-spacing: 0; color: #6b6b6b; font-size: 11px; line-height: 12px; flex-shrink: 0; }
@media (max-width: 374px) {
  .search-bar { margin-left: 16px; width: calc(100% - 60px); max-width: 306px; }
  .banner-section { width: 100%; margin-left: 0; }
  .video-card { width: calc(100% - 26px); }
  .card-image-wrapper, .card-image-wrapper img { width: 100%; }
  .ellipse-avatar { width: 60px; height: 60px; }
}
</style>
