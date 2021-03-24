<template>
  <div class="building w1200px mt80 clearfix">
    <h3>保留性店屋</h3>
    <Loading v-if="shophouseData.length === 0" />
    <template v-if="shophouseData.length > 0">
      <ProductItem  v-for="(item, k) in shophouseData" :item="item" :key="k" type="shophouse" />
    </template>
  </div>
</template>
<script>
import ProductItem from './ProductItem'
import Loading from '../../../components/base/Loading'

export default {
  components: {
    ProductItem,
    Loading
  },
  data () {
    return {
      shophouseData: []
    }
  },
  mounted () {
    this.$httpApi.shophouseApi().then(res => {
      if (res.code === 200) {
        this.shophouseData = res.data.retention_houses
      }
    })
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