<!-- 新楼盘 -->
<template>
  <div class="category">
    <SearchBox />

    <Filters />

    <ProductList />
  </div>
</template>
<script>
import SearchBox from './base/SearchBox'
import Filters from './base/Filters'
import ProductList from './base/ProductList'
export default {
  components: {
    SearchBox,
    Filters,
    ProductList
  }
}
</script>