import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
    },
  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  console.log('to:', to)
  if(to.name === 'home') {
    store.commit('setActive',0)
  }else {
    store.commit('setActive',-1)
  }
  next()
})

export default kejianrouter