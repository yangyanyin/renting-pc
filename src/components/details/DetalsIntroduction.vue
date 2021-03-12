<template>
  <div class="introduction">
    <h3 class="other-t">房源介绍</h3>
    <p>{{ introduction }}</p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: String
  }
}
</script>
<style lang="less" scoped>
.introduction {
  p {
    margin-top: 27px;
    line-height: 24px;
    font-size: 12px;
  }
}
</style>