<template>
  <div class="product-list w1200px clearfix">
    <div class="result">
      为您找到<i>{{ total }}</i>条结果
      <a>清除条件</a>
    </div>
    <div class="list left">
      <ProductItem v-for="(item, k) in productData" :key="k" :item="item" />
    </div>
    <div class="recommend right">
      <h3>{{ recommendType.title }}</h3>
      <RecommendItem v-for="(item, k) in recommendList" :item="item" :link="recommendType.link" :key="k" />
    </div>
  </div>
</template>
<script>
import ProductItem from './ProductItem'
import RecommendItem from './RecommendItem'
export default {
  components: {
    ProductItem,
    RecommendItem
  },
  props: {
    productData: Array,
    total: Number
  },
  data () {
    return {
      recommendList: []
    }
  },
  computed: {
    recommendType () {
      const data =  {
        'second hand': {
          title: '二手房推荐',
          type: 'second_hand_house',
          link: '/c/second-hand/'
        },
        'new house': {
          title: '新楼盘推荐',
          type: 'new_house',
          link:'/c/new-house/'
        },
        'renting': {
          title: '租房推荐',
          type: 'renting',
          link:'/c/renting/'
        }
      }
      return data[this.$route.name]
    }
  },
  mounted () {
    const params = {
      type: this.recommendType.type
    }
    this.$httpApi.categoryRecommendApi(params).then(res => {
      if (res.code === 200) {
        this.recommendList = res.data.recommend
      }
    })
  }
}
</script>
<style scoped lang="less">
.product-list {
  margin-top: 30px;
  .result {
    font-size: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid #C9C9C9;
    i {
      color: #BF3F3F;
    }
    a {
      float: right;
      padding-left: 30px;
      color: #7C7C7C;
      font-size: 14px;
      background: url('../../../assets/image/clear-filter-icon.png') no-repeat left center;
      background-size: 20px;
      &:hover {
        color: #24A10F;
      }
    }
  }
  .list {
    width: 955px;
  }
  .recommend {
    width: 178px;
    padding-top: 20px;
    h3 {
      font-size: 20px;
    }
  }
}
</style>