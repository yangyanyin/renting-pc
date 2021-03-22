<template>
  <div class="info-base">
    <p>建成时间：<i>2013年</i></p>
    <p>地契：<i>99年</i></p>
    <p>类型：<i>商业办公室</i></p>
    <p>地址：<i>12 Marina View Singapore 018961 </i></p>
    <p>总高：<i>228米</i></p>
    <p>楼层：<i>46层</i></p>
    <p>靠近地铁站：<i>市中心地铁站(Downtown MRT)</i></p>
    <div class="price">
      参考价: <span> $2,720每平方尺 </span>
      <button @click="showAdvisory" >购买</button>
    </div>
    <div class="price">
      参考价:<span> $13平方尺每月 </span>
      <button @click="showAdvisory">租赁</button>
    </div>

    <AdvisoryPopup v-if="showAdvisoryType" @closePopuo="showAdvisory" />
  </div>
</template>

<script>
import AdvisoryPopup from '../../../components/base/AdvisoryPopup'

export default {
  components: {
    AdvisoryPopup
  },
  data () {
    return {
      showAdvisoryType: false
    }
  },
  methods: {
    showAdvisory () {
      this.showAdvisoryType = !this.showAdvisoryType
    }
  }
}
</script>
<style lang="less" scoped>
.info-base {
   p {
    margin-bottom: 22px;
    font-size: 16px;
    color: #737373;
    i {
      display: inline-block;
      margin-left: 10px;
      color: #1C1C1C;
    }
  }
  .price {
    padding: 15px;
    line-height: 40px;
    font-size: 16px;
    border: 1px solid #C9C9C9;
    &:last-child {
      border-top: none;
    }
    span {
      color: #BF3F3F;
    }
    button {
      float: right;
      width: 128px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: #24A10F;
      border-radius: 5px;
    }
  }
}
</style>