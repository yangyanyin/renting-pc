<template>
  <div class="home-title clearfix">
    {{title}}
    <div class="more right" v-if="more.length > 0">
      <router-link v-for="(item, key) in more" :to="item.url" :key="key">{{item.text}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    more: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style scoped lang="less">
.home-title {
  height: 42px;
  font-size: 30px;
  margin-bottom: 30px;
  .more {
    a {
      display: inline-block;
      margin-left: 20px;
      font-size: 16px;
      &:hover {
        color: #24A10F;
      }
    }
  }
}
</style>