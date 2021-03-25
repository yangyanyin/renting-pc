import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api'
import rentImg from './components/base/Image'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.prototype.$httpApi = axios
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})
Vue.component(rentImg.name, rentImg)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
