<template>
  <div class="item">
    <router-link to="/" class="a-img">
      <img :src="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="link + item._id" tag="h3">{{ item.title }}</router-link>
    <div class="price">{{ item.price }} <i>{{priceType}}</i></div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    link: String
  },
  computed: {
    priceType () {
      if (this.$route.name === 'new house') {
        return '万起'
      }
      if (this.$route.name === 'second hand') {
        return '万'
      }
      return '万起'
    }
  }
}
</script>
<style scoped lang="less">
.item {
  margin-top: 20px;
  h3 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .price {
    margin-top: 8px;
    font-size: 16px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 12px;
    }
  }
}
</style>