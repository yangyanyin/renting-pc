<template>
  <div class="info-base">
    <template v-if="type === '保留性店屋'">
      <p>店屋地址：<i> {{infoBase.addr}} </i></p>
      <p>地契：<i> {{ infoBase.deed }} </i></p>
      <p>居住面积：<i> {{ infoBase.area }} </i></p>
    </template>
    <template v-else>
      <p>建成时间：<i> {{ infoBase.build_at }} </i></p>
      <p>地契：<i> {{ infoBase.deed }} </i></p>
      <p>类型：<i> {{infoBase.type}} </i></p>
      <p>总高：<i> {{ infoBase.height }} </i></p>
      <p>楼层：<i> {{ infoBase.floor }} </i></p>
    </template>
    <p class="traffic">靠近地铁站：
      <i v-for="(item, k) in infoBase.traffic" :key="k" :style="{background: item.color}"> {{item.name}} </i>
    </p>
    <div class="price" v-if="infoBase.price">
      参考价: <span> {{infoBase.price}} </span>
      <button @click="showAdvisory" >购买</button>
    </div>
    <div class="price" v-if="infoBase.rent_price">
      参考价:<span> {{infoBase.rent_price}} </span>
      <button @click="showAdvisory">租赁</button>
    </div>

    <AdvisoryPopup v-if="showAdvisoryType" type="商业地产买卖" page="estate" :proTitle="proTitle" @closePopuo="showAdvisory" />
  </div>
</template>

<script>
import AdvisoryPopup from '../../../components/base/AdvisoryPopup'

export default {
  components: {
    AdvisoryPopup
  },
  props: {
    infoBase: Object,
    type: String,
    proTitle: String
  },
  data () {
    return {
      showAdvisoryType: false
    }
  },
  methods: {
    showAdvisory () {
      this.showAdvisoryType = !this.showAdvisoryType
    }
  }
}
</script>
<style lang="less" scoped>
.info-base {
   p {
    margin-bottom: 22px;
    font-size: 14px;
    color: #737373;
    &.traffic {
      i {
        display: inline-block;
        margin: 0 15px 0 0;
        padding: 0 15px;
        line-height: 28px;
        background: #E12129;
        border-radius: 90px;
        font-size: 12px;
        color: #fff;
      }
    }
    i {
      display: inline-block;
      margin-left: 10px;
      color: #1C1C1C;
    }
  }
  .price {
    padding: 15px;
    line-height: 40px;
    font-size: 16px;
    border: 1px solid #C9C9C9;
    // &:last-child {
    //   border-top: none;
    // }
    span {
      color: #BF3F3F;
    }
    button {
      float: right;
      width: 128px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: #24A10F;
      border-radius: 5px;
      transition: .3s;
      cursor: pointer;
      &:hover {
        background: #1b800a;
      }
    }
  }
}
</style>