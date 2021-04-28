<template>
  <div class="return-top">
    <ul>
      <li>
        Whats App
        <div class="app">
          <img src="../../assets/image/consultant-app.png"> +65 88 139 139
        </div>
      </li>
      <li>
        咨询
        <div class="tel">
          <img src="../../assets/image/tel-green.png"> +65 88 139 139
        </div>
      </li>
      <li>
        微信
        <div class="wx">
          <span>
            <i> <img src="../../assets/image/wx2.png" alt="扫码关注公众号" /></i>
            扫码关注公众号
          </span>
          <span>
            <i> <img src="../../assets/image/wx1.png" alt="扫码关注公众号" /></i>
            新加坡吴洲房产
          </span>
        </div>
      </li>
      <li class="top-btn" :class="{antion: showTopBtn}" @click="backTop">返回顶部</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showTopBtn: false
    }
  },
  methods: {
    backTop () {
      let scrTop = 0
      let iSpeed = 0
      let backTopTimer = null
      backTopTimer = setInterval(function () {
        scrTop = document.body.scrollTop || document.documentElement.scrollTop
        iSpeed = scrTop / 6
        if (scrTop === 0) {
          clearInterval(backTopTimer)
        }
        document.body.scrollTop = scrTop - iSpeed
        document.documentElement.scrollTop = scrTop - iSpeed
      }, 8)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop || document.documentElement.scrollTop > 600) {
        this.showTopBtn = true
      } else {
        this.showTopBtn = false
      }
    })
  }
}
</script>
<style scoped lang="less">
.return-top {
  position: fixed;
  z-index: 99;
  right: 20px;
  bottom: 100px;
  width: 60px;
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  color: #7C7C7C;
  li {
    position: relative;
    margin-top: 15px;
    padding: 23px 0px 18px;
    cursor: pointer;
    &:hover {
      div {
        display: block;
      }
    }
    div {
      display: none;
      position: absolute;
      top: 0;
      right: 58px;
      padding: 10px;
      background: #fff;
      box-shadow: 0 0 3px 0 #999;
      border-radius: 5px;
      font-size: 16px;
      white-space: nowrap;
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 50%;
        right: -2px;
        width: 8px;
        height: 8px;
        background: #fff;
        border-top: 1px solid #cecece;
        border-right: 1px solid #cecece;
        transform: rotate(45deg) translateY(-50%);
      }
      img {
        display: inline-block;
        width: 20px;
      }
      &.wx {
        top: -45px;
        width: 210px;
        span {
          display: inline-block;
          font-size: 12px;
          text-align: center;
          color: #444;
          &:first-child {
            margin-right: 10px;
          }
        }
        img {
          width: 85px;
          display: block;
        }
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 20px;
      height: 21px;
      margin-left: -10px;
      background: url('../../assets/image/return-top.png') no-repeat;
      background-size: 60px;
      background-position-x: -37px;
      transition: .3s;
    }
    &.top-btn {
      height: 0;
      padding: 0;
      overflow: hidden;
      transition: .6s;
      
      &.antion {
        padding-top: 20px;
        height: 55px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 18px;
      height: 1px;
      bottom: 0;
      left: 21px;
      background: #7C7C7C;
    }
    &:nth-child(1) {
      &:before {
        background-position-y: -54px;
      }
    }
    &:nth-child(2) {
      &:before {
        background-position-y: -86px;
      }
    }
    &:nth-child(3) {
      &:before {
        width: 22px;
        margin-left: -11px;
        background-position-y: -26px;
      }
    }
    &:nth-child(4) {
      &::after {
        display: none;
      }
      &:before {
        background-position-y: -1px;
      }
    }
    &:hover {
      color: #24A10F;
      &:before {
        background-position-x: -1px;
      }
    }
  }
}
</style>