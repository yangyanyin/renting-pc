<template>
  <div class="view-image" v-if="imagesArr">
    <VueSlickCarousel v-bind="settings">
      <rentImg class="img-object" v-for="(img, k) in imagesArr" :key="k" :url="img" @click.native="viewBigImg(k, imagesArr, img)" />
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    slidesToShow: Number,
    slidesToScroll: Number,
    infinite: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    imagesArr: {
      type: Array,
      default: () => {
        return 0
      }
    },
    type: String
  },
  data () {
    return {
      settings: {
        infinite: !this.infinite ? this.infinite : true,
        slidesToShow: this.slidesToShow || 3,
        slidesToScroll: this.slidesToScroll || 1,
        speed: 500
      }
    }
  },
  methods: {
    viewBigImg (k, imagesArr, img) {
      if (this.type) {
        this.$emit('viewBigImg', img)
      } else {
        this.$emit('viewBigImg', k, imagesArr)
      }
    }
  }
}
</script>
<style lang="less">
.view-image {
  margin: 0 -8px;
  .slick-slide {
    padding: 0 8px;
    > div {
      width: 226px;
      height: 126px;
    }
  }
  .slick-arrow {
    z-index: 9;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 100%;
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 7px;
      width: 16px;
      height: 16px;
      opacity: 1;
      background: none;
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      transform: rotate(45deg) scale(.5);
      border-radius: 3px;
    }
    &.slick-prev {
      left: 15px;
    }
    &.slick-next {
      right: 15px;
      &::before {
        left: 3px;
        transform: rotate(-135deg) scale(.5);
      }
    }
  }
}
</style>
