<template>
  <div class="photo">
    <h3 class="other-t">房源相册</h3>
    <div class="list">
      <strong>效果图</strong>
      <HousePhoto @viewBigImg="viewBigImg" :imagesArr="photoAll.effect_picture" />
      <strong>样板间</strong>
      <HousePhoto @viewBigImg="viewBigImg" :imagesArr="photoAll.sample_room"/>
      <strong>周边配套</strong>
      <HousePhoto @viewBigImg="viewBigImg" :imagesArr="photoAll.matching"/>
    </div>
    <div class="big-img" v-if="bigImgUrl">
      <div class="content">
        <span class="close" @click="viewBigImg('')"></span>
        <img :src="bigImgUrl" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import HousePhoto from '../../../components/base/HousePhoto'
export default {
  components: {
    HousePhoto
  },
  props: {
    photoAll: Object
  },
  data () {
    return {
      bigImgUrl: ''
    }
  },
  methods: {
    viewBigImg (url) {
      this.bigImgUrl = url
    }
  }
}
</script>
<style scoped lang="less">
.photo {
  strong {
    display: block;
    padding: 30px 0 10px;
    font-weight: normal;
  }
}
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