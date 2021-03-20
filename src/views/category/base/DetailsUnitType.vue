<template>
  <div class="unit-type">
    <h3 class="other-t">户型介绍</h3>
    <div class="item" v-for="(item, k) in houseTypes" :key="k">
      <i class="a-img">
        <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" :alt="item.type" />
      </i>
      <i tag="h3">{{ item.type }}</i>
      <p>参考均价：<i>{{ item.average_price }}</i>/㎡</p>
      <p>参考总价：<i> {{ item.price }} </i>/套</p>
      <span>{{ item.area }}</span>
    </div>
    <strong>免责声明</strong>
    <em>页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。</em>
  </div>
</template>
<script>
export default {
  props: {
    houseTypes: Array
  }
}
</script>
<style lang="less" scoped>
.unit-type {
  .item {
    position: relative;
    height: 126px;
    margin-top: 20px;
    padding-left: 253px;
    .a-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 225px;
      height: 126px;
      overflow: hidden;
    }
    h3 {
      padding-top: 22px;
      font-size: 20px;
      cursor: pointer;
    }
    p {
      margin-top: 6px;
      font-size: 12px;
      color: #7C7C7C;
      i {
        color: #BF3F3F;
      }
    }
    span {
      position: absolute;
      right: 0;
      top: 25px;
      font-size: 20px;
      color: #BF3F3F;
    }
  }
  strong {
    display: block;
    margin-top: 40px;
    padding-left: 20px;
    font-weight: bold;
    color: #7C7C7C;
    background: url('../../../assets/image/disclaimer-icon.png') no-repeat left center;
    background-size: 12px;
  }
  em {
    display: block;
    margin-top: 8px;
    color: #7C7C7C;
    font-size: 12px;
  }
}
</style>