<template>
  <div class="filter w1200px">
    <p class="tips">全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!</p>
    
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
<style scoped lang="less">
.filter {
  padding: 40px 10px 0;
  .tips {
    margin-bottom: 60px;
    text-align: center;
    font-size: 12px;
    color: #F7B964;
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