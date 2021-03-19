<template>
  <div class="news-banner">
    <VueSlickCarousel v-bind="settings">
      <div class="item" v-for="(item, k) in newsBanner" :key="k">
        <router-link :to="'/n/d' + item.id">
          <h3>{{ item.title }}</h3>
          <img :src="item.img" :alt="item.title">
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    props: {
      newsBanner: Array
    },
    data () {
      return {
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnDotsHover: true,
          pauseOnFocus: true,
          pauseOnHover: true
        }
      }
    }
  }
</script>
<style lang="less" scoped>
.news-banner {
  .item {
    position: relative;
    h3 {
      position: absolute;
      top: 36px;
      left: 40px;
      right: 40px;
      font-size: 20px;
      color: #fff;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  
}
</style>
<style lang="less">
.news-banner {
  .slick-dots {
    display: inline-block !important;
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: auto;
    padding: 2px 10px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    transform: translateX(-50%);
    li {
      float: left;
      button:before {
        color: #fff;
      }
    }
  }
  .slick-arrow {
    display: none !important;
  }
}
</style>