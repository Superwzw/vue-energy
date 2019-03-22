import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


