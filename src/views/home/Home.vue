<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader />

    <!-- Banner -->
    <HomeBanner />

    <Loading v-if="!homeApiStatus"/>
    <template v-else>
      <!-- 新房咨询 -->
      <NewHouse />

      <!-- 其他 -->
      <Other />

      <!-- 新房列表 -->
      <HouseList :housesData="newHouses" type="new house" />
      <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory1" />

      <!-- 二手好房 -->
      <HouseList :housesData="secondHandedHouses" type="second hand" />
      <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory2" />

      <!-- 租房 -->
      <HouseList :housesData="rentedHouses" type="renting" />
      <BuyHouseAdvisory :buyHouseAdvisory="buyHouseAdvisory3" />

      <!-- 商业地产 -->
      <Estate :businessData="business" />
    </template>

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
import Loading from '../../components/base/Loading'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeBanner,
    NewHouse,
    Other,
    HouseList,
    BuyHouseAdvisory,
    Estate,
    Loading
  },
  data () {
    return {
      buyHouseAdvisory1: {
        title: '<i style="color: #BF3F3F;">新加坡买房交易</i>流程常见问题汇总',
        des: '让您从购屋新手秒变购房达人！让您直观了解买房如何汇款以及其它常见买房疑问信息汇总，置业疑惑，认真看好这一篇文章就够啦。',
        btn: '买房必看',
        more: '/n/must-see',
      },
      buyHouseAdvisory2: {
        title: '<i style="color: #BF3F3F;">卖房/租房</i>众多潜在买家/租户',
        des: '以专业、精准、高效的服务为您争取最大利益',
        btn: '立即咨询',
        more: '/'
      },
      buyHouseAdvisory3: {
        title: '<i style="color: #BF3F3F;">优质的商业地产</i>买卖及租赁',
        des: '为企业、业主提供专业的服务',
        btn: '立即查看',
        more: '/estate'
      },
      newHouses: [],          // 新房
      rentedHouses: [],       // 租房
      secondHandedHouses: [], // 二手房
      business: [],           // 地产
      homeApiStatus: false
    }
  },
  mounted () {
    this.$httpApi.indexApi().then(res => {
      if (res.code === 200) {
        this.newHouses = res.data.newHouses
        this.rentedHouses = res.data.rentedHouses
        this.secondHandedHouses = res.data.secondHandedHouses
        this.business = res.data.business.splice(0, 3)
        this.homeApiStatus = true
      }
    })
  }
}
</script>