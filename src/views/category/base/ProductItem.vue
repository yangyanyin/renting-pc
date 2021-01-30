<template>
  <div class="item">
    <router-link to="/" class="a-img">
      <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="新加坡最新房产资讯" />
    </router-link>
    <router-link to="/" tag="h3">新加坡Hilltops山领域奢华高端公寓 <i>公寓</i></router-link>
    <p class="traffic">交通：
      <i>NS20 诺维娜</i> 
      <i>NS20 诺维娜</i>
    </p>
    <p class="address">地址：勿洛水池路 waterfront isle</p>
    <p class="type">1卧室+书房 89㎡</p>
    <ul class="label">
      <li>公寓</li>
      <li>精装修</li>
      <li>核心地段</li>
      <li>交通便利</li>
      <li>允许贷款</li>
    </ul>
    <div class="price">$3600<i>/月</i></div>
  </div>
</template>
<style scoped lang="less">
.item {
  position: relative;
  height: 200px;
  margin-top: 20px;
  padding: 0 0 20px 345px;
  border-bottom: 1px solid #C9C9C9;
  .price {
    position: absolute;
    top: 80px;
    right: 0;
    font-size: 24px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 16px;
    }
  }
  .a-img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 320px;
    height: 180px;
    overflow: hidden;
  }
  h3 {
    padding-top: 5px;
    font-size: 17px;
    cursor: pointer;
    i {
      display: inline-block;
      position: relative;
      top: -2px;
      width: 32px;
      margin-left: 10px;
      line-height: 18px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: #24A10F;
      border-radius: 2px;
    }
  }
  p {
    font-size: 12px;
    margin-top: 20px;
    &.type {
      margin-top: 13px;
      color: #7C7C7C;
    }
    &.traffic {
      i {
        display: inline-block;
        height: 20px;
        margin: 0 5px;
        padding: 0 10px;
        line-height: 20px;
        color: #fff;
        background: #E12129;
        border-radius: 90px;
      }
    }
  }
  ul.label {
    margin-top: 10px;
    li {
      display: inline-block;
      height: 24px;
      margin-right: 12px;
      padding: 0 8px;
      font-size: 12px;
      line-height: 24px;
      color: #7C7C7C;
      background: #F5F5F5;
      border-radius: 2px;
    }
  } 
}
</style>