<!-- 新楼盘 -->
<template>
  <div class="search">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <SearchBox />
    <Loading v-if="total < 0 || pageLoading"/>
    <ProductList v-else :productData="productData" :total="total" :categoryLink="breadcrumb[0] ? breadcrumb[1].url : ''" />
    <Pagination v-if="total > 10" :total="total" @clickPage="clickPage" />
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import SearchBox from './base/SearchBox'
import ProductList from './base/ProductList'
import Pagination from '../../components/base/Pagination'
import Loading from '../../components/base/Loading'
export default {
  name: 'search',
  components: {
    BreadcrumbList,
    SearchBox,
    ProductList,
    Pagination,
    Loading,
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
        'new-house': {
          url: this.$route.fullPath,
          name: '新楼盘',
          type: 'new_house'
        },
        'renting': {
          url: this.$route.fullPath,
          name: '狮城租房',
          type: 'rented_house'
        },
        'second-hand': {
          url: this.$route.fullPath,
          name: '二手公寓',
          type: 'second_hand_house'
        }
      }
      return [
        {
          name: '搜索',
          url: this.$route.fullPath
        }, 
        routes[this.$route.params.search]
      ]
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
      this.getSearchList(page)
    },
    getSearchList (page) {
      this.page = page
      const keyword = this.$route.query.keyword
      const params = {
        page: this.page,
        size: 10,
        type: this.breadcrumb[1].type,
        keyword: keyword
      }
      this.pageLoading = true
      this.$httpApi.search(params).then(res => {
        this.productData = res.data.houses
        this.total = res.data.total || res.data.houses.length
        this.pageLoading = false
      })
    }
  },
  mounted () {
    const p = this.$route.query.page || 1
    this.getSearchList(p)
  }
}
</script>