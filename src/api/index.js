import axios from './axios'

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



export default {
  categoryListApi,
  productDetailApi,
  categoryRecommendApi,
  newsListApi,
  newsDetailsApi,
  hotNewsListApi,
  recommendNewsApi
}