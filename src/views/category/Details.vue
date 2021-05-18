<template>
  <div class="details">
    <BreadcrumbList :breadcrumb="breadcrumb" v-if="breadcrumb.length > 0" />
    <SearchBox />

    <Loading v-if="!proTitle"/>
    <div v-else class="content clearfix w1200px mt80">
      <div class="name">
        <h3>{{ proTitle }}</h3>
        <span v-for="(name, k) in houseTags" :key="k">{{ name }}</span>
        <button @click="showAdvisory">立即预约看房</button>
      </div>
      <div class="left">
        <DetailsViewImg :imagesArr="proBigImages" :vrLink="vrLink" v-if="proBigImages" />
        <template v-if="breadcrumb[0] && breadcrumb[0].name !== '狮城租房'">
          <DetalsIntroduction :introduction="introduction" />
          <DetailsPhoto :photoAll="photoAll" />
          <DetailsDetailed :projectDetails="projectDetails" />
          <DetailsMortgage />
          <DetailsUnitType :houseTypes="houseTypes" />
        </template>
        <template v-else>
          <DetailsHousingInfo :infoBase="infoBase" />
          <DetailsHousingDescribe 
            :facilities="surroundingFacilities"
            :community="community"
            :introduction="introduction"
            :payType="payType"
            :price="infoBase.price" />
        </template>
      </div>
      <div class="right">
        <DetailsInfoBase :infoBase="infoBase" :type="breadcrumb[0] ? breadcrumb[0].name : ''" @priceChange="showAdvisory" />
        <DetailsRecommend :proTitle="proTitle" />
      </div>
    </div>
    <BaiduMap class="content w1200px mt80" v-if="coordinate" :coordinate="coordinate" :addr="infoBase.addr" :title="proTitle" :mapData="mapData" />

    <AdvisoryPopup v-if="showAdvisoryType" :proTitle="proTitle" :type="breadcrumb[0].message_type" page="product_details" @closePopuo="showAdvisory" />
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import SearchBox from './base/SearchBox'
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import DetailsPhoto from './base/DetailsPhoto'
import DetailsMortgage from './base/DetailsMortgage'
import DetailsDetailed from './base/DetailsDetailed'
import DetailsUnitType from './base/DetailsUnitType'
import DetailsInfoBase from './base/DetailsInfoBase'
import DetailsHousingInfo from './base/DetailsHousingInfo'
import DetailsHousingDescribe from './base/DetailsHousingDescribe'
import DetailsRecommend from '../../components/details/DetailsRecommend'
import BaiduMap from '../../components/details/BaiduMap'
import Loading from '../../components/base/Loading'
import AdvisoryPopup from '../../components/base/AdvisoryPopup'

export default {
  name: 'category-detail',
  components: {
    BreadcrumbList,
    SearchBox,
    DetailsViewImg,
    DetailsPhoto,
    DetailsMortgage,
    DetailsDetailed,
    DetailsUnitType,
    DetalsIntroduction,
    DetailsInfoBase,
    DetailsHousingInfo,
    DetailsHousingDescribe,
    DetailsRecommend,
    BaiduMap,
    Loading,
    AdvisoryPopup
  },
  data () {
    return {
      proTitle: '',       // 标题
      proBigImages: '',   // 大图 
      infoBase: {},       // 标签信息
      introduction: '',   // 介绍
      photoAll: {},       // 房源相册
      projectDetails: {}, // 项目详情
      houseTypes: '',     // 户型
      houseTags: [],      // 楼盘标签
      vrLink: '',         // VR 看房链接,
      mapData: '',
      surroundingFacilities: '',
      community: '',
      payType: '',
      showAdvisoryType: false,
      coordinate: ''
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'new-house': {
          url: '/c/new-house',
          name: '新楼盘',
          api: 'new_house',
          message_type: '购买新楼盘'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房',
          api: 'rented_house',
          message_type: '租房'
        },
        'second-hand': {
          url: '/c/second-hand',
          name: '二手公寓',
          api: 'second_hand_house',
          message_type: '二手公寓'
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
  methods: {
    showAdvisory () {
      this.showAdvisoryType = !this.showAdvisoryType
    }
  },
  mounted () {
    const params = {
      id: this.$route.params.id,
      api_url: this.breadcrumb[0].api
    }
    this.$httpApi.productDetailApi(params).then(res => {
      if (res.code === 200) {
        const detailInfo = res.data.new_house || res.data.second_hand_house
        this.proTitle = detailInfo.title
        this.proBigImages = detailInfo.images || detailInfo.effect_images
        this.introduction = detailInfo.description
        this.houseTypes = detailInfo.house_types
        this.houseTags = detailInfo.house_tags
        this.vrLink = detailInfo.vr_link
        this.surroundingFacilities = detailInfo.surrounding_facilities
        this.community = detailInfo.community
        this.payType = detailInfo.pay_type
        this.mapData = detailInfo.map
        this.coordinate = detailInfo.coordinate
        this.infoBase = {
          region: detailInfo.region_ch ? detailInfo.region_ch[0] : '',
          area: detailInfo.area,
          completion_date: detailInfo.finish_at,
          traffic: detailInfo.traffic,
          traffic_tips: detailInfo.traffic_tips,
          price: detailInfo.price,
          addr: detailInfo.addr,
          house_type: detailInfo.house_type,
          house_types: detailInfo.house_types,
          rent_type: detailInfo.rent_type,
          floor: detailInfo.floor,
          checking_house: detailInfo.checking_house,
          live_time: detailInfo.live_time,
          facilities: detailInfo.facilities,
          electricity: detailInfo.electricity,
          water: detailInfo.water,
          lease: detailInfo.lease,
          has_elevator: detailInfo.has_elevator,
          has_parking: detailInfo.has_parking,
          has_gas: detailInfo.has_gas
        }

        this.photoAll = {
          effect_picture: detailInfo.effect_images,
          sample_room: detailInfo.demo_images,
          matching: detailInfo.surrounding_images
        }

        this.projectDetails = {
          name: detailInfo.name,
          type: detailInfo.type,
          developer: detailInfo.developer,
          property: detailInfo.property,
          start_time: detailInfo.start_at,
          finish: detailInfo.finish_at,
          facility: detailInfo.facilities
        }
        

        console.log(res.data)
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details {
  .name {
    position: relative;
    margin-bottom: 15px;
    h3 {
      height: 70px;
      padding-bottom: 20px;
      font-size: 28px;
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      width: 180px;
      height: 50px;
      line-height: 50px;
      background: #24A10F;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      transition: .3s;
      &:hover {
        background: #198407;
      }
    }
    span {
      display: inline-block;
      padding: 0 8px;
      line-height: 25px;
      margin-right: 10px;
      background: #F5F5F5;
      border-radius: 2px;
      text-align: center;
      color: #7C7C7C;
      font-size: 12px;
    }
  }
  .left {
    width: 710px;
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