<template>
  <div class="building w1200px mt80 clearfix">
    <h3>分层地契商业办公大楼</h3>
    <ProductItem v-for="(i, k) in 9" :key="k" />
  </div>
</template>
<script>
import ProductItem from './ProductItem'
export default {
  components: {
    ProductItem
  }
}
</script>
<style lang="less" scoped>
.building {
  h3 {
    font-size: 28px;
    color: #19191D;
  }
}
</style>