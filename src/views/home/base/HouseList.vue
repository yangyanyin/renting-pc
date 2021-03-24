<template>
  <div class="home-house-list w1200px mt80">
    <!-- <Title :title="housesType.name" :more="titleMore" /> -->
    <Title :title="housesType.name" />
    <div class="product-list clearfix">
      <div class="item left" v-for="(item, k) in housesData" :key="k">
        <router-link :to="`${housesType.url}/${item._id}`" class="a-img">
          <img :src="item.image" :alt="item.title" />
        </router-link>
        <router-link :to="`${housesType.url}/${item._id}`" tag="h3"> {{item.title}} </router-link>
        <p>2-5室 / 96-116㎡</p>
        <span class="price"> {{item.price}} <i>{{priceType}}</i></span>
      </div>

    </div>
    <router-link :to="housesType.url" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  props: {
    housesData: Array,
    type: String
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
  },
  computed: {
    housesType () {
      const routes = {
        'new house': {
          url: '/c/new-house',
          name: '精选优质新房',
        },
        'second hand': {
          url: '/c/second-hand',
          name: '新加坡二手好房',
          api: 'second_hand_house'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房'
        }
      }
      return routes[this.type] || {}
    },
    priceType () {
      if (this.type === 'new house') {
        return '万起'
      }
      if (this.type === 'second hand') {
        return '万'
      }
      return '/月'
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