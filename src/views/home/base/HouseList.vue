<template>
  <div class="home-house-list">
    <Title title="精选优质新房" :more="titleMore" />
    <div class="product-list clearfix">
      <div class="item">
        <router-link to="/" class="img">
          <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        </router-link>
        <router-link to="/" tag="h3">2019年最值得投资的楼盘，南峰雅苑</router-link>
        <p>2-5室 / 96-116㎡</p>
        <span class="price">$105 <i>万起</i></span>
      </div>

    </div>
    <router-link class="view-all">查看全部</router-link>
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
      titleMore: [
        {
          text: '东部',
          url: '/'
        },
        {
          text: '西部',
          url: '/'
        },
        {
          text: '市区',
          url: '/'
        },
        {
          text: '中部',
          url: '/'
        },
        {
          text: '南部',
          url: '/'
        },
        {
          text: '北部',
          url: '/'
        },
        {
          text: '东北部',
          url: '/'
        }
      ]
    }
  }
}
</script>