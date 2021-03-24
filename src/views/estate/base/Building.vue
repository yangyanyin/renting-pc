<template>
  <div class="building w1200px mt80 clearfix">
    <h3>分层地契商业办公大楼</h3>
    <Loading v-if="buildingData.length === 0" />
    <template v-if="buildingData.length > 0">
      <ProductItem  v-for="(item, k) in buildingData" :item="item" :key="k" type="building" />
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
      buildingData: []
    }
  },
  mounted () {
    this.$httpApi.buildingApi().then(res => {
      if (res.code === 200) {
        this.buildingData = res.data.office_houses
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