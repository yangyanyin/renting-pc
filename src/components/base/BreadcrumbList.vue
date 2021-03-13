<template>
  <div class="breadcrumb-list">
    <div class="w1200px">
      <router-link to="/">首页</router-link>
      <template v-for="(item, k) in breadcrumb">
        <router-link v-if="item && item.url && item.name" :key="k" :to="item.url">{{ item.name }}</router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style scoped lang="less">
.breadcrumb-list {
  height: 50px;
  line-height: 50px;
  background: #f5f5f5;
  border-bottom: 1px solid #C9C9C9;
  a {
    position: relative;
    margin-right: 20px;
    color: #7C7C7C;
    font-size: 12px;
    &:last-child {
      &::after {
        display: none;
      }
    }
    &:hover {
      color: #24A10F;
    }
    &:after {
      content: '';
      position: absolute;
      top: 4px;
      right: -11px;
      width: 6px;
      height: 6px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
      opacity: 0.5;
    }
  }
}
</style>