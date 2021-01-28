<template>
  <Layout>
    <router-view :key="this.$route.fullPath" />
  </Layout>
</template>
<script>
import './assets/style/common.less'
import Layout from './components/common/Layout'
export default {
  components: {
    Layout
  }
}
</script>
