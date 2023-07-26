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
      path: '/list',
      name: 'list',
      component: () => import('./views/List/index.vue'),
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('./views/Detail/index.vue'),
    },
    {
      path: '/notice',
      name: 'Notice',
      component: () => import('./views/Notice/index.vue'),
    },
  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  if(to.name === 'home') {
    store.commit('setActive',0)
    store.commit('setActiveNavIndex',0)
  }else {
    store.commit('setActive',-1)
  }
  next()
})

export default kejianrouter