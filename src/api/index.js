import axios from './axios'

// 首页
const indexApi = (params) => axios({
  url: `/v1/index`,
  method: 'get',
  params: params
})

// 房屋信息列表
const categoryListApi = (params) => axios({
  url: `/v1/${params.api_url}/list`,
  method: 'get',
  params: params
})

// 房屋信息详情
const productDetailApi = (params) => axios({
  url: `/v1/${params.api_url}/${params.id}`,
  method: 'get',
  params: params
})

// 楼盘推荐
const categoryRecommendApi = (params) => axios({
  url: '/v1/recommend',
  method: 'get',
  params: params
})

// 新闻列表
const newsListApi = (params) => axios({
  url: '/v1/newsList',
  method: 'get',
  params: params
})

// 新闻详情
const newsDetailsApi = (params) => axios({
  url: '/v1/news',
  method: 'get',
  params: params
})

// 热门资讯
const hotNewsListApi = (params) => axios({
  url: '/v1/news',
  method: 'get',
  params: params
})

// 推荐新闻
const recommendNewsApi = (params) => axios({
  url: '/v1/recommend_news_list',
  method: 'get',
  params: params
})

// 商业办公大楼
const buildingApi = (params) => axios({
  url: '/v1/office/list',
  method: 'get',
  params: params
})

// 保留性店屋
const shophouseApi = (params) => axios({
  url: '/v1/retention/list',
  method: 'get',
  params: params
})

// 地产详情
const estateDetailsApi = (params) => axios({
  url: '/v1/business/' + params.id,
  method: 'get',
  params: params
})

// 业主留言
const messageApi = (params) => axios({
  url: '/v1/contact',
  method: 'post',
  params: params
})


export default {
  indexApi,
  categoryListApi,
  productDetailApi,
  categoryRecommendApi,
  newsListApi,
  newsDetailsApi,
  hotNewsListApi,
  recommendNewsApi,
  buildingApi,
  shophouseApi,
  estateDetailsApi,
  messageApi
}