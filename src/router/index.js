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
const OwnerIndex = () => import(/* webpackChunkName: "owner" */ '../views/owner/Index')
const OtherIndex = () => import(/* webpackChunkName: "other" */ '../views/other/Index')
const About = () => import(/* webpackChunkName: "other" */ '../views/other/About')
const ContactUs = () => import(/* webpackChunkName: "other" */ '../views/other/ContactUs')
const Copyright = () => import(/* webpackChunkName: "other" */ '../views/other/Copyright')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/c/',
    name: 'category',
    component: Category,
    children: [
      // 新楼盘
      {
        path: 'new-house',
        name: 'new house',
        component: Category,
      },
      // 租房
      {
        path: 'renting',
        name: 'renting',
        component: Category,
      },
      // 二手房
      {
        path: 'second-hand',
        name: 'second hand',
        component: Category,
      }
    ]
  },
  {
    path: '/c/:category/:id',
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
    path: '/n/d/:id',
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
    path: '/estate/:category/:id',
    name: 'estate-details',
    component: EstateDetails
  },
  {
    path: '/owner',
    name: 'owner-index',
    component: OwnerIndex
  },
  {
    path: '/',
    name: 'other',
    component: OtherIndex,
    children: [
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs
      },
      {
        path: '/copyright',
        name: 'copyright',
        component: Copyright
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
