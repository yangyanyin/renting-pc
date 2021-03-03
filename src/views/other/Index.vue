<template>
  <div class="other">
    <BreadcrumbList />
    <div class="content clearfix w1200px">
      <div class="left menu">
        <router-link to="/about">关于我们</router-link>
        <router-link to="/contact-us">联系我们</router-link>
        <router-link to="/copyright">版权声明</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
export default {
  components: {
    BreadcrumbList
  }
}
</script>