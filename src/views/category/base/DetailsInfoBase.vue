<template>
  <div class="info-base">
    <div class="price">
      {{infoBase.price}}<i>{{priceType}}</i>
      <a>变价提醒</a>
    </div>
    <p>地区位置：<i>{{ infoBase.location }}</i></p>
    <p>建筑面积：<i>{{ infoBase.area }}</i></p>
    <p>预计落成日期：<i>{{ infoBase.completion_date }}</i></p>
    <p>房产地址：<i>{{ infoBase.addr }}</i></p>
    <p class="traffic">
      交通：
      <!-- <span v-for="(color, name, k) in traffic" :key="k" :style="{background: color}">{{ name }}</span> -->
      <span v-for="(name, k) in infoBase.traffic" :key="k">{{ name }}</span>
      <i>{{ infoBase.traffic_tips }}</i>
    </p>
    <div class="rule clearfix">
      <ul v-for="(types, name, k) in houseTypes" :key="k">
        <li class="t">{{ name }}</li>
        <li :class="{p: name === '售价'}" v-for="(item, i) in types" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    infoBase: Object
  },
  computed: {
    houseTypes () {
      const types = this.infoBase.house_types
      const data = {
        '户型': [],
        '面积㎡': [],
        '套数': [],
        '售价': []
      }
      for (let i = 0; i < types.length; i++) {
        data['户型'].push(types[i].type)
        data['面积㎡'].push(types[i].area)
        data['套数'].push(types[i].total)
        data['售价'].push(types[i].price)
      }
      return data
    },
    priceType () {
      if (this.$route.params.category === 'new-house') {
        return '万起'
      }
      if (this.$route.params.category === 'second-hand') {
        return '万'
      }
      return ''
    },
  }
}
</script>
<style lang="less" scoped>
.info-base {
  .price {
    padding-bottom: 10px;
    font-size: 40px;
    color: #BF3F3F;
    border-bottom: 1px solid #707070;
    i {
      font-size: 24px;
    }
    a {
      display: inline-block;
      position: relative;
      top: -4px;
      margin-left: 20px;
      padding: 0 10px 0 25px;
      line-height: 25px;
      background: #EFF8EF url('../../../assets/image/price-change-icon.png');
      background-size: 11px;
      background-position: 7px center;
      background-repeat: no-repeat;
      border-radius: 2px;
      font-size: 12px;
      color: #24A10F;
    }
  }
  p {
    margin-top: 22px;
    font-size: 16px;
    color: #737373;
    i {
      display: inline-block;
      margin-left: 10px;
      color: #1C1C1C;
    }
    &.traffic {
      span {
        display: inline-block;
        margin-right: 15px;
        padding: 0 15px;
        line-height: 28px;
        background: #E12129;
        border-radius: 90px;
        font-size: 12px;
        color: #fff;
      }
      i {
        display: block;
        margin: 10px 0 0 55px;
        font-size: 12px;
        color: #1C1C1C;
      }
    }
  }
  .rule {
    margin-top: 20px;
    border: 1px solid #C9C9C9;
    ul {
      float: left;
      width: 25%;
      text-align: center;
      li {
        line-height: 40px;
        font-size: 12px;
        &.t {
          color: #6f6f6f
        }
        &.p {
          color: #BF3F3F;
        }
        &:nth-child(even) {
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>