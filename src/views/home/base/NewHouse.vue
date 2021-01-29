<template>
  <div class="hone-new-house w1200px">
    <Title title="新加坡最新房产资讯" :more="titleMore" />

    <div class="list clearfix">
      <router-link to="/">
        <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        <h3>在这里，中国爹妈发现了性价比最高的“跳板”</h3>
        <p>除了在东南亚置业，中国人在东南亚又发现了新的宝藏——学校，尤其是小学和初中国际学校。 最近，泰国正流传着一个重磅新闻。由于中国留学生激增，泰国一所国际学校2018年盈利飙升至9700万泰铢，比2017年足足翻了四倍多。</p>
        <span>2021-1-22</span>
      </router-link>
      <router-link to="/">
        <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        <h3>在这里，中国爹妈发现了性价比最高的“跳板”</h3>
        <p>除了在东南亚置业，中国人在东南亚又发现了新的宝藏——学校，尤其是小学和初中国际学校。 最近，泰国正流传着一个重磅新闻。由于中国留学生激增，泰国一所国际学校2018年盈利飙升至9700万泰铢，比2017年足足翻了四倍多。</p>
        <span>2021-1-22</span>
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