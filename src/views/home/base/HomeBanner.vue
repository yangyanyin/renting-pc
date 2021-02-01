<template>
  <div class="banner">
    <img class="b-img" src="../../../assets/image/home-banner.jpg"  alt="新加坡看公寓网" />
    <SearchBar class="search-banner" />
    <div class="integrity">
      <span>
        <img src="../../../assets/image/integrity-icon.png" alt="诚信为本" />
        诚信为本
      </span>
      <span>
        <img src="../../../assets/image/strength-icon.png" alt="实力铸造" />
        实力铸造
      </span>
      <span>
        <img src="../../../assets/image/sincere-icon.png" alt="真诚服务" />
        真诚服务
      </span>
      <span>
        <img src="../../../assets/image/real-icon.png" alt="100%真实房源" />
        100%真实房源
      </span>
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
  overflow: hidden;
  .b-img {
    position: absolute;
    left: 50%;
    width: auto;
    height: 560px;
    transform: translateX(-50%);
  }
  .integrity {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      padding: 0 20px;
      line-height: 20px;
      color: #fff;
      img {
        float: left;
        width: 20px;
        margin-right: 7px;
      }
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