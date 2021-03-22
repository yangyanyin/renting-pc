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
    <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory1" />

    <!-- 二手好房 -->
    <HouseList />
    <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory2" />

    <!-- 租房 -->
    <HouseList />
    <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory3" />

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
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner,
    NewHouse,
    Other,
    HouseList,
    BuyHouseAdvisory,
    Estate
  },
  data () {
    return {
      buyHouseAdvisory1: {
        title: '<i style="color: #BF3F3F;">新加坡买房交易</i>流程常见问题汇总',
        des: '让您从购屋新手秒变购房达人！让您直观了解买房如何汇款以及其它常见买房疑问信息汇总，置业疑惑，认真看好这一篇文章就够啦。',
        more: '/c/new-house'
      },
      buyHouseAdvisory2: {
        title: '<i style="color: #BF3F3F;">卖房/租房</i>众多潜在买家/租户',
        des: '以专业、精准、高效的服务为您争取最大利益',
        more: '/c/second-hand'
      },
      buyHouseAdvisory3: {
        title: '<i style="color: #BF3F3F;">优质的商业地产</i>买卖及租赁',
        des: '为企业、业主提供专业的服务',
        more: '/c/new-house'
      }
    }
  }
}
</script>