<template>
  <div class="images details-images">
    <div class="big-img">
      <img :src="bigImage" alt="">
    </div>
    <div class="small-img">
      <HousePhoto :imagesArr="imagesArr" :slidesToShow="4" :slidesToScroll="4" :infinite="false" @viewBigImg="viewBigImg" />
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
  props: {
    imagesArr: Array
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
  },
  mounted () {
    this.bigImage = this.imagesArr[0]
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
<style lang="less">
.details-images {
  .slick-slide {
    height: 80px;
    img {
      height: 80px;
    }
  }
  .slick-arrow {
    width: 30px;
    height: 80px;
    border-radius: 0;
    background: #C4C4C4;
    cursor: pointer;
    &.slick-prev {
      left: -39px;
    }
    &.slick-next {
      right: -39px;
    }
    &:before {
      top: 30px;
    }
    &:hover {
      background: #969696;
    }
  }
}

// button {
//       position: absolute;
//       top: 0;
//       width: 30px;
//       height: 80px;
//       background: #C4C4C4;
//       cursor: pointer;
//       &:hover {
//         background: #969696;
//       }
//       &.prev {
//         left: 0;
//       }
//       &.next {
//         right: 0;
//         &::after {
//           left: auto;
//           right: 12px;
//           transform: rotate(135deg);
//         }
//       }
//       &::after {
//         content: '';
//         position: absolute;
//         top: 36px;
//         left: 12px;
//         width: 8px;
//         height: 8px;
//         border-left: 1px solid #fff;
//         border-top: 1px solid #fff;
//         transform: rotate(-45deg);
//       }
//     }
</style>