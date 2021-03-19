<template>
  <div class="details">
    <BreadcrumbList :breadcrumb="breadcrumb" v-if="breadcrumb.length > 0" />
    <SearchBox />

    <Loading v-if="!proTitle"/>
    <div v-else class="content clearfix w1200px mt80">
      
      <div class="name">
        <h3>{{ proTitle }}</h3>
        <span v-for="(name, k) in houseTags" :key="k">{{ name }}</span>
      </div>
      <div class="left">
        <DetailsViewImg :imagesArr="proBigImages" v-if="proBigImages" />
        <DetalsIntroduction :introduction="introduction" />
        <DetailsPhoto :photoAll="photoAll" />
        <DetailsDetailed :projectDetails="projectDetails" />
        <DetailsMortgage />
        <DetailsUnitType :houseTypes="houseTypes" />
      </div>
      <div class="right">
        <DetailsInfoBase :infoBase="infoBase" />
        <DetailsRecommend />
      </div>
    </div>
    <BaiduMap class="content w1200px mt80" :addr="infoBase.addr" />
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
import DetailsRecommend from '../../components/details/DetailsRecommend'
import BaiduMap from '../../components/details/BaiduMap'
import Loading from '../../components/base/Loading'

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
    DetailsRecommend,
    BaiduMap,
    Loading
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
      houseTags: []       // 楼盘标签
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'new-house': {
          url: '/c/new-house',
          name: '新楼盘',
          api: 'new_house'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房'
        },
        'second-hand': {
          url: '/c/second-hand',
          name: '二手公寓',
          api: 'second_hand_house'
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
      id: this.$route.params.id,
      api_url: this.breadcrumb[0].api
    }
    this.$httpApi.productDetailApi(params).then(res => {
      if (res.code === 200) {
        const detailInfo = res.data.new_house || res.data.second_hand_house
        this.proTitle = detailInfo.title
        this.proBigImages = detailInfo.effect_images
        this.introduction = detailInfo.description
        this.houseTypes = detailInfo.house_types
        this.houseTags = detailInfo.house_tags
        this.infoBase = {
          location: detailInfo.location,
          area: detailInfo.area,
          completion_date: detailInfo.finish_at,
          traffic: detailInfo.traffic,
          traffic_tips: detailInfo.traffic_tips,
          price: detailInfo.price,
          addr: detailInfo.addr,
          house_types: detailInfo.house_types
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
    margin-bottom: 15px;
    h3 {
      padding-bottom: 20px;
      font-size: 28px;
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