<template>
  <div class="info-base">
    <div class="price">
      $105<i>万起</i>
      <a>变价提醒</a>
    </div>
    <p>地区位置：<i>市区</i></p>
    <p>建筑面积：<i>7653m²</i></p>
    <p>预计落成日期：<i>2022年10月</i></p>
    <p>房产地址：<i>新加坡，乌节路1号 #169016</i></p>
    <p class="traffic">
      交通：
      <span>NS20  诺维娜</span>
      <span>NS20  诺维娜</span>
      <span>NS20  诺维娜</span>
      <i>步行至最近地铁站仅需5分钟</i>
    </p>
    <div class="rule clearfix">
      <ul>
        <li class="t">户型</li>
        <li>2室1厅</li>
        <li>3室1厅</li>
        <li>4室1厅</li>
      </ul>
      <ul>
        <li class="t">面积㎡</li>
        <li>48㎡</li>
        <li>58㎡</li>
        <li>68㎡</li>
      </ul>
      <ul>
        <li class="t">套数</li>
        <li>20套</li>
        <li>30套</li>
        <li>40套</li>
      </ul>
      <ul>
        <li class="t">售价</li>
        <li class="p">约$100万</li>
        <li class="p">约$150万</li>
        <li class="p">约$200万</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.info-base {
  .price {
    padding-bottom: 10px;
    font-size: 40px;
    color: #BF3F3F;
    border-bottom: 1px solid #707070;
    i {
      font-size: 24px;
    }
    a {
      display: inline-block;
      position: relative;
      top: -4px;
      margin-left: 20px;
      padding: 0 10px;
      line-height: 25px;
      background: #EFF8EF;
      border-radius: 2px;
      font-size: 12px;
      color: #24A10F;
    }
  }
  p {
    margin-top: 22px;
    font-size: 16px;
    color: #737373;
    i {
      display: inline-block;
      margin-left: 10px;
      color: #1C1C1C;
    }
    &.traffic {
      span {
        display: inline-block;
        margin-right: 15px;
        padding: 0 15px;
        line-height: 28px;
        background: #E12129;
        border-radius: 90px;
        font-size: 12px;
        color: #fff;
      }
      i {
        display: inline-block;
        margin: 10px 0 0 55px;
        font-size: 12px;
        color: #1C1C1C;
      }
    }
  }
  .rule {
    margin-top: 20px;
    border: 1px solid #C9C9C9;
    ul {
      float: left;
      width: 25%;
      text-align: center;
      li {
        line-height: 40px;
        font-size: 12px;
        &.t {
          color: #6f6f6f
        }
        &.p {
          color: #BF3F3F;
        }
        &:nth-child(even) {
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>