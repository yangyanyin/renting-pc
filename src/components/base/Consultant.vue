<template>
  <div class="consultant">
    <h3>联系顾问</h3>
    <div class="content">
      <img class="people" src="../../assets/image/consultant.png" />
      <strong>吴洲 / Peter Wu <span>金牌销售</span></strong>
      <p class="tel">+65 8813 9139</p>
      <p>任职于新交所上市企业，新加坡最大的国际性产业集团ERA担任高级营销董事，金牌房产经纪人</p>
      <ul>
        <li>
          <img src="../../assets/image/consultant-app.png" alt="">
          <em class="tel">
            + 65 88 139 139
          </em>
        </li>
        <li>
          <img src="../../assets/image/consultant-wx.png" alt="">
          <em class="wx">
            <img src="../../assets/image/wx1.png" alt="">
            <i>新加坡吴洲房产</i>
          </em>
        </li>
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
    .people {
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
        position: relative;
        width: 30px;
        height: 40px;
        padding-bottom: 10px;
        margin-right: 14px;
        border-radius: 100%;
        cursor: pointer;
        &:hover {
          em {
            display: block;
          }
        }
        em {
          display: none;
          position: absolute;
          left: -30px;
          top: 40px;
          width: 120px;
          padding: 5px 10px;
          background: #fff;
          color: #24A10F;
          box-shadow: 0 0 3px 0 #999;
          border-radius: 5px;
          &.tel {
            width: 140px;
            padding-left: 30px;
            background: url('../../assets/image/consultant-app.png') no-repeat 10px center;
            background-size: 15px;
          }
          i {
            display: block;
            padding-bottom: 5px;
            font-size: 12px;
            color: #7C7C7C;
            text-align: center;
          }
          &:after {
            content: '';
            position: absolute;
            z-index: 1;
            top: -5px;
            left: 41px;
            width: 8px;
            height: 8px;
            background: #fff;
            border-top: 1px solid #cecece;
            border-left: 1px solid #cecece;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>