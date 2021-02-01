import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '../views/category/Category')
const CategoryDetails = () => import(/* webpackChunkName: "category-details" */ '../views/category/Details')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 租房
    path: '/c/:name',
    name: 'category',
    component: Category
  },
  {
    path: '/c/d/:name',
    name: 'category-details',
    component: CategoryDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
