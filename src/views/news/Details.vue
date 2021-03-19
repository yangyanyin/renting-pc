<template>
  <div class="details">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="content clearfix w1200px">
      <Loading v-if="!newsData.title" />
      <template v-else>
        <div class="left">
          <div class="title">
            <h3>{{ newsData.title }}</h3>
            <p>发布时间：{{ newsData.created_at.split(' ')[0] }}  阅读次数：{{ newsData.read_count }}次</p>
          </div>
          <div class="new-html" v-html="newsData.content"></div>
          <div class="context mt80">
            <p v-if="prevNews.title">上一篇：<router-link :to="'/n/d/' + prevNews.id ">{{prevNews.title}}</router-link></p>
            <p v-if="nextNews.title">下一篇：<router-link :to="'/n/d/' + nextNews.id ">{{nextNews.title}}</router-link></p>
          </div>
          <div class="related">
            <h2>相关推荐</h2>
            <NewsItem v-for="(item, k) in recommendNews" :item="item" :key="k" />
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
import NewsItem from './base/NewsItem'
import Loading from '../../components/base/Loading'

export default {
  components: {
    BreadcrumbList,
    DetailsRecommend,
    HotNews,
    NewsItem,
    Loading
  },
  data () {
    return {
      newsData: {},
      prevNews: {},
      nextNews: {},
      recommendNews: []
    }
  },
  computed: {
    breadcrumb () {
      return [
        {
          url: '/n/s',
          name: '最新房产资讯'
        },
        {
          url: this.$route.path,
          name: this.newsData.title
        }
      ]
    }
  },
  mounted () {
    const params = {
      id: this.$route.params.id
    }
    this.$httpApi.newsDetailsApi(params).then(res => {
      if (res.code === 200) {
        this.newsData = res.data.news
        this.prevNews = res.data.prev_news || {}
        this.nextNews = res.data.next_news || {}
      }
    })
    this.$httpApi.recommendNewsApi().then(res => {
      if (res.code === 200) {
        this.recommendNews = res.data.recommend_news_list
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details {
  .content {
    margin-top: 30px;
  }
  .left {
    width: 710px;
    .title {
      padding: 20px 0;
      border-bottom: 1px solid #f7f7f7;
      h3 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      p {
        font-size: 12px;
        color: #7C7C7C;
      }
    }
    .new-html {
      padding: 20px 0;
      img {
        max-width: 100%;
      }
    }
    .context {
      padding: 13px 20px;
      border-left: 3px solid #35A590;
      background: #F5F5F5;
      p {
        padding: 5px 0;
        color: #35A590;
      }
    }
    .related {
      margin-top: 50px;
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