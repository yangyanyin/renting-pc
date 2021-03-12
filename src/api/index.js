import axios from './axios'

// 新楼盘列表
const newHouse = (params) => axios({
  url: '/v1/new_house/list',
  method: 'get',
  params: params
})

// 新楼盘列表
const productDetail = (params) => axios({
  url: '/v1/new_house/' + params.id,
  method: 'get',
  params: params
})

// 楼盘推荐
const productRecommend = (params) => axios({
  url: '/v1/new_house_recommend',
  method: 'get',
  params: params
})

export default {
  newHouse,
  productDetail,
  productRecommend
}