<template>
  <div class="baidu-map">
    <div class="map-tab">
      <div class="tab">
        <span v-for="(item, t, k) in surrounding"
          :class="{active: surroundingIndex === k}"
          :key="k" 
          @click="tabClick(k)">{{ t }}</span>
      </div>
      <div class="sc">
        <template v-for="(item, t, k) in surrounding">
          <ul :key="k" v-if="surroundingIndex === k">
            <li v-for="(info, i) in item" :key="i" @click="mapClick(info.name)">
              <strong>{{ info.name }}</strong>
              <p>{{ info.description }}</p>
              <i>{{ info.distance }}</i>
            </li>
          </ul>
        </template>
      </div>
    </div> 
    <BaiduMap class="bm-view" 
      ak="zvCUylrKijIObDFg2VP01XFjYMWgmlMw"
      :zoom="10"
      :scroll-wheel-zoom="true"
      :show="true"
      @ready="ready">
      <bm-control>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
    </BaiduMap>
  </div>
</template>
<script>
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
// import { BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch, BmMarker, BmGeolocation } from 'vue-baidu-map'
import { BaiduMap, BmLocalSearch, BmControl  } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmLocalSearch,
    BmControl
    
  },
  props: {
    addr: String
  },
  data () {
    return {
      zoom: 10,
      keyword: '慕达发购物中心',
      infoWindow: {
        show: true
      },
      surroundingIndex: 0,
      surrounding: {
        '交通': [
          {
            name: '新加坡百丽宫',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr Oleander Twsr ',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: 'Oleander Twsr',
            distance: '相距123米',
            description: '48;141;234'
          }
        ],
        '教育': [
          {
            name: '学校',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: '学校',
            distance: '相距123米',
            description: '48;141;234'
          },
          {
            name: '学校',
            distance: '相距123米',
            description: '48;141;234'
          }
        ],
        '医院': [],
        '购物': []
      }
    }
  },
  methods: {
    ready ({BMap, map}) {
      console.log(BMap, map)
      map.addControl(new BMap.ScaleControl());
    },
    tabClick (index) {
      this.surroundingIndex = index
    },
    mapClick (name) {
      this.keyword = name
    }
  }
}
</script>
<style lang="less">
.baidu-map {
  position: relative;
  .map-tab {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9999;
    background: #fff;
    .tab {
      height: 32px;
      line-height: 30px;
      background: #dadada;
      span {
        display: inline-block;
        padding: 0 10px;
        border-top: 2px solid #dadada;
        cursor: pointer;
        &.active {
          color: #427ff6;
          border-top: 2px solid #427ff6;
          background: #fff;
        }
      }
    }
    .sc {
      height: 300px;
      overflow-y: auto;
    }
    ul {
      padding: 20px;
      font-weight: normal;
      li {
        position: relative;
        margin-top: 20px;
        cursor: pointer;
        &:first-child {
          margin-top: 0;
        }
        strong {
          display: block;
          padding-right: 70px;
          font-weight: normal;
        }
        p {
          color: #aaafb8;
          font-size: 12px;
        }
        i {
          position: absolute;
          right: 0;
          top: 0;
          color: #aaafb8;
          font-size: 12px;
        }
      }
    }
  }
}
.bm-view {
  width: 100%;
  height: 500px;
  > div {
    &:last-child {
      display: none;
    }
  }
  img {
    width: auto;
  }
}
</style>