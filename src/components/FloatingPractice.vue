<template>
  <div class="floating-practice" @click="$router.push('/practice')">
    <div class="ellipse-bg">
      <div class="practice-text">现在<br>练习</div>
    </div>
  </div>
</template>

<style scoped>
.floating-practice {
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 95px;
  cursor: pointer;
}
.ellipse-bg {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background: #D9D9D9;
  border: 1px solid #A4A4A4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.practice-text {
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  text-align: center;
  line-height: 1.44;
  white-space: pre-line;
  letter-spacing: 0;
}
</style>
