<template>
  <div class="home-house-list w1200px mt80">
    <!-- <Title :title="housesType.name" :more="titleMore" /> -->
    <Title :title="housesType.name" />
    <div class="product-list clearfix" v-if="housesData.length > 0">
      <div class="item left" v-for="(item, k) in housesData" :key="k">
        <router-link :to="`${housesType.url}/${item._id}`" class="a-img">
          <rentImg class="img-object" :url="item.image" :alt="item.title" />
        </router-link>
        <router-link :to="`${housesType.url}/${item._id}`" tag="h3"> {{item.title}} </router-link>

        <p v-if="item.house_types && item.house_types.length > 0"> {{item.house_types[0].type}} / {{item.house_types[0].area}} </p>
        <span class="price"> {{item.price}} <i>{{housesType.unit}}</i></span>
        <a class="vr" :href="item.vr_link" target="_blank" v-if="item.vr_link">
          <img src="../../../assets/image/vr_icon.gif">
          VR看房
        </a>
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
          unit: '万起'
        },
        'second hand': {
          url: '/c/second-hand',
          name: '新加坡二手好房',
          unit: '万'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房',
          unit: '/月'
        }
      }
      return routes[this.type] || {}
    }
  }
}
</script>
<style scoped lang="less">
.product-list {
  .item {
    position: relative;
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
    .vr {
      position: absolute;
      z-index: 9;
      left: 5px;
      top: 130px;
      width: 100px;
      height: 26px;
      padding-right: 20px;
      line-height: 26px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      background: rgba(0, 0, 0, 0.9);
      border-radius: 3px;
      opacity: 0.8;
      transition: 0.3s;
      img {
        display: inline-block;
        width: 34px;
        height: auto;
      }
      &:after {
        content: '';
        position: absolute;
        right: 14px;
        top: 10px;
        width: 5px;
        height: 5px;
        border-right: 1px solid #fff;
        border-top: 1px solid #fff;
        transform: rotate(45deg);
        transition: 0.3s;
      }
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
      width: 285px;
      height: 160px;
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
  padding-left: 54px;
  background: #FFFFFF;
  border: 1px solid #24A10F;
  color: #24A10F;
  border-radius: 5px;
  line-height: 48px;
  transition: .3s;
  &::after {
    content: '';
    position: absolute;
    top: 19px;
    right: 55px;
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