<template>
  <div class="conveniences">
    <h3 class="other-t">便利设施</h3>
    <ul class="clearfix">
      <li v-for="(item, k) in facilities" :key="k">
        <img :src="item.image" :alt="item.title" />
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    facilities: Array
  }
}
</script>
<style lang="less" scoped>
.conveniences {
  ul {
    padding-top: 5px;
    li {
      float: left;
      width: 120px;
      height: 81px;
      margin: 20px 27px 0 0;
      text-align: center;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      &:nth-child(5n+0) {
        margin-right: 0;
      }
      img {
        width: 30px;
        margin: 10px auto 5px;
      }
    }
  }
}
</style>