<template>
  <header v-if="!isHome">
    <div class="w1200px">
      <div class="logo"></div>
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/">新楼盘</router-link>
        <router-link to="/">二手公寓</router-link>
        <router-link to="/">我是业主</router-link>
        <router-link to="/">狮城租房</router-link>
        <router-link to="/">商业地产</router-link>
        <router-link to="/">关于我们</router-link>
      </div>
      <div class="hotline">
        客服热线
        +65 88 139 139
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    isHome () {
      return this.$route.name
    }
  }
}
</script>