// 设置权限变量
export default {
    state: {
      //全局变量中的success
      permissionsList: null,
    },
    getters: {},
    mutations: {
      //设置token
      setPermissionsList(state, val) {
        state.permissionsList = val;
      },
    },
    actions: {},
    modules: {},
  };
  