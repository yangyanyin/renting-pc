<template>
  <div class="details">
    <Loading v-if="!proTitle" />
    <template v-else>
      <div class="banner-title" :style="{background: 'url('+ imagesAll[0] +')' }">
        <h3>{{ proTitle }}</h3>
        <p><img src="../../assets/image/addr-icon.png" />{{ proAddress }}</p>
      </div>
      <BreadcrumbList class="estate-breadcrumb" :breadcrumb="breadcrumb" v-if="breadcrumb.length > 0" />
      <div class="content clearfix w1200px">
        <div class="left">
          <DetailsViewImg :imagesArr="imagesAll" />
          <DetalsIntroduction :introduction="introduction" />
          <Conveniences :facilities="facilities" v-if="breadcrumb[0].name !== '保留性店屋'" />

          <h4>免责声明</h4>
           <em>页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。</em>
        </div>
        <div class="right">
          <DetailsInfoBase :infoBase="infoBase" :type="breadcrumb[0].name" />
          <Consultant />
        </div>
      </div>
      <BaiduMap class="content w1200px mt80" v-if="coordinate" :coordinate="coordinate" :addr="infoBase.addr" :title="proTitle" :mapData="mapData" />
    </template>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import Conveniences from '../../components/details/Conveniences'
import DetailsInfoBase from './base/DetailsInfoBase'
import Consultant from '../../components/base/Consultant'
import Loading from '../../components/base/Loading'
import BaiduMap from '../../components/details/BaiduMap'

export default {
  components: {
    BreadcrumbList,
    DetailsViewImg,
    DetalsIntroduction,
    Conveniences,
    Consultant,
    DetailsInfoBase,
    Loading,
    BaiduMap
  },
  data () {
    return {
      proTitle: '',
      proAddress: '',
      imagesAll: [],
      infoBase: {},
      introduction: '',
      coordinate: '',
      mapData: '',
      facilities: []
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'building': {
          url: '/estate/building',
          name: '分层地契商业办公大楼',
        },
        'shophouse': {
          url: '/estate/shophouse',
          name: '保留性店屋'
        }
      }
      return [
        routes[this.$route.params.category],
        {
          url: this.$route.path,
          name: this.proTitle
        }
      ]
    }
  },
  mounted () {
    const params = {
      id: this.$route.params.id
    }
    this.$httpApi.estateDetailsApi(params).then(res => {
      if (res.code === 200) {
        const detailInfo = res.data
        this.proTitle = detailInfo.title
        this.proAddress = detailInfo.addr
        this.imagesAll = detailInfo.images
        this.introduction = detailInfo.description
        this.coordinate = detailInfo.coordinate
        this.mapData = detailInfo.map
        this.facilities = detailInfo.facilities
        this.infoBase = {
          floor: detailInfo.floor,
          deed: detailInfo.deed,
          height: detailInfo.height,
          build_at: detailInfo.build_at,
          type: detailInfo.house_type,
          addr: detailInfo.addr,
          traffic: detailInfo.traffic,
          price: detailInfo.price,
          rent_price: detailInfo.rent_price,
          area: detailInfo.area
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details {
  .estate-breadcrumb {
    border: none;
    background: #fff;
  }
  .banner-title {
    position: relative;
    height: 220px;
    text-align: center;
    color: #fff;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: -100px;
      width: 100%;
      height: 440px;
      background: inherit;
      filter: blur(8px);
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: -100px;
      z-index: 1;
      width: 100%;
      height: 440px;
      background: rgba(0, 0, 0, .5);
    }
    h3 {
      position: relative;
      z-index: 2;
      padding-top: 60px;
      font-size: 28px;
    }
    p {
      display: inline-block;
      position: relative;
      z-index: 2;
      padding-top: 15px;
      font-size: 18px;
      img {
        display: inline-block;
        position: relative;
        top: -1px;
        width: 14px;
        margin-right: 10px;
      }
    }
  }
  .left {
    width: 710px;
    h4{
      display: block;
      margin-top: 40px;
      padding-left: 20px;
      font-weight: bold;
      color: #7C7C7C;
      background: url('../../assets/image/disclaimer-icon.png') no-repeat left center;
      background-size: 12px;
    }
    em {
      display: block;
      margin-top: 8px;
      color: #7C7C7C;
      font-size: 12px;
    }
  }
  .right {
    width: 444px;
  }
}
</style>
<style lang="less">
.details {
  .other-t {
    margin-top: 30px;
    padding-bottom: 8px;
    font-size: 20px;
    border-bottom: 3px solid #24A10F;
  }
}
</style>