import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import menu from "./modules/menu";
import global from "./modules/global";
import permission from "./modules/permission";

export default createStore({
  state: {
    loadingState: false,
  },
  getters: {},
  mutations: {
    setChangeLoading(state, data) {
      state.loadingState = data;
    },
  },
  actions: {},
  modules: {
    menu,
    global,
    permission,
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      reducer(state) {
        //render错误修改
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      },
    }),
  ],
});
