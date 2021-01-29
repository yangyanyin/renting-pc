<template>
  <div class="breadcrumb-list">
    <div class="w1200px">
      <router-link to="/">首页</router-link>
    </div>
  </div>
</template>
<style scoped lang="less">
.breadcrumb-list {
  height: 50px;
  line-height: 50px;
  background: #f5f5f5;
  border-bottom: 1px solid #C9C9C9;
  a {
    color: #7C7C7C;
    font-size: 12px;
    &:hover {
      color: #24A10F;
    }
  }
}
</style>