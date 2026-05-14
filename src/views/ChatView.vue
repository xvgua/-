<template>
  <div class="chat-view">
    <div class="chat-header">
      <div class="back-btn" @click="$router.back()">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M25 30L15 20L25 10" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="chat-title">元元</span>
    </div>

    <div class="chat-messages" ref="messagesContainer">
      <div class="message-item ai">
        <div class="message-bubble ai-bubble">
          <p>Hi，我是元元，陪你一起练习太极的小助手。你提问，我回答，帮你一起消化学到的太极文化OVO</p>
        </div>
      </div>

      <div v-for="(msg, idx) in messages" :key="idx" class="message-item" :class="msg.type">
        <div class="message-bubble" :class="msg.type === 'user' ? 'user-bubble' : 'ai-bubble'">
          <p>{{ msg.text }}</p>
        </div>
      </div>

      <div v-if="aiTyping" class="message-item ai">
        <div class="message-bubble ai-bubble">
          <p>...</p>
        </div>
      </div>
    </div>

    <div class="chat-input-bar">
      <div class="input-wrapper">
        <input
          v-model="inputText"
          class="chat-input"
          placeholder="给元元发消息..."
          @keydown.enter="sendMessage"
        >
      </div>
      <div class="send-btn" @click="sendMessage">
        <img src="/.figma/image/mp2spo6f-9kzv9ac.png" alt="发送" class="send-icon">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const inputText = ref('')
const messages = ref([])
const aiTyping = ref(false)
const messagesContainer = ref(null)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  const text = inputText.value.trim()
  if (!text) return

  messages.value.push({ type: 'user', text })
  inputText.value = ''
  await scrollToBottom()

  aiTyping.value = true
  await scrollToBottom()

  await new Promise(resolve => setTimeout(resolve, 600))
  aiTyping.value = false
  messages.value.push({ type: 'ai', text: '此为预设的AI回复参考' })
  await scrollToBottom()
}
</script>

<style scoped>
.chat-view {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: center;
  border-width: 0px;
  border-style: solid;
  border-color: #000000;
  background: #daf0d0;
  width: 375px;
  height: 48px;
  flex-shrink: 0;
  padding: 3px 166px 3px 2px;
  position: relative;
  z-index: 10;
}

.back-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-title {
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-left: 0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 26px 23px 100px;
  display: flex;
  flex-direction: column;
}

.chat-messages::-webkit-scrollbar {
  display: none;
}

.message-item {
  display: flex;
  margin-bottom: 12px;
}

.message-item.ai {
  justify-content: flex-start;
  margin-right: 84px;
}

.message-item.user {
  justify-content: flex-end;
  margin-left: 84px;
}

.message-bubble {
  padding: 13px 12px 9px;
  border-radius: 20px;
  max-width: 100%;
}

.ai-bubble {
  background: #daf0d0;
  border: 1px solid #006b57;
}

.user-bubble {
  background: #ffffff;
  border: 1px solid #006b57;
}

.message-bubble p {
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin: 0;
  word-break: break-word;
}

.chat-input-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 375px;
  height: 78px;
  background: #daf0d0;
  border-radius: 21px 21px 0 0;
  display: flex;
  align-items: center;
  padding: 14px 17px 28px;
  z-index: 10;
}

.input-wrapper {
  flex: 1;
  border: 1px solid #006b57;
  border-radius: 12px;
  background: #ffffff;
  padding: 5px 17px;
  margin-right: 10px;
}

.chat-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  font-family: inherit;
}

.chat-input::placeholder {
  color: #8f928d;
}

.send-btn {
  width: 33px;
  height: 33px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.send-icon {
  width: 33px;
  height: 33px;
  transform: rotate(90deg);
}
</style>
