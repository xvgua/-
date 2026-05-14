<template>
  <div class="video-view">
    <div class="discover-header">
      <div class="header-left">
        <div class="message-icon" @click="$router.push('/chat')">
          <img src="/.figma/image/mp12mt87-flbrbeg.svg" alt="消息">
        </div>
      </div>
      <div class="tab-nav">
        <div class="tab-item" :class="{ active: activeTab === 'follow' }" @click="switchFollow">关注</div>
        <div class="tab-item" :class="{ active: activeTab === 'discover' }" @click="activeTab = 'discover'">发现</div>
        <div class="tab-item" :class="{ active: activeTab === 'official' }" @click="switchOfficial">官方</div>
      </div>
      <div class="header-right">
        <div class="search-icon-btn">
          <svg viewBox="0 0 28 28" fill="none">
            <circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/>
            <line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="discover-content">
      <div class="card-grid">
        <div class="discover-card">
          <div class="card-image"><img src="/.figma/image/mp12mt8a-d9fzoqu.png" alt="数据统计"></div>
          <div class="card-info"><div class="card-title">今日分享</div><div class="card-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp12mt87-ymumdd7.svg" alt="头像"></div><span class="username">用户1</span></div></div>
        </div>
        <div class="discover-card">
          <div class="card-image"><img src="/.figma/image/mp12mt8a-1fspoci.png" alt="太极拳动作"></div>
          <div class="card-info"><div class="card-title">感觉今天又进...</div><div class="card-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp12mt87-ymumdd7.svg" alt="头像"></div><span class="username">用户2</span></div></div>
        </div>
        <div class="discover-card">
          <div class="card-image"><img src="/.figma/image/mp12napm-xsxstvr.png" alt="太极教学"></div>
          <div class="card-info"><div class="card-title">新式功法！</div><div class="card-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp12mt87-ymumdd7.svg" alt="头像"></div><span class="username">用户3</span></div></div>
        </div>
        <div class="discover-card">
          <div class="card-image"><img src="/.figma/image/mp12napp-8mc9k6m.png" alt="夕阳风景"></div>
          <div class="card-info"><div class="card-title">咕咕嘎嘎</div><div class="card-user-row"><div class="user-avatar-small"><img src="/.figma/image/mp12mt87-ymumdd7.svg" alt="头像"></div><span class="username">高松灯</span></div></div>
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
const activeTab = ref('discover')
const switchFollow = () => router.push('/video-follow')
const switchOfficial = () => router.push('/video-official')
</script>

<style scoped>
.video-view { width: 100%; height: 100%; display: flex; flex-direction: column; }
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
.discover-content { flex: 1; overflow-y: auto; overflow-x: hidden; position: relative; z-index: 10; padding: 29px 16px 100px; -webkit-overflow-scrolling: touch; }
.discover-content::-webkit-scrollbar { display: none; }
.card-grid { display: grid; grid-template-columns: repeat(2, 145px); gap: 19px 14px; justify-content: space-between; }
.discover-card { display: flex; flex-direction: column; position: relative; }
.card-image { width: 145px; height: 189px; border-radius: 3px; object-fit: cover; position: relative; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; }
.card-info { display: flex; flex-direction: column; align-items: flex-start; margin-top: 8px; position: relative; flex: 1; justify-content: space-between; }
.card-title { font-size: 24px; font-weight: 600; line-height: 29px; letter-spacing: -0.48px; color: var(--sds-color-text-default-default); }
.card-user-row { display: flex; align-items: center; gap: 4px; }
.user-avatar-small { width: 24px; height: 24px; border-radius: 50%; overflow: hidden; }
.user-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
.username { font-size: 20px; line-height: 24px; letter-spacing: 0; color: var(--sds-color-text-default-secondary); }
.floating-edit { position: sticky; right: 15px; bottom: 20px; z-index: 105; display: flex; align-items: center; justify-content: center; pointer-events: auto; float: right; margin-top: -190px; }
.edit-button-float { width: 70px; height: 70px; border-radius: 50%; background: #daf0d0; border: 1px solid #000000; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.edit-icon-float { width: 42px; height: 42px; }
.edit-icon-float img { width: 100%; height: 100%; }
@media (max-width: 374px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); gap: 16px 10px; }
  .card-image { width: 100%; height: auto; aspect-ratio: 145 / 189; }
  .floating-edit { right: 10px; bottom: 100px; }
  .edit-button-float { width: 56px; height: 56px; }
  .edit-icon-float { width: 34px; height: 34px; }
}
</style>
