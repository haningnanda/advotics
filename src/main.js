import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
