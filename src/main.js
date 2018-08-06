import Vue from 'vue'
import App from './App.vue'
import VueShareSocial from './bundle'
Vue.use(VueShareSocial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
