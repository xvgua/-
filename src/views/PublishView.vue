<template>
  <div class="publish-view">
    <div class="back-button" @click="$router.back()">
      <img src="/.figma/image/mp13pqd9-7cz6skg.svg" alt="返回">
    </div>
    <div class="publish-toolbar">
      <button class="publish-submit-btn" @click="submitPublish">发表</button>
    </div>
    <div class="publish-content-area">
      <textarea v-model="content" placeholder="记录今日的努力..." class="publish-textarea" rows="8" maxlength="500"></textarea>
      <div class="media-upload-box" @click="showTip">
        <img src="/.figma/image/mp13pqdw-sikrdch.svg" alt="相机" class="camera-icon">
        <span class="upload-text">图片/视频</span>
      </div>
    </div>
    <div class="publish-actions">
      <button class="action-btn" @click="$router.push('/contact')">@好友</button>
      <button class="action-btn action-btn-location">添加定位 <img src="/.figma/image/mp13pqdv-6epq1yz.svg" alt="定位" class="location-icon"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const content = ref('')

onMounted(() => {
  const atQuery = route.query.at
  if (atQuery) {
    content.value = content.value ? content.value + ' ' + atQuery : atQuery
    router.replace({ query: {} })
  }
})

const showTip = () => alert('该功能将在真实项目中实现')
const submitPublish = () => {
  if (content.value.trim()) { alert('发表成功！'); content.value = ''; router.back() }
  else { alert('请输入内容后再发表') }
}
</script>

<style scoped>
.publish-view { width: 100%; height: 100%; background: #ffffff; position: relative; display: flex; flex-direction: column; padding-bottom: 287px; }
.back-button { position: absolute; top: -1px; left: -5px; width: 40px; height: 40px; cursor: pointer; z-index: 30; display: flex; align-items: center; justify-content: center; }
.back-button img { width: 40px; height: 40px; }
.publish-toolbar { display: flex; align-items: center; justify-content: flex-end; background: #daf0d0; text-align: justify; padding: 6px 12px 6px 268px; min-width: 375px; height: 48px; position: relative; z-index: 20; }
.publish-submit-btn { display: flex; align-items: center; justify-content: center; border: 1px solid rgb(107, 114, 128); border-radius: 8px; background: rgb(218, 240, 208); padding: 11px; width: auto; height: auto; font-size: 16px; line-height: 16px; color: #000000; cursor: pointer; overflow: hidden; box-sizing: content-box; }
.publish-content-area { position: relative; margin-top: 12px; margin-left: 15px; width: 342px; height: 277px; border-radius: 8px; border: 1px solid rgb(107, 114, 128); }
.publish-textarea { width: 330px; height: 100%; border: 0px solid #000000; border-radius: 8px; outline: none; resize: none; font-size: 16px; line-height: 22px; color: #767676; background: transparent; padding: 11px 15px 14px 15px; box-sizing: border-box; }
.publish-textarea::placeholder { color: #767676; }
.media-upload-box { position: absolute; bottom: 14px; left: 3px; width: 70px; height: 70px; border-radius: 9px; border: 1px solid rgb(218, 240, 208); background: transparent; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 19px 16px 21px 15px; cursor: pointer; }
.media-upload-box:hover { background: #f5f5f5; }
.camera-icon { width: 27px; height: 27px; margin-bottom: 4px; }
.upload-text { font-size: 12px; line-height: 17px; color: #767676; white-space: nowrap; }
.publish-actions { display: flex; align-items: center; justify-content: flex-start; margin-top: 14px; padding-left: 15px; gap: 16px; }
.action-btn { display: flex; align-items: center; justify-content: center; border: 1px solid rgb(107, 114, 128); border-radius: 8px; background: rgb(218, 240, 208); padding: 0; font-size: 16px; line-height: 16px; color: #000000; cursor: pointer; overflow: hidden; }
.action-btn:first-child { width: 70px; height: 29px; }
.action-btn-location { width: 113px; height: 29px; position: relative; padding-left: 28px; }
.location-icon { position: absolute; top: 2px; left: 6px; width: 21px; height: 21px; }
</style>
