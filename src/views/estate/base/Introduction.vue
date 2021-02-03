<template>
  <div class="introduction mt80 w1200px">
    <h3>
      <img :src="introduction.image" :alt="introduction.title" />
      <i>{{ introduction.title }}</i>
    </h3>
    <p>{{ introduction.des }}</p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: Object
  }
}
</script>
<style lang="less" scoped>
.introduction {
  text-align: center;
  h3 {
    position: relative;
    i {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      font-size: 28px;
      color: #fff;
      transform: translateY(-50%);
    }
  }
  p {
    margin-top: 30px;
    font-size: 18px;
    line-height: 34px;
  }
}
</style>