<template>
  <div class="category-search">
    <div class="search-box w1200px clearfix">
      <span class="left"><img src="../../../assets/image/integrity-image.png" alt="诚信为本，实力铸造" /></span>
      <SearchBar class="right" />
    </div>
  </div>
</template>
<script>
import SearchBar from '../../../components/base/SearchBar'
export default {
  components: {
    SearchBar
  },
  computed: {
    
  }
  
}
</script>
<style scoped lang="less">
.category-search {
  background: #F5F5F5;
  .left {
    width: 167px;
  }
  .search-box {
    padding: 25px 10px;
  }
}
</style>