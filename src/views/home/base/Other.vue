<template>
  <div class="home-other mt80">
    <div class="w1200px">
      <div class="content">
        <router-link v-for="(item, k) in list" :key="k" :to="item.link" @click.native="loanPopup(item.link)">
          <img :src="item.img" :alt="item.name">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div class="home-mortgage" v-if="showMortgage">
      <div class="b">
        <div class="close" @click="showMortgage = false"></div>
        <DetailsMortgage />
      </div>
    </div>
  </div>
</template>
<script>
import DetailsMortgage from '../../category/base/DetailsMortgage'
export default {
  components: {
    DetailsMortgage
  },
  data () {
    return {
      showMortgage: false,
      list: [
        {
          name: '买房必看',
          img: require('../../../assets/image/home-other-icon1.png'),
          link: '/n/d/13'
        },
        {
          name: '买房贷款',
          img: require('../../../assets/image/home-other-icon2.png'),
          link: '/'
        },
        {
          name: '产权交易',
          img: require('../../../assets/image/home-other-icon3.png'),
          link: '/n/d/15'
        },
        {
          name: '常见问题',
          img: require('../../../assets/image/home-other-icon4.png'),
          link: '/n/d/16'
        },
        {
          name: '业主委托',
          img: require('../../../assets/image/home-other-icon5.png'),
          link: '/owner'
        },
        {
          name: '购房指南',
          img: require('../../../assets/image/home-other-icon6.png'),
          link: '/n/d/18'
        }
      ]
    }
  },
  methods: {
    loanPopup (link) {
      if (link === '/') {
        this.showMortgage = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.home-other {
  background: url('../../../assets/image/home-other-bg.jpg') no-repeat top center;
  height: 240px;
  padding: 27px 0;
  .content {
    height: 187px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    a, span {
      display: inline-block;
      width: 140px;
      margin: 0 26px;
      font-size: 16px;
    }
  }
}
</style>
<style lang="less">
.home-mortgage {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .b {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 840px;
    padding: 60px;
    margin-left: -420px;
    background: #fff;
    border-radius: 5px;
    transform: translateY(-50%);
    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:hover {
        &::after,&::before {
          background: #106f00;
        }
      }
      &:after {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        background: #24A10F;
        transition: .3s;
        transform: rotate(-45deg);
      }
      &:before {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        background: #24A10F;
        transition: .3s;
        transform: rotate(45deg);
      }
    }
  }
  .other-t {
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: 2px solid #24A10F;
  }
}
</style>