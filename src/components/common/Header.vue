<template>
  <header v-if="!isHome">
    <div class="w1200px clearfix">
      <div class="logo left"></div>
      <div class="hotline right">
        客服热线
        <strong>+65 88 139 139</strong>
      </div>
      <div class="nav right">
        <router-link to="/">首页</router-link>
        <router-link to="/">新楼盘</router-link>
        <router-link to="/">二手公寓</router-link>
        <router-link to="/">我是业主</router-link>
        <router-link to="/">狮城租房</router-link>
        <router-link to="/">商业地产</router-link>
        <router-link to="/">关于我们</router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    isHome () {
      return this.$route.name === 'home'
    }
  }
}
</script>
<style scoped lang="less">
header {
  height: 80px;
  width: 100%;
  background: #fff;
  .nav {
    padding: 30px 0;
    a {
      display: inline-block;
      margin: 0 20px;
    }
  }
  .hotline {
    padding: 24px 0  0 16px;
    strong {
      position: relative;
      top: 3px;
      font-size: 20px;
      color: #24A10F;
    }
  }
}
</style>