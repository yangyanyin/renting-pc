<template>
  <div class="details">
    <SearchBox />

    <div class="content clearfix w1200px mt80">
      
      <div class="name">
        <h3>新加坡马里士他路 Balestier Point 1636尺超大三居室永久产权公寓</h3>
        <span>公寓</span>
        <span>核心地段</span>
        <span>知名房企</span>
      </div>
      <div class="left">
        <DetailsViewImg />
        <DetalsIntroduction />
        <DetailsPhoto />
        <DetailsDetailed />
        <DetailsMortgage />
        <DetailsUnitType />
      </div>
      <div class="right">
        <DetailsInfoBase />
        <DetailsRecommend />
      </div>
    </div>
  </div>
</template>
<script>
import SearchBox from './base/SearchBox'
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import DetailsPhoto from './base/DetailsPhoto'
import DetailsMortgage from './base/DetailsMortgage'
import DetailsDetailed from './base/DetailsDetailed'
import DetailsUnitType from './base/DetailsUnitType'
import DetailsInfoBase from './base/DetailsInfoBase'
import DetailsRecommend from '../../components/details/DetailsRecommend'

export default {
  components: {
    SearchBox,
    DetailsViewImg,
    DetailsPhoto,
    DetailsMortgage,
    DetailsDetailed,
    DetailsUnitType,
    DetalsIntroduction,
    DetailsInfoBase,
    DetailsRecommend
  }
}
</script>
<style lang="less" scoped>
.details {
  .name {
    margin-bottom: 15px;
    h3 {
      padding-bottom: 20px;
      font-size: 28px;
    }
    span {
      display: inline-block;
      padding: 0 8px;
      line-height: 25px;
      margin-right: 10px;
      background: #F5F5F5;
      border-radius: 2px;
      text-align: center;
      color: #7C7C7C;
      font-size: 12px;
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