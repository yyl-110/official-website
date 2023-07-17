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


import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});

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