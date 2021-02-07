<template>
  <div class="filter w1200px">
    <div class="tips" v-if="showTips"><p>全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!</p></div>
    
    <div class="item">
      <span class="t">地区</span>
      <span>全部</span>
      <span>东部</span>
      <span>西部</span>
      <span>市区</span>
      <span>中部</span>
      <span>南部</span>
      <span>北部</span>
      <span>东南部</span>
      <span>其他地区</span>
    </div>
    <div class="item">
      <span class="t">户型</span>
      <span>全部</span>
      <span>studio</span>
      <span>1卧室</span>
      <span>2卧室</span>
      <span>3卧室</span>
      <span>4卧室</span>
      <span>独栋洋房</span>
      <span>半独立洋房</span>
    </div>

    <div class="sort">
      <span class="active">默认排序</span>
      <span>按价格</span>
      <span>按面积</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    showTips () {
      return this.$route.params.name === 'renting'
    }
  },
  methods: {
    filterClick () {
      
    }
  }
}
</script>
<style scoped lang="less">
.filter {
  padding: 40px 10px 0;
  .tips {
    text-align: center;
    margin-bottom: 60px;
    p {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      font-size: 12px;
      color: #F7B964;
      &::after {
        content: '!';
        position: absolute;
        left: 0;
        top: 1px;
        width: 14px;
        height: 14px;
        border-radius: 14px;
        color: #fff;
        line-height: 14px;
        background: #F7B964;
      }
    }
  }
  .item {
    span {
      display: inline-block;
      margin: 0 30px 18px 0;
      cursor: pointer;
      &:hover {
        color: #24A10F;
      }
      &.t {
        margin-right: 60px;
        font-weight: bold;
        &:hover {
          color: #19191D;
        }
      }
    }
  }
  .sort {
    height: 36px;
    margin-top: 70px;
    border-bottom: 3px solid #24A10F;
    span {
      display: inline-block;
      width: 84px;
      line-height: 33px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #24A10F;
      }
      &.active {
        background: #24A10F;
        color: #fff;
      }
    }
  }
}
</style>