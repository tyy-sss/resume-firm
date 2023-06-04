import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingState: false,
  },
  getters: {
  },
  mutations: {
    setChangeLoading(state, data) {
      state.loadingState = data
    }
  },
  actions: {
  },
  modules: {
  }
})
