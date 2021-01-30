import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '../views/category/Category')


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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
