<template>
  <Layout>
    <keep-alive :include="['home', 'category', 'category-detail']" max="11">
      <router-view :key="curRouterLink" />
    </keep-alive>  
  </Layout>
</template>
<script>
import './assets/style/common.less'
import Layout from './components/common/Layout'
export default {
  components: {
    Layout
  },
  computed: {
    curRouterLink () {
      return this.$route.fullPath
    }
  }
}
</script>
