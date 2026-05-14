<template>
  <div class="activity-view">
    <div class="activity-header">
      <img src="/.figma/image/mp53h8h5-pzdulmv.svg" alt="返回" class="back-icon" @click="$router.push('/')">
      <span class="header-title">太极活动</span>
    </div>

    <img src="/.figma/image/mp53h8h9-z61f944.png" alt="活动图" class="banner-img">

    <div class="card-list">
      <div class="activity-card">
        <img src="/.figma/image/mp53h8h9-s2u8dpc.png" alt="活动A" class="card-img">
        <span class="card-title">活动——活动A</span>
      </div>

      <div class="activity-card">
        <img src="/.figma/image/mp53hjs0-452xpb1.png" alt="活动B" class="card-img">
      </div>
    </div>

  </div>
</template>

<style scoped>
.activity-view {
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}

.activity-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #daf0d0;
  padding: 4px 0;
  min-width: 375px;
  height: 48px;
  position: relative;
}

.back-icon {
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.header-title {
  line-height: 22px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 18px;
}

.banner-img {
  width: 375px;
  height: 273px;
  object-fit: cover;
  display: block;
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-top: 28px;
  padding: 0 21px 153px;
}

.activity-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 334px;
}

.card-img {
  border-radius: 8px;
  width: 334px;
  height: 131px;
  object-fit: cover;
}

.card-title {
  margin: 6px 0 0;
  width: 122px;
  height: 18px;
  letter-spacing: 0;
  color: #000000;
  font-family: Inter, "PingFang SC", sans-serif;
  font-size: 15px;
}
</style>
