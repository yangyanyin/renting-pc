<template>
  <div class="filter w1200px">
    <div class="tips" v-if="showTips"><p>全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!</p></div>
    <div class="item clearfix" v-for="(item, name, k) in filterData" :key="k">
      <div class="left">
        <span class="t">{{ filterTit[name] }}</span>
        <span :class="{active: !filterResult[name]}" @click="filterAll(name)">全部</span>
      </div>
      <div class="right">
        <span v-for="(text, i) in item" :key="i"
          :class="{active: filterResult[name] && filterResult[name].indexOf(text.id) >= 0}"
          @click="filterClick(name, text.id)">
          <i></i> {{ text.text }}
        </span>
      </div>
    </div>

    <div class="sort">
      <span :class="{active: !filterResult.sort}" @click="filterSort('default')">默认排序</span>
      <span :class="{active: [1, 2].indexOf(filterResult.sort * 1) >= 0}" @click="filterSort('price')">
        按价格
        <i :class="{on: filterResult.sort * 1 === 2}"></i>
      </span>
      <span :class="{active: [3, 4].indexOf(filterResult.sort * 1) >= 0}" @click="filterSort('area')">
        按面积
        <i :class="{on: filterResult.sort * 1 === 4}"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: String
  },
  data () {
    return {
      filterResult: {},
      filterTit: {
        'region': '地区',
        'price': '价格',
        'area': '面积',
        'house': '户型'
      }
    }
  },
  computed: {
    showTips () {
      return this.$route.params.name === 'renting'
    },
    filterData () {
      const data = {
        'region': [
          {
            text: '东部',
            id: 'east'
          },
          {
            text: '西部',
            id: 'west'
          },
          {
            text: '市区',
            id: 'urban'
          },
          {
            text: '中部',
            id: 'middle'
          },
          {
            text: '南部',
            id: 'south'
          },
          {
            text: '北部',
            id: 'north'
          },
          {
            text: '东北部',
            id: 'east_north'
          },
          {
            text: '其他地区',
            id: 'other'
          }
        ],
        'price': [
          {
            text: '100万以下',
            id: 1
          },
          {
            text: '100万-200万',
            id: 2
          },
          {
            text: '200万-500万',
            id: 3
          },
          {
            text: '500万以上',
            id: 4
          }
        ],
        'area': [
          {
            text: '50㎡以下',
            id: '1'
          },
          {
            text: '50㎡-70㎡',
            id: '2'
          },
          {
            text: '70㎡-100㎡',
            id: '3'
          },
          {
            text: '100㎡-150㎡',
            id: '4'
          },
          {
            text: '150㎡以上',
            id: '5'
          }
        ],
        'house': [
          {
            text: '一卧室',
            id: '1'
          },
          {
            text: '一厅+书房',
            id: '6'
          },
          {
            text: '一室一厅',
            id: '2'
          },
          {
            text: '一室一厅+书房',
            id: '3'
          },
          {
            text: '两室一厅',
            id: '4'
          },
          {
            text: '两室一厅+书房',
            id: '5'
          },
          {
            text: '三室一厅',
            id: '10'
          },
          {
            text: '三室一厅+书房',
            id: '11'
          },
          {
            text: '四室一厅',
            id: '7'
          },
          {
            text: '四室一厅+书房',
            id: '8'
          },
          {
            text: '顶层复式楼',
            id: '9'
          }
        ]
      }
      if (this.category === '狮城租房') {
        data.price = [
          {
            text: '500-2000',
            id: 1
          },
          {
            text: '2000-3000',
            id: 2
          },
          {
            text: '3000-5000',
            id: 3
          },
          {
            text: '5000-8000',
            id: 4
          },
          {
            text: '8000以上',
            id: 5
          }
        ]
        data.house = [
          {
            text: 'studio',
            id: '1'
          },
          {
            text: '1卧室',
            id: '2'
          },
          {
            text: '2卧室',
            id: '3'
          },
          {
            text: '3卧室',
            id: '4'
          },
          {
            text: '4卧室',
            id: '5'
          },
          {
            text: '5卧室',
            id: '6'
          },
          {
            text: '独栋洋房',
            id: '7'
          },
          {
            text: '半独栋洋房',
            id: '8'
          }
        ]
      }
      return data
    }
  },
  methods: {
    filterAll (name) {
      let querys = JSON.parse(JSON.stringify(this.$route.query))
      querys[name] = ''
      this.$router.push({
        query: querys
      })
    },
    filterSort (type) {
      let querys = JSON.parse(JSON.stringify(this.$route.query))
      if (type === 'price') {
        querys.sort = querys.sort * 1 === 1 ? 2 : 1
      }
      if (type === 'area') {
        querys.sort = querys.sort * 1 === 3 ? 4 : 3
      }
      if (type === 'default') {
        querys.sort = ''
      }
      this.$router.push({
        query: querys
      })
    },
    filterClick (type, id) {
      let querys = JSON.parse(JSON.stringify(this.$route.query))
      if (querys[type] && querys[type].split(',').indexOf(id) >= 0) {
        querys[type] = querys[type].replace(`${id},`, '')
      } else {
        querys[type] = `${id},${querys[type] || ''}`
      }
      this.$router.push({
        query: querys
      })
    }
  },
  mounted () {
    this.filterResult = this.$route.query
  }
}
</script>
<style scoped lang="less">
.filter {
  padding: 40px 10px 0;
  .tips {
    text-align: center;
    margin-bottom: 60px;
    p {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      font-size: 12px;
      color: #F7B964;
      &::after {
        content: '!';
        position: absolute;
        left: 0;
        top: 1px;
        width: 14px;
        height: 14px;
        border-radius: 14px;
        color: #fff;
        line-height: 14px;
        background: #F7B964;
      }
    }
  }
  .item {
    &:first-child {
      .right {
        span {
          width: 60px;
          i {
            display: none;
          }
        }
      }
    }
    .right {
      width: 1020px;
      span {
        width: 160px;
        margin-right: 0;
      }
    }
    span {
      display: inline-block;
      margin: 0 30px 18px 0;
      cursor: pointer;
      &.active {
        color: #24A10F;
        i {
          position: relative;
          border-color: #24A10F;
          &:after {
            content: '';
            position: absolute;
            left: 3px;
            top: 3px;
            width: 7px;
            height: 4px;
            border-left: 1px solid #24A10F;
            border-bottom: 1px solid #24A10F;
            transform: rotate(-45deg);
          }
        }
      }
      &:hover {
        color: #24A10F;
      }
      i {
        display: inline-block;
        position: relative;
        top: 3px;
        width: 16px;
        height: 16px;
        margin-right: 2px;
        background: #FFFFFF;
        border: 1px solid #C9C9C9;
        border-radius: 5px;
      }
      &.t {
        margin-right: 60px;
        font-weight: bold;
        &:hover {
          color: #19191D;
        }
      }
    }
  }
  .sort {
    height: 36px;
    margin-top: 70px;
    border-bottom: 3px solid #24A10F;
    span {
      display: inline-block;
      width: 84px;
      line-height: 33px;
      text-align: center;
      cursor: pointer;
      i {
        display: inline-block;
        position: relative;
        top: 3px;
        width: 3px;
        height: 16px;
        margin-left: 5px;
        background: #19191D;
        transform: scale(.5);
        &.on {
          transform: scale(.5) rotate(180deg);
        }
        &::after {
          content: '';
          position: absolute;
          left: -4px;
          width: 8px;
          height: 8px;
          border-top: 3px solid #19191D;
          border-left: 3px solid #19191D;
          transform: rotate(45deg);
        }
      }
      &:hover {
        color: #24A10F;
        i {
          background: #24A10F;
          &::after {
            border-color: #24A10F;
          }
        }
      }
      &.active {
        background: #24A10F;
        color: #fff;
        i {
          background: #fff;
          &:after {
            border-color: #fff;
          }
        }
      }
    }
  }
}
</style>