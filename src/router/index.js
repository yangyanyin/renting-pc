import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '../views/category/Category')
const CategoryDetails = () => import(/* webpackChunkName: "category-details" */ '../views/category/Details')
const News = () => import(/* webpackChunkName: "News" */ '../views/news/News')
const NewsDetails = () => import(/* webpackChunkName: "News" */ '../views/news/Details')
const EstateIndex = () => import(/* webpackChunkName: "estate" */ '../views/estate/EstateIndex')
const Business = () => import(/* webpackChunkName: "estate" */ '../views/estate/base/Business')
const Building = () => import(/* webpackChunkName: "estate" */ '../views/estate/base/Building')
const Shophouse = () => import(/* webpackChunkName: "estate" */ '../views/estate/base/Shophouse')
const EstateDetails = () => import(/* webpackChunkName: "estate-details" */ '../views/estate/EstateDetails')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 租房 新楼盘 二手房
  {
    path: '/c/:name',
    name: 'category',
    component: Category
  },
  {
    path: '/c/d/:name',
    name: 'category-details',
    component: CategoryDetails
  },
  // 新闻咨询
  {
    path: '/n/:name',
    name: 'news',
    component: News
  },
  {
    path: '/n/d/:name',
    name: 'news-details',
    component: NewsDetails
  },
  // 商业地产
  {
    path: '/estate',
    name: 'estate-index',
    component: EstateIndex,
    children: [
      {
        path: '/',
        name: 'business',
        component: Business
      },
      {
        path: 'building',
        name: 'building',
        component: Building
      },
      {
        path: 'shophouse',
        name: 'shophouse',
        component: Shophouse
      }
    ]
  },
  {
    path: '/estate/d/:name',
    name: 'estate-details',
    component: EstateDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
