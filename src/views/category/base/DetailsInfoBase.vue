<template>
  <div class="info-base">
    <div class="price">
      {{infoBase.price}}<i>{{priceType}}</i>
      <a @click="priceChange">变价提醒</a>
    </div>
    <template v-if="type === '狮城租房'">
      <p>租凭方式：<i>{{ infoBase.rent_type }}</i></p>
      <p>房屋类型：<i>{{ infoBase.house_type }}</i></p>
      <p>楼层：<i>{{ infoBase.floor }}</i></p>
    </template>
    <template v-else>
      <p>地区位置：<i>{{ infoBase.region }}</i></p>
      <p v-if="infoBase.area">建筑面积：<i>{{ infoBase.area }}</i></p>
      <p v-if="type !== '二手公寓' && infoBase.completion_date">预计落成日期：<i>{{ infoBase.completion_date.substring(0, 7) }}</i></p>
      <p>房产地址：<i>{{ infoBase.addr }}</i></p>
    </template>
    <p class="traffic">
      交通：
      <template v-if="infoBase.traffic.length > 0">
        <span v-for="(item, k) in infoBase.traffic" :key="k" :style="{background: item.color}">{{ item.name }}</span>
      </template>
      <template v-else>
        <i>暂无详细信息</i>
      </template>
      <em>{{ infoBase.traffic_tips }}</em>
    </p>
    <div v-if="houseTypes" class="rule clearfix">
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
    infoBase: Object,
    type: String
  },
  computed: {
    houseTypes () {
      let data = false
      const types = this.infoBase.house_types
      if (types) {
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
      return '/月'
    }
  },
  methods: {
    priceChange () {
      this.$emit('priceChange')
    }
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
      cursor: pointer;
      &:hover {
        background-color: #e5ece5;
      }
    }
  }
  p {
    margin-top: 22px;
    font-size: 14px;
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
        padding: 0 12px;
        line-height: 26px;
        background: #E12129;
        border-radius: 13px;
        font-size: 12px;
        color: #fff;
      }
      em {
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