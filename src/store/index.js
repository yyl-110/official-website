import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeActiveIndex: -1
  },
  mutations: {
    setActive(state,data) {
      state.homeActiveIndex = data
    }
  },
  actions: {
  },
  modules: {
  }
})
