<template>
  <div class="banner">
    <img src="https://waterlandcap.com/img/banner2.db1bca1d.jpg" />
    <SearchBar class="search-banner" />
  </div>
</template>
<script>
import SearchBar from '../../../components/base/SearchBar'
export default {
  components: {
    SearchBar
  }
}
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  height: 560px;
  img {
    height: 100%;
  }
}
.search-banner {
  position: absolute;
  z-index: 9;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
}
</style>