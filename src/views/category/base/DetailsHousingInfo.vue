<template>
  <div class="housing-info">
    <h3 class="other-t">房屋信息</h3>
    <strong>基本信息</strong>
    <ul>
      <li>面积 <i>{{infoBase.area}}</i> </li>
      <li>入住 <i></i> </li>
      <li>楼层 <i>{{infoBase.floor}}</i> </li>
      <li>电梯 <i></i> </li>
      <li>车位 <i>{{infoBase.has_parking ? '有' : '无'}}</i> </li>
      <li>用水 <i>{{infoBase.water ? '民水' : '商业用水'}}</i> </li>
      <li>用电 <i>{{infoBase.electricity ? '民电' : '商业用电'}}</i> </li>
      <li>燃气 <i>{{infoBase.area}}</i> </li>
      <li>租期 <i></i> </li>
      <li>看房 <i>{{infoBase.live_time ? '随时看房' : '无'}}</i> </li>
    </ul>
    <strong>配套设施</strong>
    <Conveniences :facilities="infoBase.facilities" />
  </div>
</template>
<script>
import Conveniences from '../../../components/details/Conveniences'
export default {
  components: {
    Conveniences
  },
  props: {
    infoBase: Object
  },
  data () {
    return {
      lease: [
        '半年',
        '一年以上',
        '两年以上',
        '三年以上'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
strong {
  margin-top: 25px;
  display: block;
  font-weight: normal;
  color: #6f6f6f;
}
ul {
  display: block;
  margin: -20px 0 0 120px;
  li {
    display: inline-block;
    width: 200px;
    margin-bottom: 18px;
    color: #6f6f6f;
    i {
      display: inline-block;
      margin-left: 45px;
      color: #1C1C1C;
    }
  }
}
</style>
<style lang="less">
.housing-info {
  .conveniences .other-t {
    display: none;
  }
}
</style>