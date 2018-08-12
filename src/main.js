import Vue from 'vue'
import App from './App.vue'
import router from './router'//路由step1/6
import store from './store'
import "./assets/css/common.less"

Vue.config.productionTip = false

new Vue({
  router,//路由step2/6
  store,
  render: h => h(App)
}).$mount('#app')
