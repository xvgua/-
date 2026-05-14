<template>
  <div class="screen">
    <div class="page-container" :class="{ 'no-padding': noPaddingRoutes.includes($route.path) }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <BottomNav />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import BottomNav from '@/components/BottomNav.vue'

const route = useRoute()
const noPaddingRoutes = ['/video-practice']
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-container.no-padding {
  padding-bottom: 0;
}
</style>
