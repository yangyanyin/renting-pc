<template>
  <div class="item">
    <router-link :to="routerLink + item._id" class="a-img">
      <img :src="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="routerLink + item._id" tag="h3">{{ item.title }} <i>公寓</i></router-link>
    <p class="traffic">交通：
      <i v-for="(name, k) in item.traffic" :key="k">{{ name }}</i>
    </p>
    <p class="address">地址：{{ item.addr }}</p>
    <p class="type">
      <i v-for="(item, k) in item.house_types" :key="k">{{ item.type }}</i>
    </p>
    <ul class="label" v-if="item.house_tags.length">
      <li v-for="(name, k) in item.house_tags" :key="k">{{ name }}</li>
    </ul>
    <div class="price"> {{ item.price }} <i>{{ priceType }}</i></div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  computed: {
    priceType () {
      if (this.$route.name === 'new house') {
        return '万起'
      }
      if (this.$route.name === 'second hand') {
        return '万'
      }
      return ''
    },
    routerLink () {
      const routes = {
        'new house': '/c/new-house/',
        'renting': '/c/renting/',
        'second hand': '/c/second-hand/'
      }
      return [routes[this.$route.name]]
    }
  }
}
</script>
<style scoped lang="less">
.item {
  position: relative;
  height: 200px;
  margin-top: 20px;
  padding: 0 0 20px 345px;
  border-bottom: 1px solid #C9C9C9;
  .price {
    position: absolute;
    top: 80px;
    right: 0;
    font-size: 24px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 16px;
    }
  }
  .a-img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 320px;
    height: 180px;
    overflow: hidden;
  }
  h3 {
    padding-top: 5px;
    font-size: 17px;
    cursor: pointer;
    i {
      display: inline-block;
      position: relative;
      top: -2px;
      width: 32px;
      margin-left: 10px;
      line-height: 18px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: #24A10F;
      border-radius: 2px;
    }
  }
  p {
    font-size: 12px;
    margin-top: 20px;
    i {
      display: inline-block;
      height: 20px;
      margin: 0 5px;
      line-height: 20px;
    }
    &.type {
      margin-top: 13px;
      i {
        position: relative;
        color: #7C7C7C;
        padding-right: 10px;
        &:last-child {
          padding-right: 0;
          &::after {
            display: none;
          }
        }
        &:after {
          content: '';
          position: absolute;
          right: 0;
          top: 5px;
          width: 1px;
          height: 10px;
          background: #7C7C7C;
        }
      }
    }
    &.traffic {
      i {
        padding: 0 10px;
        color: #fff;
        background: #E12129;
        border-radius: 90px;
      }
    }
  }
  ul.label {
    margin-top: 10px;
    li {
      display: inline-block;
      height: 24px;
      margin-right: 12px;
      padding: 0 8px;
      font-size: 12px;
      line-height: 24px;
      color: #7C7C7C;
      background: #F5F5F5;
      border-radius: 2px;
    }
  } 
}
</style>