<template>
  <header class="home-header">
    <div class="w1200px clearfix">
      <div class="logo left">
        <router-link to="/">
          <img src="../../../assets/image/logo-white.png" alt="新加坡看房网" />
        </router-link>
      </div>
      <div class="hotline right">
        客服热线
        <strong>+65 88 139 139</strong>
      </div>
      <div class="nav right">
        <router-link :to="item.url" v-for="(item, key) in navDate" :key="key">
          {{item.name}}
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
import navDate from '../../../config/nav'
export default {
  data () {
    return {
      navDate: navDate
    }
  }
}
</script>
<style lang="less" scoped>
.home-header {
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  .logo {
    width: 130px;
    margin-top: 20px;
  }
  .nav {
    padding-top: 30px;
    a {
      display: inline-block;
      margin: 0 20px;
      color: #fff;
      font-size: 16px;
      &:hover {
        color: #21e800;
      }
    }
  }
  .hotline {
    padding: 23px 0 0 16px;
    color: #fff;
    font-size: 16px;
    strong {
      position: relative;
      top: 3px;
      margin-left: 10px;
      padding-left: 30px;
      font-size: 20px;
      background: url('../../../assets/image/tel-white.png') no-repeat left center;
      background-size: 20px;
    }
  }
}
</style>