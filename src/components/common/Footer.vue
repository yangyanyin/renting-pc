<template>
  <footer>
    <MessagePlate />
    <Guarantee />
    <div class="footer-content mt80">
      <div class="w1200px clearfix">
        <div class="left">
          <p>新加坡看公寓网是新加坡最全的中文类房产新楼盘信息网，每日更新汇聚全岛最实时的房产信息，开发商直接销售团队，金牌团队专注服务中国客户，服务数百精英满意置业新加坡，是海外华人在新置业的必看网站。</p>
          <ul>
            <li><img src="../../assets/image/whats-icon.png"></li>
            <li><img src="../../assets/image/weibo-icon.png"></li>
            <li><img src="../../assets/image/fb-icon.png"></li>
            <li><img src="../../assets/image/in-icon.png"></li>
            <li><img src="../../assets/image/wechat-icon.png"></li>
          </ul>
          <div class="hotline">服务热线<h3>+65 88 139 139</h3></div>
          <span>© 2021 新加坡看公寓网 All Rights Reserved.</span>
        </div>
        <div class="right">
          <span>
            <i><img src="https://waterlandcap.com/img/WeChat2.9f2b49a2.png" alt="扫码关注公众号" /></i>
            扫码关注公众号
          </span>
          <span>
            <i><img src="https://waterlandcap.com/img/WeChat2.9f2b49a2.png" alt="扫码关注公众号" /></i>
            新加坡吴洲房产
          </span>
        </div>
      </div>
    </div>

    <ReturnTop />
  </footer>
</template>
<script>
import MessagePlate from '../base/MessagePlate'
import Guarantee from '../base/Guarantee'
import ReturnTop from '../../components/common/ReturnTop'
export default {
  components: {
    MessagePlate,
    Guarantee,
    ReturnTop
  }
}
</script>
<style lang="less" scoped>
.footer-content {
  height: 440px;
  padding-top: 70px;
  color: #7C7C7C;
  background: #1d1d1d url('../../assets/image/footer-bg.png') no-repeat top center;
  background-size: auto 440px;
  .left {
    width: 460px;
    p {
      font-size: 12px;
      line-height: 20px;
    }
    .hotline {
      margin-top: 40px;
      font-size: 12px;
      color: #F7B964;
      h3 {
        display: inline-block;
        position: relative;
        top: 5px;
        padding-left: 10px;
        font-size: 30px;
      }
    }
    ul {
      display: block;
      border-bottom: 1px solid #8c8c8c;
      padding: 40px 0;
      li {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 30px;
        background: #8c8c8c;
        border-radius: 100%;
      }
    }
    span {
      display: block;
      margin-top: 40px;
      font-size: 12px;
    }
  }
  .right {
    span {
      display: inline-block;
      margin-left: 40px;
      text-align: center;
      font-size: 12px;
      i {
        display: block;
        width: 107px;
        margin-bottom: 10px;
        border: 5px solid #333;
        border-radius: 8px;
      }
    }
  }
}
</style>