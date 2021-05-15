<template>
  <div class="item left">
    <router-link :to="`/estate/${type}/${item._id}`" class="a-img">
      <rentImg class="img-object" :url="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="`/estate/${type}/${item._id}`" tag="strong">{{item.title}}</router-link>
    <p>{{item.addr}}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    },
    type: String
  }
}
</script>
<style lang="less" scoped>
.item {
  width: 386px;
  margin: 30px 20px 0 0;
  text-align: center;
  &:nth-child(3n+0) {
    margin-right: 0;
  }
  .a-img {
    display: block;
    border-radius: 5px;
    overflow: hidden;
    width: 386px;
    height: 217px;
    img {
      transition: .3s;
    }
  }
  strong {
    display: block;
    font-size: 20px;
    margin: 20px 0 10px;
    transition: .3s;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    &:hover {
      color: #24A10F;
    }
  }
  p {
    font-size: 14px;
    color: #7C7C7C;
  }
  &:hover {
    .a-img img {
      transform: scale(1.2);
    }
  }
}
</style>