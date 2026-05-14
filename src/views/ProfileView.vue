<template>
  <div class="profile-view">
    <div class="profile-header">
      <img src="/.figma/image/mp1cw1gf-wj9z3sx.svg" alt="通知" class="notification-icon">
      <img src="/.figma/image/mp1cw1ge-p9080qk.svg" alt="设置" class="settings-icon">
    </div>
    <div class="user-info-card">
      <img src="/.figma/image/mp1cw1ge-jmpez5l.svg" alt="用户头像" class="avatar">
      <div class="user-right">
        <div class="user-info">
          <div class="user-name">{{ profile.displayName }}</div>
          <div class="user-id">用户ID：123456 <img src="/.figma/image/mp1cwmn4-f6o4k4s.svg" alt="复制" class="copy-icon"></div>
          <div class="user-signature">{{ profile.displayBio }} <span class="edit-profile" @click="$router.push('/edit-profile')">修改资料 <img src="/.figma/image/mp1cw1ge-eht9h2m.svg" alt="箭头" class="arrow-icon"></span></div>
        </div>
        <div class="stats-container">
          <div class="stat-item"><div class="stat-number">12</div><div class="stat-label">打卡天数</div></div>
          <div class="stat-item"><div class="stat-number">3</div><div class="stat-label">已学流派</div></div>
        </div>
      </div>
    </div>
    <div class="activity-feed">
      <div class="activity-item" @click="$router.push('/activity-detail')">
        <div class="activity-header">
          <img src="/.figma/image/mp1cwmnb-b5ohopn.svg" alt="头像" class="activity-avatar">
          <div class="activity-meta"><div class="activity-name">{{ profile.displayName }}</div><div class="activity-time">今天 10:13</div></div>
          <img src="/.figma/image/mp1cwmnd-0pukdj7.svg" alt="更多" class="more-icon">
        </div>
        <div class="activity-content">
          <p class="activity-text">今天完成了《武当太极十三势》的第二次练习。</p>
          <div class="video-preview"><img src="/.figma/image/mp1cw1gf-m8nbqdn.svg" alt="播放" class="play-icon"><div class="video-info"><div class="video-title">Twinkle Twinkle Little Star</div><div class="video-author">Jane Taylor</div></div></div>
          <div class="activity-actions">
            <img src="/.figma/image/mp1cwmnl-vpatwck.svg" alt="评论" class="action-icon">
            <img src="/.figma/image/mp1cwmnq-rik8il0.svg" alt="点赞" class="action-icon">
            <img src="/.figma/image/mp1cwmo0-x45igbf.svg" alt="分享" class="action-icon">
          </div>
          <div class="activity-comments">
            <div class="comment"><span class="comment-author">杨氏太极爱好者：</span>打的很好，继续加油！</div>
            <div class="comment"><span class="comment-author">用户A：</span><img src="/.figma/image/mp1cwmhn-44nch9b.png" alt="表情" class="emoji"></div>
          </div>
        </div>
      </div>
      <div class="activity-item">
        <div class="activity-header">
          <img src="/.figma/image/mp1cwmnb-b5ohopn.svg" alt="头像" class="activity-avatar">
          <div class="activity-meta"><div class="activity-name">{{ profile.displayName }}</div><div class="activity-time">今天 7:56</div></div>
          <img src="/.figma/image/mp1cwmnd-0pukdj7.svg" alt="更多" class="more-icon">
        </div>
        <div class="activity-content"><p class="activity-text">今日打卡12天</p><div class="video-preview"><img src="/.figma/image/mp1cw1gf-m8nbqdn.svg" alt="播放" class="play-icon"><div class="video-info"><div class="video-title">Twinkle Twinkle Little Star</div><div class="video-author">Jane Taylor</div></div></div></div>
      </div>
    </div>
    <div class="floating-edit">
      <div class="edit-button-float" @click="$router.push('/publish')">
        <div class="edit-icon-float"><img src="/.figma/image/mp12nar1-x1z64ik.svg" alt="编辑"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profile } from '@/store/profile.js'
</script>

<style scoped>
.profile-view { width: 100%; height: 100%; background: #ffffff; position: relative; overflow-y: auto; padding-bottom: 60px; }
.profile-header { display: flex; justify-content: flex-end; padding: 10px 15px; background: rgb(218, 240, 208); position: sticky; top: 0; z-index: 10; }
.notification-icon, .settings-icon { width: 36px; height: 36px; margin-left: 15px; }
.user-info-card { background: #ffffff; border: 1px solid #daf0d0; border-radius: 8px; margin: 15px; padding: 20px; display: flex; align-items: flex-start; position: relative; height: 200px; }
.avatar { width: 72px; height: 72px; border-radius: 50%; margin-right: 15px; }
.user-right { display: flex; flex-direction: column; flex: 1; }
.user-name { font-size: 24px; font-weight: 700; color: #424242; margin-bottom: 5px; }
.user-id { font-size: 14px; color: #6b6b6b; margin-bottom: 5px; display: flex; align-items: center; }
.copy-icon { width: 14px; height: 14px; margin-left: 5px; }
.user-signature { font-size: 14px; color: #000000; position: absolute; }
.edit-profile { font-size: 14px; color: #006b57; position: absolute; left: 125px; white-space: nowrap; cursor: pointer; }
.arrow-icon { width: 20px; height: 20px; margin-left: 5px; }
.stats-container { display: flex; justify-content: space-between; position: absolute; left: 42px; top: 122px; width: 250px; }
.stat-item { display: flex; flex-direction: column; align-items: center; }
.stat-number { font-size: 32px; font-weight: bold; color: #000000; margin-bottom: 5px; }
.stat-label { font-size: 14px; color: #6b6b6b; }
.activity-feed { margin: 0 15px; }
.activity-item { background: #ffffff; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); cursor: pointer; }
.activity-header { display: flex; align-items: center; margin-bottom: 10px; }
.activity-avatar { width: 36px; height: 36px; border-radius: 50%; margin-right: 10px; }
.activity-meta { flex-grow: 1; }
.activity-name { font-weight: bold; font-size: 14px; }
.activity-time { font-size: 12px; color: #6b6b6b; }
.more-icon { width: 20px; height: 20px; }
.activity-text { font-size: 14px; margin-bottom: 10px; }
.video-preview { display: flex; align-items: center; background: #ededed; border-radius: 4px; padding: 10px; margin-bottom: 10px; }
.play-icon { width: 40px; height: 40px; margin-right: 10px; }
.video-info { flex-grow: 1; }
.video-title { font-size: 14px; margin-bottom: 5px; }
.video-author { font-size: 12px; color: #6b6b6b; }
.activity-actions { display: flex; justify-content: flex-end; margin-bottom: 10px; }
.action-icon { width: 20px; height: 20px; margin-right: 15px; }
.activity-comments { background: #f5f5f5; border-radius: 4px; padding: 10px; }
.comment { margin-bottom: 5px; font-size: 14px; }
.comment-author { font-weight: bold; margin-right: 5px; }
.emoji { width: 19px; height: 19px; }
.floating-edit { position: sticky; right: 20px; bottom: 20px; z-index: 105; display: flex; align-items: center; justify-content: center; pointer-events: auto; float: right; margin-top: -190px; }
.edit-button-float { width: 70px; height: 70px; border-radius: 50%; background: #daf0d0; border: 1px solid #000000; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); box-sizing: content-box; }
.edit-icon-float { width: 42px; height: 42px; }
.edit-icon-float img { width: 100%; height: 100%; }
@media (max-width: 374px) {
  .floating-edit { right: 10px; bottom: 100px; }
  .edit-button-float { width: 56px; height: 56px; box-sizing: content-box; }
  .edit-icon-float { width: 34px; height: 34px; }
}
</style>
