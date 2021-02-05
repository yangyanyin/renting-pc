<template>
  <div class="building w1200px mt80 clearfix">
    <h3>保留性店屋</h3>
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