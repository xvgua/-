<template>
  <div class="contact-view">
    <div class="contact-toolbar">
      <button class="contact-btn" @click="cancel">取消</button>
      <h2 class="contact-title">选择联系人</h2>
      <button class="contact-btn" @click="complete">完成</button>
    </div>
    <div class="contact-search">
      <input type="text" v-model="searchQuery" class="contact-search-input">
      <svg viewBox="0 0 28 28" fill="none" class="search-icon"><circle cx="12.5" cy="12.5" r="9" stroke="#1E1E1E" stroke-width="2.5"/><line x1="19.5" y1="19.5" x2="25" y2="25" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round"/></svg>
    </div>
    <div class="contact-list">
      <div class="contact-item" v-for="(c, i) in contacts" :key="c.name" v-show="searchQuery === '' || c.name.includes(searchQuery)">
        <label class="contact-checkbox-wrapper">
          <input type="checkbox" :value="i" v-model="selected" class="contact-checkbox">
          <span class="checkbox-circle"></span>
        </label>
        <img :src="c.avatar" alt="头像" class="contact-avatar">
        <span class="contact-name">{{ c.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const searchQuery = ref('')
const selected = ref([])
const contacts = ref([
  { name: '维什戴尔', avatar: '/.figma/image/mp158q72-l2kcow9.png' },
  { name: '冤枉钱', avatar: '/.figma/image/mp158q72-i9f7v65.png' },
  { name: '谢拉格没有不融冰', avatar: '' },
  { name: '卡西米尔不屈砾叠不动', avatar: '' },
  { name: '大炎六个人召唤飞天大区', avatar: '/.figma/image/mp158q72-r14mvdp.png' },
  { name: '叙拉古在很快的刮', avatar: '/.figma/image/mp158q72-jbtlqoh.png' },
  { name: '烛煌哈洛德转职我都笑纳了', avatar: '/.figma/image/mp158q72-tiaikry.png' },
  { name: '电表倒转才是真理！', avatar: '/.figma/image/mp158q72-9vbb4rz.png' },
  { name: '孩子们电表倒转被砍废了', avatar: '/.figma/image/mp158q72-89ebinv.png' },
])
const cancel = () => {
  router.replace({ name: 'publish' })
}
const complete = () => {
  const names = selected.value.map(i => contacts.value[i].name)
  const atText = names.map(n => '@' + n).join(' ')
  router.replace({ name: 'publish', query: atText ? { at: atText } : {} })
}
</script>

<style scoped>
.contact-view { width: 100%; height: 100%; background: #ffffff; display: flex; flex-direction: column; }
.contact-toolbar { display: flex; align-items: center; justify-content: space-between; background: #daf0d0; padding: 9px 18px 8px 15px; min-width: 375px; height: 48px; }
.contact-btn { display: flex; align-items: center; justify-content: center; border: 1px solid rgb(107, 114, 128); border-radius: 8px; background: var(--sds-color-background-brand-default); padding: 11px 1px; width: 54px; height: 29px; font-size: 16px; line-height: 16px; color: var(--sds-color-text-brand-on-brand); cursor: pointer; }
.contact-title { margin: 7px 0 0; line-height: 24px; color: #000000; font-size: 20px; font-weight: normal; }
.contact-search { display: flex; align-items: center; margin: 11px 18px 0 15px; border: 1px solid #898989; border-radius: 5px; background: #daf0d0; padding: 6px 13px; position: relative; }
.contact-search-input { width: 100%; height: 26px; border: none; outline: none; background: transparent; font-size: 16px; }
.search-icon { position: absolute; right: 13px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; }
.contact-list { margin-top: 21px; overflow-y: auto; flex: 1; }
.contact-item { display: flex; align-items: center; padding: 0 18px; gap: 5px; height: 70px; border-bottom: 1px solid #000000; }
.contact-checkbox-wrapper { position: relative; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
.contact-checkbox { position: absolute; opacity: 0; width: 0; height: 0; }
.checkbox-circle { display: block; width: 21px; height: 21px; border: 1px solid #000000; border-radius: 50%; background: #ffffff; transition: all 0.2s ease; }
.contact-checkbox:checked + .checkbox-circle { background: #000000; }
.contact-avatar { margin-left: 5px; border-radius: 25px; width: 50px; height: 50px; object-fit: cover; flex-shrink: 0; background: #d9d9d9; }
.contact-name { margin-left: 12px; color: #000000; font-size: 20px; line-height: 23px; white-space: nowrap; }
</style>
