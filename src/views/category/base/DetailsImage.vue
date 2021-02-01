<template>
  <div class="images">
    <div class="big-img">
      <img :src="bigImage" alt="">
    </div>
    <div class="small-img">
      <button class="prev"></button>
      <div class="imgs">
        <img v-for="(img, k) in imageAll" :key="k" @click="switchImage(img)" :src="img" alt="" />
      </div>
      <button class="next"></button>
    </div>
    <p>100% 真实房源，100%真实物业图片</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageAll: [
        'https://waterlandcap.com/img/Singapore-home.c67b3c4e.jpg',
        'https://waterlandcap.com/img/portugal-home.32db5789.png',
        'https://waterlandcap.com/img/Philippines-home.abfed73d.jpg',
        'https://waterlandcap.com/img/Singapore-home.c67b3c4e.jpg',
        'https://waterlandcap.com/img/portugal-home.32db5789.png',
        'https://waterlandcap.com/img/Philippines-home.abfed73d.jpg'
      ],
      bigImage: 'https://waterlandcap.com/img/Singapore-home.c67b3c4e.jpg'
    }
  },
  methods: {
    switchImage (img) {
      this.bigImage = img
    }
  }
}
</script>
<style scoped lang="less">
.images {
  width: 710px;
  p {
    margin-top: 30px;
    font-size: 12px;
    color: #24A10F;
    text-align: center;
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
    .imgs {
      white-space:nowrap;
      img {
        display: inline-block;
        width: 140px;
        height: 80px;
        margin-right: 19px;
        &:last-child {
          margin: 0rem;
        }
      }
    }
    
    button {
      position: absolute;
      top: 0;
      width: 30px;
      height: 80px;
      background: #C4C4C4;
      cursor: pointer;
      &:hover {
        background: #969696;
      }
      &.prev {
        left: 0;
      }
      &.next {
        right: 0;
        &::after {
          left: auto;
          right: 12px;
          transform: rotate(135deg);
        }
      }
      &::after {
        content: '';
        position: absolute;
        top: 36px;
        left: 12px;
        width: 8px;
        height: 8px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>