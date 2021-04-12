<template>
  <div class="housing-info">
    <h3 class="other-t">房屋描述</h3>
    <strong>户型介绍</strong>
    <p>{{introduction}}</p>

    <strong>周边配套</strong>
    <p v-html="facilities"></p>
    <strong>小区介绍</strong>
    <span v-for="(name, k) in community" :key="k">{{name}}</span>

    <strong>租金</strong>
    <p>付款方式：{{payType}}</p>
    <p>租金（新元/月）：{{price}}</p>


    <h4>免责声明</h4>
    <em>页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。</em>
  </div>
</template>
<script>
export default {
  props: {
    facilities: Array,
    community: Array,
    introduction: String,
    payType: String,
    price: String
  }
}
</script>
<style scoped lang="less">
.housing-info {
  h4{
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
  strong {
    display: block;
    margin: 30px 0 8px;
    color: #24A10F;
  }
  span {
    display: inline-block;
    position: relative;
    padding: 0 20px;
    margin-bottom: 10px;
    color: #6f6f6f;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 4px;
      top: 7px;
      width: 6px;
      height: 3px;
      border-bottom: 1px solid #fff;
      border-left: 1px solid #fff;
      transform: rotate(-45deg);
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 15px;
      height: 15px;
      margin-top: -8px;
      background: #24A10F;
      border-radius: 50%;
    }
  }
  p {
    line-height: 28px;
    color: #6f6f6f;
  }
}
</style>