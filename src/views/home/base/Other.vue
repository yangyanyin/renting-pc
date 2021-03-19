<template>
  <div class="home-other mt80">
    <div class="w1200px">
      <div class="content ">
        <router-link v-for="(item, k) in list" :key="k" :to="item.link" @click.native="loanPopup(item.link)">
          <img :src="item.img" :alt="item.name">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
          link: '/18'
        }
      ]
    }
  },
  methods: {
    loanPopup (link) {
      if (link === '/') {
        console.log(123131)
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