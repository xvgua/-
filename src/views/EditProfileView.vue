<template>
  <div class="edit-profile-view">
    <div class="ep-header">
      <div class="ep-back-btn" @click="$router.push('/profile')">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M25 10L15 20L25 30" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="ep-title">编辑资料</span>
    </div>

    <div class="ep-avatar-section">
      <div class="ep-avatar-wrapper">
        <img src="/.figma/image/mp1cw1ge-jmpez5l.svg" alt="头像" class="ep-avatar">
        <div class="ep-camera-badge">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10.5 8.5C10.5 8.76522 10.3946 9.01957 10.2071 9.20711C10.0196 9.39464 9.76522 9.5 9.5 9.5H2.5C2.23478 9.5 1.98043 9.39464 1.79289 9.20711C1.60536 9.01957 1.5 8.76522 1.5 8.5V3.5C1.5 3.23478 1.60536 2.98043 1.79289 2.79289C1.98043 2.60536 2.23478 2.5 2.5 2.5H4L5 1H7L8 2.5H9.5C9.76522 2.5 10.0196 2.60536 10.2071 2.79289C10.3946 2.98043 10.5 3.23478 10.5 3.5V8.5Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 7.5C7.10457 7.5 8 6.60457 8 5.5C8 4.39543 7.10457 3.5 6 3.5C4.89543 3.5 4 4.39543 4 5.5C4 6.60457 4.89543 7.5 6 7.5Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="ep-info-card">
      <div class="ep-info-row">
        <span class="ep-label">名字</span>
        <span v-if="!editingName" class="ep-value ep-clickable" @click="startEditName">{{ displayName }}</span>
        <input
          v-else
          ref="nameInput"
          v-model="displayName"
          class="ep-input"
          @blur="editingName = false"
          @keydown.enter="editingName = false"
        >
      </div>
      <div class="ep-divider"></div>
      <div class="ep-info-row">
        <span class="ep-label">用户ID</span>
        <span class="ep-value">123456</span>
        <div class="ep-copy-btn" @click="copyId">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9.33333 0.25H2.33333C1.83333 0.25 1.41667 0.666667 1.41667 1.16667V9.66667H2.33333V1.16667H9.33333V0.25ZM11.1667 2.08333H4.16667C3.66667 2.08333 3.25 2.5 3.25 3V11.5C3.25 12 3.66667 12.4167 4.16667 12.4167H11.1667C11.6667 12.4167 12.0833 12 12.0833 11.5V3C12.0833 2.5 11.6667 2.08333 11.1667 2.08333ZM11.1667 11.5H4.16667V3H11.1667V11.5Z" fill="#1E1E1E"/>
          </svg>
        </div>
      </div>
      <div class="ep-divider"></div>
      <div class="ep-info-row ep-info-row-last">
        <span class="ep-label">简介</span>
        <span v-if="!editingBio" class="ep-value ep-clickable" @click="startEditBio">{{ displayBio }}</span>
        <input
          v-else
          ref="bioInput"
          v-model="displayBio"
          class="ep-input"
          @blur="editingBio = false"
          @keydown.enter="editingBio = false"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, toRef } from 'vue'
import { useRouter } from 'vue-router'
import { profile } from '@/store/profile.js'

const router = useRouter()

const displayName = toRef(profile, 'displayName')
const displayBio = toRef(profile, 'displayBio')
const editingName = ref(false)
const editingBio = ref(false)
const nameInput = ref(null)
const bioInput = ref(null)

const startEditName = async () => {
  editingName.value = true
  await nextTick()
  nameInput.value?.focus()
  nameInput.value?.select()
}
const startEditBio = async () => {
  editingBio.value = true
  await nextTick()
  bioInput.value?.focus()
  bioInput.value?.select()
}

const copyId = () => {
  navigator.clipboard?.writeText('123456')
  alert('已复制用户ID')
}
</script>

<style scoped>
.edit-profile-view {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
}

.ep-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(218, 240, 208);
  width: 375px;
  height: 51px;
  flex-shrink: 0;
  position: relative;
}

.ep-back-btn {
  position: absolute;
  left: 2px;
  top: 3px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ep-title {
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-left: 0;
}

.ep-avatar-section {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}

.ep-avatar-wrapper {
  position: relative;
  width: 72px;
  height: 72px;
}

.ep-avatar {
  border-radius: 50%;
  width: 72px;
  height: 72px;
  object-fit: cover;
}

.ep-camera-badge {
  position: absolute;
  right: -3px;
  bottom: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #d9d9d9;
  padding: 4px;
  width: 20px;
  height: 20px;
}

.ep-info-card {
  margin: 14px 22px 0;
  border: 1px solid #87b9b0;
  border-radius: 8px;
  background: #ffffff;
  padding: 7px 11px 9px 13px;
}

.ep-info-row {
  display: flex;
  align-items: center;
  padding: 6px 0;
}

.ep-info-row-last {
  padding-bottom: 4px;
}

.ep-label {
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  font-family: "Roboto Mono", sans-serif;
  flex-shrink: 0;
}

.ep-value {
  margin-left: 40px;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.ep-clickable {
  cursor: pointer;
  border-bottom: 1px dashed transparent;
  transition: border-color 0.2s;
}

.ep-clickable:hover {
  border-bottom-color: #87b9b0;
}

.ep-input {
  margin-left: 40px;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  border: none;
  border-bottom: 1px solid #87b9b0;
  outline: none;
  background: transparent;
  padding: 0;
  width: 120px;
  font-family: inherit;
}

.ep-info-row:last-child .ep-value {
  margin-left: 40px;
}

.ep-divider {
  background: #87b9b0;
  width: 330px;
  height: 1px;
  margin-left: -13px;
}

.ep-copy-btn {
  margin-left: auto;
  margin-right: 0;
  width: 14px;
  height: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
