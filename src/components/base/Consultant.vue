<template>
  <div class="consultant">
    <h3>联系顾问</h3>
    <div class="content">
      <img src="https://waterlandcap.com/img/michael-chan.6149365e.png" alt="项目详情" />
      <strong>吴洲 / Peter Wu <span>金牌销售</span></strong>
      <p class="tel">+65 8813 9139</p>
      <p>任职于新交所上市企业，新加坡最大的国际性产业集团ERA担任高级营销董事，金牌房产经纪人</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.consultant {
  margin-top: 40px;
  h3 {
    font-size: 20px;
    padding-bottom: 12px;
  }
  .content {
    position: relative;
    height: 160px;
    padding-left: 150px;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 120px;
      height: 160px;
    }
    strong {
      font-size: 18px;
      span {
        display: inline-block;
        margin-left: 20px;
        padding: 0 8px;
        line-height: 25px;
        background: #FDF5EA;
        border-radius: 2px;
        color: #F7B964;
        font-size: 12px;
      }
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
      line-height: 18px;
      &.tel {
        padding: 8px 0 11px;
        font-size: 22px;
        color: #BF3F3F;
      }
    }
    ul {
      padding-top: 20px;
      li {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 14px;
        background: #46BB36;
        border-radius: 100%;
      }
    }
  }
}
</style>