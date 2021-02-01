<template>
  <div class="category-search">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="search-box w1200px clearfix">
      <span class="left"><img src="../../../assets/image/integrity-image.png" alt="诚信为本，实力铸造" /></span>
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
  },
  computed: {
    breadcrumb () {
      const name = this.$route.params.name
      const list = {
        renting: {
          name: '狮城租房',
          url: '/c/renting'
        },
        'real-estate': {
          name: '新楼盘',
          url: '/c/renting'
        },
        'second-hand-housing': {
          name: '二手公寓',
          url: '/c/second-hand-housing'
        }
      }
      return list[name]
    }
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