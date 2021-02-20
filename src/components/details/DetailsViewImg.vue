<template>
  <div class="images">
    <div class="big-img">
      <img :src="bigImage" alt="">
    </div>
    <div class="small-img">
      <HousePhoto :slidesToShow="4" :slidesToScroll="4" :infinite="false" @viewBigImg="viewBigImg" />
    </div>
    <p>100% 真实房源，100%真实物业图片</p>
  </div>
</template>
<script>
import HousePhoto from '../../components/base/HousePhoto'
export default {
  components: {
    HousePhoto
  },
  data () {
    return {
      bigImage: ''
    }
  },
  methods: {
    viewBigImg (img) {
      this.bigImage = img
    }
  }
}
</script>
<style scoped lang="less">
.images {
  width: 710px;
  text-align: center;
  p {
    display: inline-block;
    margin-top: 30px;
    padding-left: 25px;
    line-height: 16px;
    font-size: 12px;
    color: #24A10F;
    text-align: center;
    background: url('../../assets/image/real-green-icon.png') no-repeat left center;
    background-size: 15px;
  }
  .big-img {
    img {
      height: 400px;
    }
  }
  .small-img {
    position: relative;
    margin-top: 15px;
    padding: 0 47px;
    overflow: hidden;
  }
}
</style>