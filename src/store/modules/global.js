// 设置变量 token 成功码
export default {
  state: {
    //全局变量中的success
    success: 1,
    token: null,
    refreshToken: null,
  },
  getters: {},
  mutations: {
    //设置token
    setToken(state, val) {
      state.token = val;
    },
    // 设置refreshtoken
    setRefreshToken(state,val){
      state.refreshToken = val
    }
  },
  actions: {},
  modules: {},
};
