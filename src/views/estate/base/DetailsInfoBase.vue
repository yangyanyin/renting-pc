<template>
  <div class="info-base">
    <p>建成时间：<i> {{ infoBase.build_at }} </i></p>
    <p>地契：<i> {{ infoBase.deed }} </i></p>
    <p>类型：<i> {{infoBase.type}} </i></p>
    <p>地址：<i> {{infoBase.addr}} </i></p>
    <p>总高：<i> {{ infoBase.height }} </i></p>
    <p>楼层：<i> {{ infoBase.floor }} </i></p>
    <p class="traffic">靠近地铁站：<i v-for="(name, k) in infoBase.traffic" :key="k"> {{name}} </i></p>
    <div class="price">
      参考价: <span> {{infoBase.price}} </span>
      <button @click="showAdvisory" >购买</button>
    </div>
    <div class="price">
      参考价:<span> {{infoBase.rent_price}} </span>
      <button @click="showAdvisory">租赁</button>
    </div>

    <AdvisoryPopup v-if="showAdvisoryType" @closePopuo="showAdvisory" />
  </div>
</template>

<script>
import AdvisoryPopup from '../../../components/base/AdvisoryPopup'

export default {
  components: {
    AdvisoryPopup
  },
  props: {
    infoBase: Object
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
    font-size: 16px;
    color: #737373;
    &.traffic {
      i {
        margin-right: 10px;
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
    &:last-child {
      border-top: none;
    }
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
    }
  }
}
</style>