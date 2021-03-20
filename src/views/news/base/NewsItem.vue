<template>
  <div class="item">
    <img :src="item.img" :alt="item.title" />
    <router-link :to="'/n/d/' + item.id" tag="h3">{{ item.title }}</router-link>
    <p>{{ item.description }}</p>
    <span>{{ item.created_at ? item.created_at.split(' ')[0] : '' }}</span>
    <router-link :to="'/n/d/' + item.id">查看详情</router-link>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>
<style lang="less" scoped>
.item {
  position: relative;
  height: 136px;
  margin-top: 22px;
  padding: 0 0 22px 225px;
  border-bottom: 1px solid #C9C9C9;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 205px;
    height: 116px;
  }
  h3 {
    padding-top: 5px;
    font-size: 16px;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: no */
  }
  p {
    font-size: 12px;
    margin-top: 10px;
    line-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: no */
  }
  span {
    display: block;
    margin-top: 20px;
    color: #7C7C7C;
  }
  a {
    position: absolute;
    right: 0;
    bottom: 19px;
    padding-right: 17px;
    color: #24A10F;
    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 2px;
      width: 7px;
      height: 7px;
      border-top: 2px solid #24A10F;
      border-right: 2px solid #24A10F;
      border-radius: 2px;
      transform: rotate(45deg);
      transition: .3s;
    }
  }
}
</style>