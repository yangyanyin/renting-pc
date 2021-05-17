<template>
  <div class="search-like mt80" v-if="likeData.length > 0">
    <h3> <i>你可能喜欢</i> </h3>
    <ProductItem v-for="(item, k) in likeData" :key="k" :item="item" :type="type"  />
  </div>
</template>
<script>
import ProductItem from './ProductItem'
export default {
  components: {
    ProductItem
  },
  props: {
    type: String
  },
  data () {
    return {
      likeData: 0
    }
  },
  mounted () {
    const params = {
      page: this.page,
      size: 5,
      api_url: this.type
    }
    this.$httpApi.categoryListApi(params).then(res => {
      this.likeData = res.data.new_houses || res.data.second_hand_houses || res.data.rented_houses
    })
  }
}
</script>
<style lang="less" scoped>
.search-like {
  h3 {
    font-size: 16px;
    border-bottom: 2px solid #24A10F;
    i {
      display: inline-block;
      padding: 0 20px;
      color: #fff;
      background: #24A10F;
      line-height: 44px;
    }
  }
}
</style>