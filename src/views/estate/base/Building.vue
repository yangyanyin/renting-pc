<template>
  <div class="building w1200px mt80 clearfix">
    <h3>分层地契商业办公大楼</h3>
    <Loading v-if="buildingData.length === 0" />
    <div class="clearfix" v-if="buildingData.length > 0">
      <ProductItem  v-for="(item, k) in buildingData" :item="item" :key="k" type="building" />
    </div>
    <Pagination v-if="total > 9" :total="total" @clickPage="clickPage" />
  </div>
</template>
<script>
import ProductItem from './ProductItem'
import Loading from '../../../components/base/Loading'
import Pagination from '../../../components/base/Pagination'
export default {
  components: {
    ProductItem,
    Loading,
    Pagination
  },
  data () {
    return {
      buildingData: [],
      total: 0,
      page: 1
    }
  },
  methods: {
    clickPage (page) {
      page = page + 1
      const path = this.$route.path
      this.$router.push({
        path: path,
        query: {
          page: page
        }
      })
      this.getProductList(page)
    },
    getProductList (page) {
      this.page = page
      const params = {
        page: this.page,
        size: 9
      }
      this.$httpApi.buildingApi(params).then(res => {
        if (res.code === 200) {
          this.buildingData = res.data.office_houses
          this.total = res.data.total
        }
      })
    }
  },
  mounted () {
    const p = this.$route.query.page || 1
    this.getProductList(p)
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