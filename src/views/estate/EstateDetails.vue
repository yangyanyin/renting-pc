<template>
  <div class="details">
    <div class="banner-title">
      <h3>Asia Square | 亚洲广场</h3>
      <p>12 Marina View Singapore 018961</p>
    </div>

    <div class="content clearfix w1200px">
      <div class="left">
        <DetailsViewImg />
        <DetalsIntroduction />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'

export default {
  components: {
    DetailsViewImg,
    DetalsIntroduction
  }
}
</script>
<style lang="less" scoped>
.details {
  .left {
    width: 710px;
  }
  .right {
    width: 444px;
  }
}
</style>
<style lang="less">
.details {
  .other-t {
    margin-top: 30px;
    padding-bottom: 8px;
    font-size: 20px;
    border-bottom: 3px solid #24A10F;
  }
}
</style>