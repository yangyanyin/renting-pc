<template>
  <div class="product-list w1200px clearfix">
    <div class="result">
      为您找到<i>100</i>条结果
      <a>清除条件</a>
    </div>
    <div class="list left">
      <ProductItem v-for="(i, k) in 4" :key="k" />
    </div>
    <div class="recommend right">
      <h3>租房推荐</h3>
      <RecommendItem v-for="(i, k) in 4" :key="k" />
    </div>
  </div>
</template>
<script>
import ProductItem from './ProductItem'
import RecommendItem from './RecommendItem'
export default {
  components: {
    ProductItem,
    RecommendItem
  }
}
</script>
<style scoped lang="less">
.product-list {
  margin-top: 30px;
  .result {
    font-size: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid #C9C9C9;
    i {
      color: #BF3F3F;
    }
    a {
      float: right;
      padding-left: 30px;
      color: #7C7C7C;
      font-size: 14px;
      background: url('../../../assets/image/clear-filter-icon.png') no-repeat left center;
      background-size: 20px;
      &:hover {
        color: #24A10F;
      }
    }
  }
  .list {
    width: 955px;
  }
  .recommend {
    width: 178px;
    padding-top: 20px;
    h3 {
      font-size: 20px;
    }
  }
}
</style>