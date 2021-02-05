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
        <Conveniences />
      </div>
      <div class="right">
        <DetailsInfoBase />
        <Consultant />
      </div>
    </div>
  </div>
</template>
<script>
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import Conveniences from '../../components/details/Conveniences'
import DetailsInfoBase from './base/DetailsInfoBase'
import Consultant from '../../components/base/Consultant'

export default {
  components: {
    DetailsViewImg,
    DetalsIntroduction,
    Conveniences,
    Consultant,
    DetailsInfoBase
  }
}
</script>
<style lang="less" scoped>
.details {
  .banner-title {
    height: 220px;
    background: #000;
    text-align: center;
    color: #fff;
    h3 {
      padding-top: 60px;
      font-size: 28px;
    }
    p {
      display: inline-block;
      padding-top: 15px;
      font-size: 18px;
    }
  }
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