<template>
  <div class="view-image">
    <VueSlickCarousel v-bind="settings">
      <img src="https://waterlandcap.com/img/Vanuatu-img.2fa78183.jpg" alt="" />
      <img src="https://waterlandcap.com/img/Cyprus-img.faf39e14.jpg" alt="" />
      <img src="https://waterlandcap.com/img/Antigua-img.412a1e3c.jpg" alt="" />
      <img src="https://waterlandcap.com/img/SaintKitts-img.5ac9c1a5.jpg" alt="" />
      <img src="https://waterlandcap.com/img/SaintLucia-img.6adc2d9a.jpg" alt="" />
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
  data () {
    return {
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
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
