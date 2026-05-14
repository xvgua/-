<template>
  <nav class="bottom-nav" v-show="!hideNav">
    <div class="nav-item" @click="$router.push('/')">
      <div class="nav-icon">
        <img src="/.figma/image/mp11xoo1-fmanmju.svg" alt="Home">
      </div>
      <span :class="['nav-label', $route.path === '/' ? 'text-black' : 'text-gray']">首页</span>
    </div>
    <div class="nav-item" @click="$router.push('/video')">
      <div class="nav-icon">
        <img src="/.figma/image/mp11xoo5-soglovx.svg" alt="Film">
      </div>
      <span :class="['nav-label', $route.path.startsWith('/video') ? 'text-black' : 'text-gray']">视频</span>
    </div>
    <div class="nav-practice" @click="$router.push('/practice')" v-show="$route.path !== '/video-practice'">
      <div class="practice-circle">
        <div class="practice-label">现在<br>练习</div>
      </div>
    </div>
    <div class="nav-item" @click="$router.push('/favorites')">
      <div class="nav-icon">
        <img src="/.figma/image/mp11xonx-bhhijka.svg" alt="Feather">
      </div>
      <span :class="['nav-label', $route.path.startsWith('/favorites') || $route.path.startsWith('/user-detail') ? 'text-black' : 'text-gray']">收藏</span>
    </div>
    <div class="nav-item" @click="$router.push('/profile')">
      <div class="nav-icon">
        <img src="/.figma/image/mp11xoo6-bcoav9d.svg" alt="User">
      </div>
      <span :class="['nav-label', $route.path.startsWith('/profile') || $route.path.startsWith('/activity') ? 'text-black' : 'text-gray']">我的</span>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hideRoutes = ['/video-practice', '/edit-profile']
const hideNav = computed(() => hideRoutes.includes(route.path))
</script>

<style scoped>
.bottom-nav {
  width: 100%;
  height: 61px;
  background: #DAF0D0;
  outline: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  cursor: pointer;
  padding: 4px 10px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.nav-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.nav-icon img {
  width: 40px;
  height: 40px;
}
.nav-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  margin-top: 1px;
  letter-spacing: 0;
}
.text-gray { color: #6B6B6B; }
.text-black { color: #000000; }

.nav-practice {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: -17px;
}

.practice-circle {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background: rgb(218, 222, 208);
  border: 1px solid #A4A4A4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.practice-label {
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  line-height: 1.44;
  white-space: pre-line;
  letter-spacing: 0;
}

@media (max-width: 374px) {
  .nav-icon { width: 32px; height: 32px; }
  .nav-icon img { width: 32px; height: 32px; }
  .nav-label { font-size: 11px; }
}
</style>
