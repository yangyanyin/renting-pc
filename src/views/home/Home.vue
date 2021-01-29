<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader />

    <!-- Banner -->
    <HomeBanner />

    <!-- 新房咨询 -->
    <NewHouse />

    <!-- 其他 -->
    <Other />

    <!-- 新房列表 -->
    <HouseList />
    <BuyHouseAdvisory />

    <!-- 二手好房 -->
    <HouseList />
    <BuyHouseAdvisory />

    <!-- 租房 -->
    <HouseList />
    <BuyHouseAdvisory />

    <!-- 商业地产 -->
    <Estate />

  </div>
</template>
<script>
import HomeHeader from './base/HomeHeader'
import HomeBanner from './base/HomeBanner'
import NewHouse from './base/NewHouse'
import Other from './base/Other'
import HouseList from './base/HouseList'
import BuyHouseAdvisory from './base/BuyHouseAdvisory'
import Estate from './base/Estate'
export default {
  components: {
    HomeHeader,
    HomeBanner,
    NewHouse,
    Other,
    HouseList,
    BuyHouseAdvisory,
    Estate
  }
  
}
</script>