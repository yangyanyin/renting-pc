<template>
  <div class="news">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="content clearfix w1200px">
      <Loading v-if="newsList.length === 0" />
      <template v-if="newsList.length > 0">
        <div class="left">
          <NewsBanner :newsBanner="bannerNewsList" />
          <div class="list">
            <h2>{{ breadcrumb[0].name }}</h2>
            <NewsItem v-for="(item, k) in newsList" :item="item" :key="k" :cUrl="breadcrumb[0].url" />
          </div>
        </div>
        <div class="right">
          <HotNews />
          <DetailsRecommend />
        </div>
      </template>
      
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import DetailsRecommend from '../../components/details/DetailsRecommend'
import HotNews from './base/HotNews'
import NewsBanner from './base/NewsBanner'
import NewsItem from './base/NewsItem'
import Loading from '../../components/base/Loading'

export default {
  components: {
    BreadcrumbList,
    DetailsRecommend,
    HotNews,
    NewsBanner,
    NewsItem,
    Loading
  },
  data () {
    return {
      newsList: [],
      bannerNewsList: []
    }
  },
  computed: {
    breadcrumb () {
      const data = {
        'must-see': {
          id: 1,
          name: '买房必看',
          url: '/n/must-see'
        },
        'property': {
          id: 3,
          name: '产权交易',
          url: '/n/property'
        },
        'faq': {
          id: 4,
          name: '常见问题',
          url: '/n/faq'
        },
        'guide': {
          id: 5,
          name: '购房指南',
          url: '/n/guide'
        }
      }
      return [data[this.$route.params.name]]
    }
  },
  mounted () {
    const params = {
      category_id: this.breadcrumb[0].id
    }
    this.$httpApi.newsListApi(params).then(res => {
      if (res.code === 200) {
        if (this.bannerNewsList.length === 0) {
          this.bannerNewsList = res.data.news_list.slice(0, 4)
        }
        this.newsList = res.data.news_list
      }
    })
  }
}
</script>
<style lang="less" scoped>
.news {
  .content {
    margin-top: 30px;
  }
  .left {
    width: 710px;
    .list {
      margin-top: 40px;
      h2 {
        border-top: 3px solid #57A291;
        line-height: 46px;
        font-size: 20px;
        padding-left: 20px;
        background: #F5F5F5;
      }
    }
  }
  .right {
    width: 450px;
  }
}
</style>