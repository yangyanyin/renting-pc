<template>
  <div class="big-img">
    <div class="content">
      <span class="close" @click="closeBigImg('')"></span>
      <img :src="bigImgUrl" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bigImgUrl: String
  },
  methods: {
    closeBigImg () {
      this.$emit('closeBigImg', '')
    }
  }
}
</script>
<style scoped lang="less">
.big-img {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.6);
  .close {
    position: absolute;
    right: -15px;
    top: -15px;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: -1px;
      left: 13px;
      width: 3px;
      height: 30px;
      background: #353535;
      border-radius: 1px;
      transform: rotate(45deg) scale(.5);
    }
    &:before {
      content: '';
      position: absolute;
      top: -1px;
      left: 13px;
      width: 3px;
      height: 30px;
      background: #353535;
      border-radius: 1px;
      transform: rotate(-45deg) scale(.5);
    }
    &:hover {
      &:before, &:after {
        background: #24A10F;
      }
    }
  }
  .content {
    position: absolute;
    z-index: 9;
    left: 50%;
    top: 50%;
    width: 800px;
    height: auto;
    margin-left: -400px;
    background: #fff;
    padding: 5px;
    border-radius: 3px;
    transform: translateY(-50%);
  }
}
</style>