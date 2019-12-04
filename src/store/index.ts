import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ap: null,
    musicLoading: false
  },
  mutations: {
    loading (state) {
      console.log('store mutation loading')

      state.musicLoading = true
    },
    loaded (state) {
      console.log('store mutation loaded')
      state.musicLoading = false
    }

  },
  actions: {
  },
  modules: {
  }
})
