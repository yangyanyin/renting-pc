<template>
  <div class="home-advisory mt80">
    <div class="w1200px">
      <router-link :to="buyHouseAdvisory.more">立即查看</router-link>
      <h3 v-html="buyHouseAdvisory.title"></h3>
      <p>{{ buyHouseAdvisory.des }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    buyHouseAdvisory: Object
  }
}
</script>
<style scoped lang="less">
.home-advisory {
  background: #FCFCFC;
  background-size: 598px;
  .w1200px {
    height: 240px;
    padding-top: 90px;
    background: url('../../../assets/image/house-advisory.png') no-repeat;
    background-position: 600px 10px;
    background-size: 580px;
  }
  h3 {
    font-size: 26px;
  }
  p {
    width: 500px;
    margin-top: 12px;
    font-size: 12px;
    line-height: 18px;
  }
  a {
    float: right;
    width: 184px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #24A10F;
    border-radius: 5px;
    text-align: center;
    transition: .3s;
    &:hover {
      background: #198407;
    }

  }
}
</style>