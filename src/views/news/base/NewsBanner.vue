<template>
  <div class="news-banner">
    <VueSlickCarousel v-bind="settings">
      <div class="item">
        <h3>新加坡侨水资本：建立家族信托，为财富传承布局</h3>
        <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="新加坡侨水资本：建立家族信托，为财富传承布局" />
      </div>
      <div class="item">
        <h3>加入全球最大自贸区RCEP 新加坡移民迎来新机遇</h3>
        <img src="https://cms.aicassets.com/images/default/5fd2d5ce978b1.jpeg" alt="加入全球最大自贸区RCEP 新加坡移民迎来新机遇" />
      </div>
      <div class="item">
        <h3>家族财富|带您了解新加坡单一家族办公室的最佳移民方案</h3>
        <img src="https://cms.aicassets.com/images/default/5fadfe33c2cb8.png" alt="家族财富|带您了解新加坡单一家族办公室的最佳移民方案" />
      </div>
      <div class="item">
        <h3>新加坡入境管制再放宽，同时2021年起包括公民在内所有人入境自行承担隔离费用</h3>
        <img src="https://cms.aicassets.com/images/default/5f9bb20aa5981.jpeg" alt="新加坡入境管制再放宽，同时2021年起包括公民在内所有人入境自行承担隔离费用" />
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