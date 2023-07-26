import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeActiveIndex: -1,
    homeNavList:[],
    activeNavIndex: Number(localStorage.getItem('navIndex') || 0)
  },
  mutations: {
    setActive(state,data) {
      state.homeActiveIndex = data
    },
    setActiveNavIndex(state,data) {
      localStorage.setItem('navIndex',data)
      state.activeNavIndex = data
    },
    setNavList(state,data) {
      state.homeNavList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
