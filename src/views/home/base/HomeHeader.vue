<template>
  <header class="home-header">
    <div class="w1200px clearfix">
      <div class="logo left"></div>
      <div class="hotline right">
        客服热线
        <strong>+65 88 139 139</strong>
      </div>
      <div class="nav right">
        <router-link to="/">首页</router-link>
        <router-link to="/new-real-estate">新楼盘</router-link>
        <router-link to="second-hand-housing">二手公寓</router-link>
        <router-link to="/">我是业主</router-link>
        <router-link to="/renting">狮城租房</router-link>
        <router-link to="/">商业地产</router-link>
        <router-link to="/">关于我们</router-link>
      </div>
    </div>
  </header>
</template>
<style lang="less" scoped>
.home-header {
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  .nav {
    padding-top: 30px;
    a {
      display: inline-block;
      margin: 0 20px;
      color: #fff;
    }
  }
  .hotline {
    padding: 24px 0 0 16px;
    color: #fff;
    strong {
      position: relative;
      top: 3px;
      font-size: 20px;
    }
  }
}
</style>