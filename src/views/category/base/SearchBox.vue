<template>
  <div class="category-search">
    <BreadcrumbList />
    <div class="search-box w1200px clearfix">
      <span class="left">1223asdasd</span>
      <SearchBar class="right" />
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../../components/base/BreadcrumbList'
import SearchBar from '../../../components/base/SearchBar'
export default {
  components: {
    BreadcrumbList,
    SearchBar
  }
}
</script>
<style scoped lang="less">
.category-search {
  background: #F5F5F5;
  .search-box {
    padding: 25px 0;
  }
}
</style>