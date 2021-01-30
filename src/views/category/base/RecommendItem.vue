<template>
  <div class="item">
    <router-link to="/" class="a-img">
      <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="新加坡最新房产资讯" />
    </router-link>
    <router-link to="/" tag="h3">新加坡Hilltops山领域奢华高端公寓</router-link>
    <div class="price">$3600<i>/月</i></div>
  </div>
</template>
<style scoped lang="less">
.item {
  margin-top: 20px;
  h3 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .price {
    margin-top: 8px;
    font-size: 16px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 12px;
    }
  }
}
</style>