import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api'
Vue.config.productionTip = false
Vue.prototype.$httpApi = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
