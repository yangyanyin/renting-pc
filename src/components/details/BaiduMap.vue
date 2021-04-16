<template>
  <div class="baidu-map">
    <h3>地理位置及周边配套</h3>
    <div class="map-tab">
      <div class="tab">
        <span v-for="(item, t, k) in mapSurrounding" :class="{active: surroundingIndex === k}"
          :key="k" 
          @click="tabClick(k)">{{ t }}</span>
      </div>
      <div class="sc">
        <template v-for="(item, t, k) in mapSurrounding">
          <ul :key="k" v-if="surroundingIndex === k">
            <li v-for="(info, i) in item" :key="i" @click="mapClick(info.name)">
              <strong>{{ info.name }}</strong>
              <p>{{ info.desc }}</p>
            </li>
          </ul>
        </template>
      </div>
    </div> 
    <BaiduMap class="bm-view" 
      ak="zvCUylrKijIObDFg2VP01XFjYMWgmlMw"
      :zoom="18"
      :center="coordinateCenter"
      :scroll-wheel-zoom="true"
      :show="true"
      @ready="ready">
      <bm-info-window :position="coordinateCenter" :title="title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <p v-text="infoWindow.contents"></p>
      </bm-info-window>
      <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
    </BaiduMap>
  </div>
</template>
<script>
import { BaiduMap, BmLocalSearch, BmInfoWindow } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmLocalSearch,
    BmInfoWindow
  },
  props: {
    coordinate: String,
    mapData: Object,
    title: String,
    addr: String
  },
  data () {
    return {
      keyword: '',
      infoWindow: {
        show: true,
        contents: '地址：' + this.addr
      },
      surroundingIndex: 0
    }
  },
  computed: {
    coordinateCenter () {
      return {
        lng: this.coordinate ? this.coordinate.split(',')[0] : '',
        lat: this.coordinate ? this.coordinate.split(',')[1] : ''
      }
    },
    mapSurrounding () {
      const data = {}
      const mapData =  this.mapData
      for (let key in mapData) {
        if (mapData[key].length >0) {
          data[key] = mapData[key]
        }
      }
      return data
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
    },
    infoWindowClose () {
      this.infoWindow.show = false
    },
    infoWindowOpen () {
      this.infoWindow.show = true
    }
  }
}
</script>
<style lang="less">
.baidu-map {
  position: relative;
  .BMap_bubble_title {
    color: #cc5522;
    font: bold 14px/16px arial,sans-serif;
  }
  h3 {
    font-size: 20px;
    padding-bottom: 20px;
  }
  .map-tab {
    position: absolute;
    top: 70px;
    right: 20px;
    width: 384px;
    z-index: 999;
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
      background: rgba(0, 0, 0, 0.5);
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
          color: #fff;
        }
        p {
          color: #d8d8d8;
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