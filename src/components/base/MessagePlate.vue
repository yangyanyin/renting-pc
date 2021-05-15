<template>
  <div class="message w1200px mt80">
    <p>金牌团队，全岛各区房产买卖租，一条龙服务</p>
    <p>每日9点更新汇总全岛各区最新房源，专车接送看房。 </p>
    <a @click="btnClick">即刻来电预约看房</a>
    <img src="../../assets/image/message-bg.png" alt="">
    <AdvisoryPopup v-if="showAdvisoryType" type="其他" @closePopuo="btnClick" />
  </div>
</template>
<script>
import AdvisoryPopup from './AdvisoryPopup'
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
    btnClick () {
      this.showAdvisoryType = !this.showAdvisoryType
    }
  }
}
</script>
<style lang="less" scoped>
.message {
  position: relative;
  width: 1200px;
  height: 190px;
  padding: 40px 35px;
  background: linear-gradient(180deg, #366669 0%, #103636 100%);
  background-size: 100%;
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 190px;
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 28px;
  }
  a {
    display: block;
    margin-top: 40px;
    color: #FFE19A;
    background: no-repeat;
    text-decoration: underline;
  }
}

</style>