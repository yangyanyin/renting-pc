<template>
  <header v-if="!isHome">
    <div class="w1200px clearfix">
      <div class="logo left">
        <router-link to="/">
          <img src="../../assets/image/logo-green.png" alt="新加坡看房网" />
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
import navDate from '../../config/nav'
export default {
  computed: {
    isHome () {
      return this.$route.name === 'home'
    }
  },
  data () {
    return {
      navDate: navDate
    }
  }
}
</script>
<style scoped lang="less">
header {
  height: 80px;
  width: 100%;
  background: #fff;
  .logo {
    width: 140px;
    margin-top: 20px;
  }
  .nav {
    padding: 30px 0;
    a {
      display: inline-block;
      margin: 0 20px;
      font-size: 16px;
      &.router-link-active {
        color: #24A10F;
      }
      &:first-child {
        color: #444;
      }
      &:hover {
        color: #24A10F;
      }
    }
  }
  .hotline {
    padding: 23px 0  0 16px;
    font-size: 16px;
    strong {
      position: relative;
      top: 3px;
      margin-left: 10px;
      padding-left: 30px;
      font-size: 20px;
      color: #24A10F;
      background: url('../../assets/image/tel-green.png') no-repeat left center;
      background-size: 20px;
    }
  }
}
</style>