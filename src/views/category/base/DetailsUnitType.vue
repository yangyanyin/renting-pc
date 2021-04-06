<template>
  <div class="unit-type">
    <h3 class="other-t">户型介绍</h3>
    <div class="item" v-for="(item, k) in houseTypes" :key="k">
      <i class="a-img">
        <rentImg class="img-object" :url="item.image" :alt="item.type" />
        <a :href="item.vr_link" target="_blank" v-if="item.vr_link">
          <img src="../../../assets/image/vr_icon.gif">
          VR看房
        </a>
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
      border: 1px solid #ddd;
      a {
        position: absolute;
        z-index: 9;
        left: 5px;
        bottom: 5px;
        width: 100px;
        height: 26px;
        padding-right: 20px;
        line-height: 26px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 3px;
        opacity: .8;
        transition: .3s;
        &:hover {
          background: rgba(0, 0, 0, 0.9);
          &:after {
            right: 11px;
            transform: scale(1.1) rotate(45deg);
          }
        }
        &:after {
          content: '';
          position: absolute;
          right: 14px;
          top: 10px;
          width: 5px;
          height: 5px;
          border-right: 1px solid #fff;
          border-top: 1px solid #fff;
          transform: rotate(45deg);
          transition: .3s;
        }
        img {
          display: inline-block;
          width: 34px;
          height: auto;
        }
      }
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