<!-- 新楼盘 -->
<template>
  <div class="category">
    <SearchBox />

    <Filters />

    <ProductList />

    <Pagination />
  </div>
</template>
<script>
import SearchBox from './base/SearchBox'
import Filters from './base/Filters'
import ProductList from './base/ProductList'
import Pagination from '../../components/base/Pagination'
export default {
  components: {
    SearchBox,
    Filters,
    ProductList,
    Pagination
  }
}
</script>