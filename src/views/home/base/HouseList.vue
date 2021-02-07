<template>
  <div class="home-house-list w1200px mt80">
    <Title title="精选优质新房" :more="titleMore" />
    <div class="product-list clearfix">
      <div class="item left" v-for="(i, k) in 8" :key="k">
        <router-link to="/c/d/qwe" class="a-img">
          <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        </router-link>
        <router-link to="/c/d/qwe" tag="h3">2019年最值得投资的楼盘，南峰雅苑</router-link>
        <p>2-5室 / 96-116㎡</p>
        <span class="price">$105 <i>万起</i></span>
      </div>

    </div>
    <router-link to="/" class="view-all">查看全部</router-link>
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
<style scoped lang="less">
.product-list {
  .item {
    width: 285px;
    margin: 0 20px 40px 0;
    &:hover {
      h3 {
        color: #24A10F;
      }
      img {
        transform: scale(1.1);
      }
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
      img {
        transition: .3s;
      }
    }
    h3 {
      font-size: 18px;
      padding: 14px 0 8px;
      transition: .3s;
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
    }
    span {
      display: block;
      margin-top: 15px;
      color: #BF3F3F;
      font-size: 20px;
      i {
        font-size: 14px;
      }
    }
  }
}
.view-all {
  position: relative;
  display: block;
  width: 184px;
  height: 50px;
  margin: auto;
  background: #FFFFFF;
  border: 1px solid #24A10F;
  color: #24A10F;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
  transition: .3s;
  &::after {
    content: '';
    position: absolute;
    top: 19px;
    right: 45px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #24A10F;
    border-right: 2px solid #24A10F;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: .3s;
  }
  &:hover {
    color: #fff;
    background: #24A10F;
    &:after {
      border-color: #fff;
    }
  }
}
</style>