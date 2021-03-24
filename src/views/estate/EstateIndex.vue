<template>
  <div class="estate">
    <div class="banner">
      <div class="w1200px btn">
        <router-link tag="button" to="/estate"> <img src="../../assets/image/estate-b-icon1.png" alt="新加坡商业地产"/> 新加坡商业地产</router-link>
        <router-link tag="button" to="/estate/building"> <img src="../../assets/image/estate-b-icon2.png" alt="分层地契商业办公大楼"/> 分层地契商业办公大楼</router-link>
        <router-link tag="button" to="/estate/shophouse"> <img src="../../assets/image/estate-b-icon3.png" alt="保留性店屋" /> 保留性店屋</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'estate'
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 220px;
  padding-top: 60px;
  background: url('../../assets/image/estate-banner.png') no-repeat top center;
  background-size: auto 100%;
  button {
    width: 360px;
    height: 100px;
    margin-right: 60px;
    font-size: 16px;
    color: #fff;
    border: 1px solid #E8E7E7;
    border-radius: 5px;
    background: no-repeat;
    transition: .3s;
    cursor: pointer;
    &.router-link-exact-active {
      background: #24A10F;
      border-color: #24A10F;
      color: #fff;
      img {
        transform: translateY(-5px) scale(1.1);
      }
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background: #24A10F;
      border-color: #24A10F;
      color: #fff;
      img {
        transform: translateY(-5px) scale(1.1);
      }
    }
    img {
      display: inline-block;
      width: 70px;
      transition: .3s;
    }
  }
}
</style>