<template>
  <div class="item">
    <img src="https://cms.aicassets.com/images/default/6018abc3e6cbc.jpeg" alt="" />
    <router-link to="/n/d/asd" tag="h3">刷新历史纪录！疫情之下加拿大12月份的房屋成交量超过1.2万宗</router-link>
    <p>根据加拿大房地产协会在1月15日所公布出来的的最新统计数据，截至2020年12月加拿大全国房屋销量超过1.2万宗及多项相关指标均刷新历史纪录</p>
    <span>2021-02-02</span>
    <router-link to="/n/d/asd">查看详情</router-link>
  </div>
</template>
<style lang="less" scoped>
.item {
  position: relative;
  height: 136px;
  margin-top: 22px;
  padding: 0 0 22px 225px;
  border-bottom: 1px solid #C9C9C9;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 205px;
    height: 116px;
  }
  h3 {
    padding-top: 5px;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    margin-top: 10px;
    line-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: no */
  }
  span {
    display: block;
    margin-top: 20px;
    color: #7C7C7C;
  }
  a {
    position: absolute;
    right: 0;
    bottom: 19px;
    padding-right: 17px;
    color: #24A10F;
    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 2px;
      width: 7px;
      height: 7px;
      border-top: 2px solid #24A10F;
      border-right: 2px solid #24A10F;
      border-radius: 2px;
      transform: rotate(45deg);
      transition: .3s;
    }
  }
}
</style>