<template>
  <div class="home-estate w1200px">
    <Title title="商业地产" :more="titleMore" />
    <div class="estate-list">
      <div class="item">
        <router-link to="/" class="img">
          <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="商业地产" />
        </router-link>
        <router-link to="/" tag="h3">Asia Square | 亚洲广场</router-link>
        <p>12 Marina View Singapore 018961</p>
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
          text: '查看更多',
          url: '/'
        }
      ]
    }
  }
}
</script>