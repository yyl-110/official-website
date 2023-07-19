import '@/utils/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios'
import './assets/scss/index.scss'

import ElementUI from 'element-ui';
Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false

//设置超时时间
axios.defaults.timeout = 5000
//设置api地址
//全局定义axios
axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api/'
Vue.prototype.$http = axios

// 图片服务器地址
Vue.prototype.imgserver = 'http://shkjgw.shkjem.com/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')