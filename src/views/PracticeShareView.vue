<template>
  <div class="share-view">
    <div class="toolbar">
      <button class="back-btn" @click="$router.back()"><img src="/.figma/image/mp1cbzju-6ogp8kf.svg" alt="返回"></button>
      <button class="publish-btn" @click="submit"><span class="publish-text">发表</span></button>
    </div>
    <div class="video-preview-section"><div class="preview-box"><p class="preview-label">Video<br>Preview</p><img src="/.figma/image/mp1cbzju-kgc2wku.svg" alt="播放" class="play-icon"></div></div>
    <div class="input-section"><div class="input-wrapper"><textarea v-model="content" class="textarea" placeholder="记录今日的努力..."></textarea></div></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const content = ref('')
const submit = () => { if (content.value.trim()) { alert('发表成功'); router.push('/practice-complete') } else { alert('请输入内容后再发表') } }
</script>

<style scoped>
.share-view { width: 100%; height: 100%; background: #ffffff; position: relative; overflow-y: auto; display: flex; flex-direction: column; }
.toolbar { display: flex; align-items: center; justify-content: space-between; background: #e5f5de; padding: 9px 10px 10px 0; height: 48px; flex-shrink: 0; }
.back-btn { width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; }
.back-btn img { width: 40px; height: 40px; }
.publish-btn { display: flex; align-items: center; justify-content: center; border: 1px solid rgb(43, 92, 75); border-radius: 8px; background: #4da59f; padding: 1px; width: 54px; height: 29px; cursor: pointer; }
.publish-text { line-height: 16px; color: #ffffff; font-size: 16px; }
.video-preview-section { display: flex; justify-content: center; margin-top: 11px; margin-bottom: 12px; }
.preview-box { border-radius: 6px; background: #e7e7e7; width: 199px; height: 263px; position: relative; display: flex; align-items: center; justify-content: center; }
.preview-label { position: absolute; top: 66px; left: 11px; line-height: 67px; color: #000000; font-size: 48px; }
.play-icon { position: absolute; top: 109px; left: 77px; width: 48px; height: 48px; }
.input-section { margin-left: 17px; margin-right: 17px; max-width: 337px; height: 308px; border: 1.5px solid #e5f5de; }
.textarea { width: 100%; max-width: 337px; height: 308px; background: transparent; border: none; outline: none; resize: none; font-size: 16px; line-height: 22px; color: #000000; padding: 5px 7px; }
.textarea::placeholder { color: #767676; }
</style>
