<template>
  <div class="right">
    <DetailsInfoBase />
    <h3>新楼盘推荐</h3>
    <div class="recommend">
      <div class="item" v-for="(i, k) in 3" :key="k">
        <router-link to="/" class="a-img">
          <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="项目详情" />
        </router-link>
        <router-link to="/" tag="strong">东景苑奢华卓越新地标，超大型东部私宅新楼盘</router-link>
        <p>2-5室 / 96-116㎡</p>
        <span>$79 <em>万起</em></span>
      </div>
    </div>
    <h3>联系顾问</h3>
    <div class="consultant">
      <img src="https://waterlandcap.com/img/michael-chan.6149365e.png" alt="项目详情" />
      <strong>吴洲 / Peter Wu <span>金牌销售</span></strong>
      <p class="tel">+65 8813 9139</p>
      <p>任职于新交所上市企业，新加坡最大的国际性产业集团ERA担任高级营销董事，金牌房产经纪人</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <h3>给TA留言<i>提交咨询请求，30分钟内回复</i></h3>
    <div class="message">
      <textarea class="inp text" placeholder="我对这个物业感兴趣，希望得到更多信息"></textarea>
      <input class="inp" type="text" placeholder="您的称呼（必填）">
      <input class="inp" type="text" placeholder="您的联系方式（必填）">
      <input class="inp" type="text" placeholder="您的邮箱地址（必填）">
      <p>已阅读并同意<router-link to="/">《新加坡看公寓网用户协议》</router-link> </p>
      <button>立即咨询</button>
    </div>
  </div>
</template>
<script>
import DetailsInfoBase from './DetailsInfoBase'
export default {
  components: {
    DetailsInfoBase
  }
}
</script>
<style lang="less" scoped>
.right {
  width: 444px;
  h3 {
    margin-top: 40px;
    font-size: 20px;
    padding-bottom: 12px;
    i {
      display: block;
      padding-top: 5px;
      font-size: 12px;
      color: #7C7C7C;
    }
  }

  .recommend {
    padding: 13px;
    border: 1px solid #C9C9C9;
    .item {
      position: relative;
      height: 100px;
      margin-top: 22px;
      padding-left: 196px;
      &:hover {
        .a-img img {
          transform: scale(1.2);
        }
      }
      &:first-child {
        margin-top: 0;
      }
      .a-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 178px;
        height: 100px;
        overflow: hidden;
        img {
          transition: .3s;
        }
      }
      strong {
        font-weight: normal;
        line-height: 22px;
        cursor: pointer;
        transition: .3s;
        &:hover {
          color: #24A10F;
        }
      }
      p {
        padding: 7px 0;
        font-size: 12px;
        color: #7C7C7C;
      }
      span {
        font-size: 20px;
        color: #BF3F3F;
        em {
          font-size: 14px;
        }
      }
    }
  }

  .consultant {
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

  .message {
    .inp {
      display: block;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      padding: 0 15px;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      &.text {
        height: 100px;
        padding: 13px 15px;
      }
    }
    p {
      font-size: 12px;
      a {
        color: #24A10F;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    button {
      display: block;
      width: 100%;
      margin-top: 30px;
      line-height: 50px;
      text-align: center;
      background: #24A10F;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>