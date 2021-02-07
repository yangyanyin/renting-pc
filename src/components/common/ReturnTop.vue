<template>
  <div class="return-top">
    <ul>
      <li>Whats App</li>
      <li>咨询</li>
      <li>微信</li>
      <li @click="backTop">返回顶部</li>
    </ul>
  </div>
</template>
<script>
export default {
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
  height: 305px;
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