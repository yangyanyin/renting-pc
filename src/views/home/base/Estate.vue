<template>
  <div class="home-estate w1200px mt80">
    <Title title="商业地产" />
    <div class="estate-list clearfix">
      <div class="item left" v-for="(item, k) in businessData" :key="k">
        <router-link :to="'/estate/building/' + item._id" class="a-img">
          <rentImg class="img-object" :url="item.image" :alt="item.title" />
        </router-link>
        <router-link :to="'/estate/building/' + item._id" tag="h3">{{ item.title }}</router-link>
        <p>{{ item.addr }}</p>
      </div>
    </div>
    <router-link to="/estate/building" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  props: {
    businessData: Array
  },
  data () {
    return {}
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
      width: 386px;
      height: 217px;
      img {
        transition: .3s;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    h3 {
      font-size: 20px;
      padding: 20px 0 10px;
      cursor: pointer;
      &:hover {
        color: #24A10F;
      }
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
  padding-left: 54px;
  background: #FFFFFF;
  border: 1px solid #24A10F;
  color: #24A10F;
  border-radius: 5px;
  line-height: 48px;
  transition: .3s;
  &::after {
    content: '';
    position: absolute;
    top: 19px;
    right: 55px;
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