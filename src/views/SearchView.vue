<template>
  <div class="search-view">
    <div class="search-header">
      <img src="/.figma/image/mp249fp7-cwinwl5.svg" alt="返回" class="back-btn" @click="$router.push('/')">
      <div class="search-input-wrapper">
        <input type="text" v-model="query" @input="onInput" autofocus class="search-input">
        <div class="search-icon-right" @click="goToResult">
          <svg viewBox="0 0 28 28" fill="none"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
      </div>
    </div>
    <div class="search-content" v-if="query">
      <div class="search-result-item" v-for="(item, i) in results" :key="i">
        <div class="search-icon-left">
          <svg viewBox="0 0 28 28" fill="none"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
        <p class="result-text"><span v-for="(seg, s) in item.segments" :key="s" :class="seg.highlight ? 'highlight-text' : ''">{{ seg.text }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const query = ref('')
const results = ref([
  { segments: [{ text: '武氏太极', highlight: true }, { text: '拳', highlight: false }] },
  { segments: [{ text: '武氏太极', highlight: true }, { text: '拳姚继祖', highlight: false }] },
  { segments: [{ text: '武氏极', highlight: true }, { text: '十三剑', highlight: false }] },
  { segments: [{ text: '吴', highlight: false }, { text: '氏太极', highlight: true }, { text: '拳', highlight: false }] },
  { segments: [{ text: '武氏太极拳', highlight: true }, { text: '26式', highlight: false }] },
  { segments: [{ text: '武氏太极拳', highlight: true }, { text: '初学入门教学', highlight: false }] },
  { segments: [{ text: '武氏太极拳', highlight: true }, { text: '地方协会', highlight: false }] },
])
const onInput = () => {}
const goToResult = () => { if (query.value.trim()) router.push('/search-result') }
</script>

<style scoped>
.search-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; }
.search-header { display: flex; align-items: center; padding: 8px 16px 0 18px; background: #DAF0D0; height: 51px; position: sticky; top: 0; z-index: 10; }
.back-btn { width: 40px; height: 40px; cursor: pointer; flex-shrink: 0; }
.search-input-wrapper { width: 264px; height: 31px; margin-left: 20px; position: relative; display: flex; align-items: center; border: 1px solid #898989; border-radius: 5px; background: #e1f0da; padding: 6px 11px 6px 10px; overflow: hidden; }
.search-input { flex: 1; border: none; background: transparent; font-size: 14px; outline: none; color: #1E1E1E; padding-right: 28px; }
.search-icon-right { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; cursor: pointer; }
.search-icon-right svg { width: 20px; height: 20px; }
.search-content { flex: 1; overflow-y: auto; padding: 8px 20px; }
.search-result-item { display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px solid #eee; }
.search-icon-left { width: 20px; height: 20px; flex-shrink: 0; }
.search-icon-left svg { width: 20px; height: 20px; }
.result-text { font-size: 14px; color: #000; }
.highlight-text { color: #ff6600; font-weight: bold; }
</style>
