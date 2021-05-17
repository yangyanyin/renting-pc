<template>
  <div class="item">
    <router-link :to="link + item._id" class="a-img">
      <rentImg class="img-object" :url="item.image" :alt="item.title" />
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
      return '/月'
    }
  }
}
</script>
<style scoped lang="less">
.item {
  margin-top: 20px;
  a {
    display: block;
    width: 178px;
    height: 80px;
  }
  h3 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .price {
    margin-top: 5px;
    font-size: 16px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 12px;
    }
  }
}
</style>