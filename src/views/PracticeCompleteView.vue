<template>
  <div class="complete-view">
    <div class="header-area">
      <div class="top-bar">
        <button class="back-btn" @click="$router.back()"><img src="/.figma/image/mp1aztwg-byo904l.svg" alt="返回"></button>
        <div class="user-info-section"><div class="user-tab"><span class="user-name">林悦</span></div><span class="date">2026/3/31</span></div>
        <button class="share-btn" @click="$router.push('/practice-share')"><img src="/.figma/image/mp1aztxb-smuye9g.svg" alt="分享"></button>
      </div>
      <p class="prompt-text">完成了对《xxx太极拳教程》的<br>一次练习！给这次的练习一个评价吧！</p>
      <div class="rating-stars">
        <button v-for="(star, i) in 5" :key="i" class="star-btn" @click="setRating(i + 1)">
          <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
            <path d="M18.5741 0.692803C18.7693 0.375296 19.2307 0.375296 19.4259 0.692803L25.029 9.80631C25.1013 9.92398 25.2191 10.0065 25.3544 10.0342L36.1913 12.2574C36.575 12.3361 36.7233 12.8054 36.4546 13.0903L29.0964 20.8919C28.9962 20.9981 28.9475 21.1429 28.963 21.2881L30.0781 31.7223C30.1185 32.1003 29.7391 32.3833 29.3884 32.2369L19.1926 27.9804C19.0694 27.929 18.9306 27.929 18.8074 27.9804L8.61165 32.2369C8.26088 32.3833 7.88146 32.1003 7.92185 31.7223L9.03701 21.2881C9.05253 21.1429 9.00378 20.9981 8.90358 20.8919L1.54542 13.0903C1.2767 12.8054 1.42503 12.3361 1.80868 12.2574L12.6456 10.0342C12.7809 10.0065 12.8987 9.92398 12.971 9.80631L18.5741 0.692803Z" :fill="i < rating ? '#FFD700' : '#D9D9D9'"/>
          </svg>
        </button>
        <span class="rating-score">{{ rating }}分</span>
      </div>
    </div>
    <div class="ai-review-area">
      <div class="ai-review-content">
        <p class="ai-title">AI点评：</p>
        <img src="/.figma/image/mp1awjgx-itdjo39.png" alt="AI点评图" class="ai-image">
        <p class="review-subtitle">动作仍需加强的招式：</p>
        <div class="improve-row"><img src="/.figma/image/mp1awjgx-itdjo39.png" alt="招式图" class="action-thumb"><p class="action-comment">这一招还需要努力：动作还需要更加到位一些才好</p></div>
        <p class="ai-detailed">
          整体动作节奏舒缓匀和，拳架身形端正沉稳，松肩沉胯做得比较到位，招式衔接流畅自然。气息和动作配合协调，心态放松、体态舒展，能看出跟着教程认真练习。稍不足是个别动作架子略偏高，腰腿发力可以再扎实一些，坚持练习会更有太极沉稳内敛的韵味。
        </p>
      </div>
    </div>
    <img src="/.figma/image/mp1aztwj-u3pjp0x.svg" alt="用户头像" class="user-avatar">
  </div>
</template>

<script setup>
import { ref } from 'vue'
const rating = ref(0)
const setRating = (r) => { rating.value = r }
</script>

<style scoped>
.complete-view { width: 100%; height: 100%; background: #ffffff; position: relative; overflow: hidden; }
.header-area { background: #e5f5de; padding: 3px 7px 13px 3px; width: 100%; min-height: 269px; }
.top-bar { display: flex; align-items: flex-start; padding-right: 0; padding-left: 0; margin-bottom: 47px; }
.back-btn { width: 40px; height: 40px; cursor: pointer; background: none; border: none; padding: 0; }
.back-btn img { width: 40px; height: 40px; }
.user-info-section { position: relative; margin-top: 34px; margin-left: 60px; width: 90px; height: 43px; }
.user-tab { display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #f2f2f7; border-radius: 4px 4px 0 0; padding: 4px 12px 3px; width: 90px; height: 43px; }
.user-name { line-height: 29px; letter-spacing: -0.48px; color: #42424299; font-size: 24px; font-weight: 700; }
.date { position: absolute; right: -49px; bottom: -24px; width: 121px; height: 29px; line-height: 29px; letter-spacing: -0.48px; color: #d9d9d9; font-size: 24px; font-weight: 700; }
.share-btn { margin-top: 6px; margin-left: 147px; width: 32px; height: 32px; cursor: pointer; background: none; border: none; padding: 0; }
.share-btn img { width: 32px; height: 32px; }
.prompt-text { margin: 0 0 0 26px; line-height: 29px; color: #000000; font-size: 24px; }
.rating-stars { display: flex; align-items: center; justify-content: space-between; margin: 6px 42px 0 61px; width: calc(100% - 103px); max-width: 266px; height: 36px; }
.star-btn { background: none; border: none; padding: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.rating-score { line-height: 29px; color: #000000; font-size: 24px; }
.ai-review-area { display: flex; align-items: flex-start; border: 1px solid #000000; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width: 100%; height: 380px; overflow-y: auto; position: absolute; top: 287px; left: 0; }
.ai-review-content { display: flex; flex-direction: column; align-items: flex-start; background: #f3f3f3; padding: 15px 23px 76px 22px; width: 100%; }
.ai-title { width: 106px; height: 38px; line-height: 29px; letter-spacing: -0.48px; color: #000000; font-size: 24px; font-weight: 700; }
.ai-image { margin-top: 177px; margin-left: 11px; border-radius: 12px; width: 133px; height: 170px; }
.review-subtitle { margin: 12px 0 0 7px; line-height: 18px; color: #000000; font-size: 15px; }
.improve-row { display: flex; align-items: flex-start; justify-content: space-between; margin-top: 3px; padding-left: 11px; }
.action-thumb { border-radius: 12px; width: 133px; height: 170px; }
.action-comment { margin: 7px 0 0; width: 100%; max-width: 184px; height: 80px; color: #000000; font-size: 15px; }
.ai-detailed { position: absolute; top: 55px; left: 30px; right: 10px; max-width: 319px; height: 270px; line-height: 18px; letter-spacing: -0.3px; color: #000000; font-size: 15px; }
.user-avatar { position: absolute; top: 37px; left: 22px; border-radius: 100px; width: 72px; height: 72px; }
</style>
