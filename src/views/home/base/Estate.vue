<template>
  <div class="home-estate w1200px mt80">
    <Title title="商业地产" :more="titleMore" />
    <div class="estate-list clearfix">
      <div class="item left" v-for="(i, k) in 3" :key="k">
        <router-link to="/estate/d/sad" class="a-img">
          <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="商业地产" />
        </router-link>
        <router-link to="/estate/d/sad" tag="h3">Asia Square | 亚洲广场</router-link>
        <p>12 Marina View Singapore 018961</p>
      </div>
    </div>
    <router-link to="/" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  data () {
    return {
      titleMore: [
        {
          text: '查看更多',
          url: '/estate'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.estate-list {
  .item {
    width: 386px;
    margin-right: 20px;
    text-align: center;
    &:last-child {
      margin-right: 0;
    }
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
    }
    h3 {
      font-size: 20px;
      padding: 20px 0 10px;
    }
    p {
      font-size: 14px;
      color: #7C7C7C;
    }
  }
}
.view-all {
  position: relative;
  display: block;
  width: 184px;
  height: 50px;
  margin: 40px auto 0;
  background: #FFFFFF;
  border: 1px solid #24A10F;
  color: #24A10F;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
  transition: .3s;
  &::after {
    content: '';
    position: absolute;
    top: 19px;
    right: 45px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #24A10F;
    border-right: 2px solid #24A10F;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: .3s;
  }
  &:hover {
    color: #fff;
    background: #24A10F;
    &:after {
      border-color: #fff;
    }
  }
}
</style>