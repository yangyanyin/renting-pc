<!-- 新楼盘 -->
<template>
  <div class="category">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <SearchBox />
    <Filters v-if="breadcrumb.length > 0 && !this.$route.query.keyword" :category="breadcrumb[0].name" />
    <Loading v-if="total < 0 || pageLoading"/>
    <ProductList v-else :productData="productData" :total="total" :categoryLink="breadcrumb[0] ? breadcrumb[0].url : ''" />
    <Pagination v-if="total > 10" :total="total" @clickPage="clickPage" />
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import SearchBox from './base/SearchBox'
import Filters from './base/Filters'
import ProductList from './base/ProductList'
import Pagination from '../../components/base/Pagination'
import Loading from '../../components/base/Loading'
export default {
  name: 'category',
  components: {
    BreadcrumbList,
    SearchBox,
    Filters,
    ProductList,
    Pagination,
    Loading
  },
  data () {
    return {
      productData: [],
      total: -1,
      page: 1,
      pageLoading: false
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'new house': {
          url: '/c/new-house',
          name: '新楼盘',
          api: 'new_house'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房',
          api: 'rented_house'
        },
        'second hand': {
          url: '/c/second-hand',
          name: '二手公寓',
          api: 'second_hand_house'
        }
      }
      return [routes[this.$route.name]]
    }
  },
  methods: {
    clickPage (page) {
      page = page + 1
      const path = this.$route.path
      this.$router.push({
        path: path,
        query: {
          page: page
        }
      })
      this.getProductList(page)
    },
    getProductList (page) {
      this.page = page
      const region = this.$route.query.region
      const house = this.$route.query.house
      const price = this.$route.query.price
      const area = this.$route.query.area
      const sort = this.$route.query.sort
      const keyword = this.$route.query.keyword
      const params = {
        page: this.page,
        size: 10,
        price_index: price,
        area_index: area,
        house_index: house,
        region_index: region,
        sort: sort,
        keyword: keyword,
        api_url: this.breadcrumb[0].api
      }
      this.pageLoading = true
      this.$httpApi.categoryListApi(params).then(res => {
        this.productData = res.data.new_houses || res.data.second_hand_houses || res.data.rented_houses
        this.total = res.data.total
        this.pageLoading = false
      })
    }
  },
  mounted () {
    const p = this.$route.query.page || 1
    this.getProductList(p)
  }
}
</script>