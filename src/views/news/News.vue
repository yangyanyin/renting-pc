<template>
  <div class="news">
    <BreadcrumbList />
    <div class="content clearfix w1200px">
      <div class="left">
        <NewsBanner />
        <div class="list">
          <h2>新闻列表</h2>
          <NewsItem v-for="(i, k) in 10" :key="k" />
          
        </div>
      </div>
      <div class="right">
        <HotNews />
        <DetailsRecommend />
      </div>
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import DetailsRecommend from '../../components/base/DetailsRecommend'
import HotNews from './base/HotNews'
import NewsBanner from './base/NewsBanner'
import NewsItem from './base/NewsItem'
export default {
  components: {
    BreadcrumbList,
    DetailsRecommend,
    HotNews,
    NewsBanner,
    NewsItem
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