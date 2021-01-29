<template>
  <div class="banner">
    <img src="https://waterlandcap.com/img/banner2.db1bca1d.jpg" />
    <SearchBar class="search-banner" />
    <div class="integrity">
      <span>诚信为本</span>
      <span>实力铸造</span>
      <span>真诚服务</span>
      <span>100%真实房源</span>
    </div>
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
  .integrity {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    span {
      padding: 0 20px;
      color: #fff;
    }
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