<template>
  <div class="item">
    <router-link :to="routerLink + item._id" class="a-img">
      <rentImg class="img-object" :url="item.image" :alt="item.title" />
    </router-link>
    <a class="vr" :href="item.vr_link" target="_blank" v-if="item.vr_link">
      <img src="../../../assets/image/vr_icon.gif">
      VR看房
    </a>
    <router-link :to="routerLink + item._id" tag="h3">
      {{ item.title }} 
      <i v-for="(name, k) in item.title_tags" :key="'00' + k">{{name}}</i>
    </router-link>
    <p class="traffic">交通：
      <template v-if="item.traffic.length > 0">
        <i v-for="(item, k) in item.traffic" :key="k" :style="{background: item.color}">{{ item.name }}</i>
      </template>
      <template v-else>暂无详细信息</template>
    </p>
    <p class="address" v-if="item.addr">地址：{{ item.addr }}</p>
    <p class="type">
      <template v-if="type === 'renting'">
        <i v-if="item.house_model">{{ item.house_model[0] }}  {{ item.area}}</i>
      </template>
      <template >
        <i v-for="(item, k) in item.house_types" :key="k">{{ item.type }}</i>
      </template>
    </p>
    <ul class="label" v-if="item.house_tags && item.house_tags.length">
      <li v-for="(name, k) in item.house_tags" :key="k">{{ name }}</li>
    </ul>
    <div class="price"> {{ item.price }} <i>{{ priceType }}</i></div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    type: String
  },
  computed: {
    priceType () {
      const name = this.$route.name
      const searchName = this.$route.params.search
      if (name === 'new house' || searchName === 'new-house') {
        return '万起'
      }
      if (name === 'second hand' || searchName === 'second-hand') {
        return '万'
      }
      return '/月'
    },
    routerLink () {
      const routes = {
        'new house': '/c/new-house/',
        'renting': '/c/renting/',
        'second hand': '/c/second-hand/'
      }
      if (this.$route.params.search) {
        return routes[this.$route.params.search.replace('-', ' ')] || {}
      } else {
        return [routes[this.$route.name]]
      }
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
  .vr {
    position: absolute;
    z-index: 9;
    left: 5px;
    top: 148px;
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
      // width: 32px;
      padding: 0 5px;
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
      padding-right: 100px;
      i {
        position: relative;
        color: #7C7C7C;
        padding-right: 10px;
        &:first-child {
          margin-left: 0;
        }
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