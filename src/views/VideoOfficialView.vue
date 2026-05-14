<template>
  <div class="official-view">
    <div class="discover-header">
      <div class="header-left">
        <div class="message-icon"><img src="/.figma/image/mp133xrs-4u7ej34.svg" alt="消息"></div>
      </div>
      <div class="tab-nav">
        <div class="tab-item" :class="{ active: activeTab === 'follow' }" @click="switchFollow">关注</div>
        <div class="tab-item" :class="{ active: activeTab === 'discover' }" @click="switchDiscover">发现</div>
        <div class="tab-item" :class="{ active: activeTab === 'official' }" @click="activeTab = 'official'">官方</div>
      </div>
      <div class="header-right">
        <div class="search-icon-btn"><svg viewBox="0 0 28 28" fill="none"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
      </div>
    </div>
    <div class="official-content">
      <div class="official-card-list">
        <div class="official-card"><div class="official-card-image"><img src="/.figma/image/mp133xrn-5az07y5.png" alt="重要通知"></div><div class="official-card-info"><div class="official-title">通知2025...</div><div class="official-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp133xrt-fp5sjor.svg" alt="官方头像"></div><span class="username">官方</span></div></div></div>
        <div class="official-card"><div class="official-card-image official-card-white"><div class="important-badge"><img src="/.figma/image/mp133xqy-ttwgw2a.png" alt="重要通知"></div></div><div class="official-card-info"><div class="official-title">联动通知</div><div class="official-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp133xrw-2ftj6ql.svg" alt="官方头像"></div><span class="username">官方</span></div></div></div>
        <div class="official-card"><div class="official-card-image"><img src="/.figma/image/mp133xrp-uigo19u.png" alt="公告"></div><div class="official-card-info"><div class="official-title">关于近来...</div><div class="official-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp133xrx-sh7htsh.svg" alt="官方头像"></div><span class="username">官方</span></div></div></div>
        <div class="official-card"><div class="official-card-image"><img src="/.figma/image/mp133xrn-5az07y5.png" alt="通知"></div><div class="official-card-info"><div class="official-title">平台上线通告</div><div class="official-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp133xrt-ix7bmlu.svg" alt="官方头像"></div><span class="username">官方</span></div></div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeTab = ref('official')
const switchFollow = () => router.push('/video-follow')
const switchDiscover = () => router.push('/video')
</script>

<style scoped>
.official-view { width: 100%; height: 100%; display: flex; flex-direction: column; }
.discover-header { width: 100%; height: 51px; background: #ffffff; flex-shrink: 0; position: relative; z-index: 20; display: flex; align-items: center; justify-content: center; padding: 0 14px; }
.header-left { position: absolute; left: 14px; display: flex; align-items: center; }
.message-icon { width: 43px; height: 43px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.message-icon img { width: 43px; height: 43px; }
.tab-nav { display: flex; gap: 2px; }
.tab-item { padding: 4px 12px 3px; font-size: 16px; line-height: 22px; letter-spacing: 0; border-bottom: 1px solid #ceeddf; border-radius: 4px 4px 0 0; cursor: pointer; transition: all 0.3s ease; white-space: nowrap; }
.tab-item.active { color: var(--sds-color-text-neutral-default); border-bottom-color: #006b57; }
.header-right { position: absolute; right: 14px; display: flex; align-items: center; }
.search-icon-btn { width: 26px; height: 26px; padding: 3px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.search-icon-btn svg { width: 20px; height: 20px; }
.official-content { flex: 1; overflow-y: auto; overflow-x: hidden; position: relative; z-index: 10; padding: 29px 16px 100px; -webkit-overflow-scrolling: touch; }
.official-content::-webkit-scrollbar { display: none; }
.official-card-list { display: grid; grid-template-columns: repeat(2, 150px); gap: 19px 14px; justify-content: space-between; }
.official-card { display: flex; flex-direction: column; position: relative; }
.official-card-image { width: 150px; height: 189px; border-radius: 3px; border: 1px solid #000000; overflow: hidden; position: relative; }
.official-card-image img { width: 100%; height: 100%; object-fit: cover; }
.official-card-white { background: #ffffff; display: flex; align-items: center; justify-content: center; }
.important-badge { width: 147px; height: 147px; display: flex; align-items: center; justify-content: center; }
.important-badge img { width: 100%; height: 100%; object-fit: contain; }
.official-card-info { display: inline-flex; flex-direction: column; align-items: flex-start; margin-top: 8px; row-gap: 8px; position: relative; }
.official-title { font-size: 24px; font-weight: 600; line-height: 29px; letter-spacing: -0.48px; }
.official-user-row { display: flex; align-items: center; gap: 4px; }
.user-avatar-small { width: 24px; height: 24px; border-radius: 50%; overflow: hidden; }
.user-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
.username { font-size: 20px; line-height: 24px; letter-spacing: 0; }
</style>
