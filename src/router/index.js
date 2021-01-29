import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home')
const Renting = () => import(/* webpackChunkName: "category" */ '../views/category/Renting')
const NewRealEstate = () => import(/* webpackChunkName: "category" */ '../views/category/NewRealEstate')
const SecondHandHousing = () => import(/* webpackChunkName: "category" */ '../views/category/SecondHandHousing')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 租房
    path: '/renting',
    name: 'renting',
    component: Renting
  },
  {
    // 新楼盘
    path: '/new-real-estate',
    name: 'new-real-estate',
    component: NewRealEstate
  },
  {
    // 二手房
    path: '/second-hand-housing',
    name: 'second-hand-housing',
    component: SecondHandHousing
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
