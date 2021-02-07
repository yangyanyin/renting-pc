<template>
  <div class="home-new-house w1200px mt80">
    <Title title="新加坡最新房产资讯" :more="titleMore" />

    <div class="list clearfix">
      <router-link to="/n/d/a">
        <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        <h3>在这里，中国爹妈发现了性价比最高的“跳板”1</h3>
        <p>除了在东南亚置业，中国人在东南亚又发现了新的宝藏——学校，尤其是小学和初中国际学校。 最近，泰国正流传着一个重磅新闻。由于中国留学生激增，泰国一所国际学校2018年盈利飙升至9700万泰铢，比2017年足足翻了四倍多。</p>
        <span>2021-1-22</span>
      </router-link>
      <router-link to="/n/d/a">
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
          url: '/n/s'
        }
      ]
    }
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