<template>
  <div class="activity-detail-view">
    <div class="detail-header">
      <img src="/.figma/image/mp1yrhyo-oc5wqtd.svg" alt="返回" class="back-icon" @click="$router.back()">
      <span class="header-title">详情</span>
      <img src="/.figma/image/mp1yrhyo-qyj07g8.svg" alt="更多" class="more-icon">
    </div>
    <div class="detail-user-info">
      <img src="/.figma/image/mp1yrhyo-rcoaql1.svg" alt="用户头像" class="detail-avatar">
      <div class="detail-user-meta"><div class="detail-username">{{ profile.displayName }}</div><div class="detail-time">今天 10:13</div></div>
      <span class="checkin-days">· 坚持打卡第12天</span>
    </div>
    <div class="detail-content">
      <p class="detail-text">今天完成了《武当太极十三势》的第二次练习。<br><br>刚开始练习"起势"和"云手"时，动作总是有些僵硬，尤其是重心转换的时候，身体容易前倾。跟着视频反复练了几遍后，感觉呼吸和动作逐渐能配合起来了。<br><br>这次平台的 AI 动作识别也给了我一些提醒，比如手臂抬起角度偏低、转身时膝盖方向不够稳定。虽然评分还不是特别高，但能清楚看到自己哪里做得不标准。<br><br>太极拳看起来动作缓慢，但真正练起来才发现它很讲究身体控制和节奏。继续坚持打卡，希望下次能把动作做得更稳一些。</p>
    </div>
    <div class="detail-images">
      <img src="/.figma/image/mp1yrhyt-g26q3c5.png" alt="图片1" class="detail-image">
      <img src="/.figma/image/mp1yrhyt-8ub4655.png" alt="图片2" class="detail-image">
      <img src="/.figma/image/mp1yrhyt-q82r244.png" alt="图片3" class="detail-image">
    </div>
    <div class="detail-actions">
      <img src="/.figma/image/mp1yrhyo-srg605w.svg" alt="点赞" :class="['action-btn', { liked: isLiked }]" @click="toggleLike">
      <img src="/.figma/image/mp1yrhyo-ng4edxh.svg" alt="评论" class="action-btn">
      <img src="/.figma/image/mp1yrhyo-74eeff4.svg" alt="分享" class="action-btn">
    </div>
    <div class="interaction-stats">
      <div class="stat-row">
        <img src="/.figma/image/mp1yrhyo-srg605w.svg" alt="点赞" :class="['stat-icon-small', { liked: isLiked }]">
        <span class="stat-text"><span class="stat-highlight">{{ isLiked ? profile.displayName + '、陈氏传承人、杨氏太极爱好者、用户A 等13人' : '陈氏传承人、杨氏太极爱好者、用户A 等13人' }}</span> 赞了</span>
      </div>
      <div class="stat-row">
        <img src="/.figma/image/mp1yrhyo-vo0e3vv.svg" alt="转发" class="stat-icon-small">
        <span class="stat-text"><span class="stat-highlight">用户B、用户C等4人</span> 转发了</span>
      </div>
    </div>
    <div class="detail-comments">
      <div class="comment-item" @click="openReply">
        <span class="comment-author">张@李：</span>云手这个动作我也经常做不稳，AI点评很有帮助。
      </div>
      <div v-for="(reply, i) in replies" :key="i" class="reply-item">
        <span class="reply-author">{{ reply.author }}：</span>{{ reply.content }}
      </div>
      <div class="reply-box" v-if="showReplyBox">
        <div class="reply-input-area">
          <input type="text" v-model="replyContent" class="reply-input" placeholder="输入回复内容...">
          <button @click="submitReply" class="send-btn">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { profile } from '@/store/profile.js'
const isLiked = ref(false)
const toggleLike = () => { isLiked.value = !isLiked.value }
const showReplyBox = ref(false)
const replyContent = ref('')
const replies = ref([])
const openReply = () => { showReplyBox.value = true; replyContent.value = '' }
const submitReply = () => {
  if (replyContent.value.trim()) {
    replies.value.push({ author: '我', content: replyContent.value.trim() })
    showReplyBox.value = false; replyContent.value = ''
  } else { alert('请输入回复内容') }
}
</script>

<style scoped>
.activity-detail-view { width: 100%; height: 100%; background: #ffffff; position: relative; overflow-y: auto; }
.detail-header { display: flex; align-items: center; justify-content: space-between; background: #daf0d0; padding: 8px; position: sticky; top: 0; z-index: 10; width: 375px; }
.back-icon { width: 40px; height: 40px; cursor: pointer; }
.header-title { font-size: 20px; font-weight: normal; color: #000000; margin-left: 118px; line-height: 28px; white-space: nowrap; width: 100px; height: 30px; box-sizing: content-box; }
.more-icon { width: 33px; height: 33px; margin-left: 128px; }
.detail-user-info { display: flex; align-items: flex-start; justify-content: space-between; margin-top: 8px; padding: 0 12px 0 12px; padding-right: 103px; width: 375px; }
.detail-avatar { border-radius: 100px; width: 52px; height: 52px; }
.detail-user-meta { display: flex; flex-direction: column; align-items: flex-start; }
.detail-username { font-size: 20px; font-weight: 700; line-height: 24px; letter-spacing: -0.4px; color: #42424299; border-bottom: 1px solid #f2f2f7; border-radius: 4px 4px 0 0; padding: 4px 12px 3px; display: flex; align-items: center; justify-content: center; white-space: nowrap; }
.detail-time { font-size: 12px; color: #6b6b6b; line-height: 17px; margin-top: 6px; margin-left: 10px; white-space: nowrap; }
.checkin-days { font-size: 12px; color: #6b6b6b; margin-top: 35px; width: 130px; height: 21px; }
.detail-content { margin: 6px 0 0 15px; padding: 0 10px; }
.detail-text { font-size: 15px; line-height: 21px; color: #000000; width: 331px; }
.detail-images { display: flex; align-items: center; margin-top: 46px; padding: 0 17px 0 25px; gap: 8px; width: 375px; }
.detail-image { width: 104px; height: 104px; object-fit: cover; border-radius: 4px; }
.detail-actions { display: flex; align-items: center; justify-content: flex-end; margin-top: 10px; padding: 0 17px 0 20px; gap: 15px; }
.action-btn { width: 20px; height: 20px; cursor: pointer; transition: filter 0.2s; }
.action-btn.liked { filter: brightness(0); }
.interaction-stats { padding: 8px 20px; border-bottom: 1px solid #f0f0f0; }
.stat-row { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.stat-icon-small { width: 16px; height: 16px; transition: filter 0.2s; }
.stat-icon-small.liked { filter: brightness(0); }
.stat-text { font-size: 12px; color: #6b6b6b; }
.stat-highlight { font-weight: bold; color: #333; }
.detail-comments { padding: 10px 20px 100px; }
.comment-item { padding: 8px 0; border-bottom: 1px solid #f0f0f0; cursor: pointer; font-size: 14px; }
.comment-author, .reply-author { font-weight: bold; margin-right: 4px; }
.reply-item { padding: 6px 0 6px 20px; font-size: 14px; border-bottom: 1px solid #f0f0f0; }
.reply-box { position: relative; margin-top: 8px; }
.reply-input-area { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; padding: 8px 0; }
.reply-input { flex: 1; border: 1px solid #ddd; border-radius: 20px; padding: 6px 12px; font-size: 14px; outline: none; }
.send-btn { background: #006b57; color: #fff; border: none; border-radius: 20px; padding: 6px 16px; font-size: 14px; cursor: pointer; }
</style>
