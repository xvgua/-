<template>
  <div class="follow-view">
    <div class="discover-header">
      <div class="header-left">
        <div class="message-icon" @click="$router.push('/chat')"><img src="/.figma/image/mp13gil8-eb1a5ga.svg" alt="消息"></div>
      </div>
      <div class="tab-nav">
        <div class="tab-item" :class="{ active: activeTab === 'follow' }" @click="activeTab = 'follow'">关注</div>
        <div class="tab-item" :class="{ active: activeTab === 'discover' }" @click="switchDiscover">发现</div>
        <div class="tab-item" :class="{ active: activeTab === 'official' }" @click="switchOfficial">官方</div>
      </div>
      <div class="header-right">
        <div class="search-icon-btn"><svg viewBox="0 0 28 28" fill="none"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
      </div>
    </div>
    <div class="follow-content">
      <div class="follow-card-list">
        <div class="follow-card-wrapper"><div class="follow-card-image"><img src="/.figma/image/mp13gbc7-ua6feft.png" alt="太极七掌"></div><div class="follow-card-info"><div class="follow-title">一起健身！</div><div class="follow-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp13gila-6a60jr5.svg" alt="头像"></div><span class="username">野人节</span></div></div></div>
        <div class="follow-card-wrapper"><div class="follow-card-image"><img src="/.figma/image/mp13gbc7-j72brh4.png" alt="联动图标"></div><div class="follow-card-info"><div class="follow-title">恭迎联动！</div><div class="follow-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp13gila-nv0zfr9.svg" alt="头像"></div><span class="username">ave母鸡卡</span></div></div></div>
        <div class="follow-card-wrapper"><div class="follow-card-image"><img src="/.figma/image/mp13gil0-gyb4kdp.png" alt="太极拳"></div><div class="follow-card-info"><div class="follow-title">打完半条命...</div><div class="follow-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp13gil9-ykwvego.svg" alt="头像"></div><span class="username">睡觉练太极</span></div></div></div>
        <div class="follow-card-wrapper">
          <div class="follow-card-image"><img src="/.figma/image/mp13gil0-4qvgshr.svg" alt="运动打卡"></div>
          <div class="follow-card-info"><div class="follow-title">打卡运动第...</div><div class="follow-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp13gile-u0kw2na.svg" alt="头像"></div><span class="username">我不是香蕉</span></div></div>
        </div>
      </div>
      <div class="floating-edit">
        <div class="edit-button-float" @click="$router.push('/publish')">
          <div class="edit-icon-float"><img src="/.figma/image/mp12nar1-x1z64ik.svg" alt="编辑"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeTab = ref('follow')
const switchDiscover = () => router.push('/video')
const switchOfficial = () => router.push('/video-official')
</script>

<style scoped>
.follow-view { width: 100%; height: 100%; display: flex; flex-direction: column; }
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
.follow-content { flex: 1; overflow-y: auto; overflow-x: hidden; position: relative; z-index: 10; padding: 29px 16px 100px; -webkit-overflow-scrolling: touch; }
.follow-content::-webkit-scrollbar { display: none; }
.follow-card-list { display: grid; grid-template-columns: repeat(2, 148px); gap: 19px 14px; justify-content: space-between; }
.follow-card-wrapper { position: relative; width: 148px; display: flex; flex-direction: column; }
.follow-card-image { width: 148px; height: 188px; border-radius: 3px; overflow: hidden; position: relative; }
.follow-card-image img { width: 100%; height: 100%; object-fit: cover; }
.floating-edit { position: sticky; right: 15px; bottom: 20px; z-index: 105; display: flex; align-items: center; justify-content: center; pointer-events: auto; float: right; margin-top: -190px; }
.edit-button-float { width: 70px; height: 70px; border-radius: 50%; background: #daf0d0; border: 1px solid #000000; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.edit-icon-float { width: 42px; height: 42px; }
.follow-card-info { display: inline-flex; flex-direction: column; align-items: flex-start; margin-top: 8px; row-gap: 8px; position: relative; }
.follow-title { font-size: 24px; font-weight: 600; line-height: 29px; letter-spacing: -0.48px; }
.follow-user-row { display: flex; align-items: center; gap: 4px; }
.user-avatar-small { width: 24px; height: 24px; border-radius: 50%; overflow: hidden; }
.user-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
.username { font-size: 20px; line-height: 24px; letter-spacing: 0; }
</style>
