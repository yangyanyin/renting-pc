<template>
  <div class="home-new-house w1200px mt80">
    <Title title="新加坡最新房产资讯" :more="titleMore" />

    <div class="list clearfix">
      <router-link :to="'/n/d/' + item.id" v-for="(item, k) in newsList" :key="k">
        <img :src="item.img" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <span>{{ item.created_at ? item.created_at.split(' ')[0] : '' }} </span>
      </router-link>
    </div>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  data () {
    return {
      newsList: [],
      titleMore: [
        {
          text: '查看更多',
          url: '/n/s'
        }
      ]
    }
  },
  mounted () {
    const params = {
      page: 1,
      size: 2,
      category_id: 1
    }
    this.$httpApi.newsListApi(params).then(res => {
      if (res.code === 200) {
        this.newsList = res.data.news_list
      }
    })
  }
}
</script>
<style scoped lang="less">
.home-new-house {
  .list {
    padding: 18px 20px;
    border: 1px solid #C9C9C9;
    a {
      float: left;
      position: relative;
      width: 550px;
      padding-left: 236px;
      height: 122px;
      &:hover {
        color: #24A10F;
      }
      &:last-child {
        margin-left: 50px;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 216px;
        height: 122px;
      }
      h3 {
        padding: 5px 0 10px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: .3s;
      }
      p {
        height: 54px;
        font-size: 12px;
        color: #7C7C7C;
        line-height: 18px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: no */
      }
      span {
        display: block;
        margin-top: 10px;
        font-size: 12px;
        color: #7C7C7C;
      }
    }
  }
}
</style>