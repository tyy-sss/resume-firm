import axios from "axios";
import store from "@/store";
import router from "@/router";
import { refreshToken } from "./user";

const temp = "http://192.168.50.243:14565/";
//1.利用axios对象的方法create，去创建一个axios实例。
const requests = axios.create({
  //配置对象
  //接口当中：路径都带有/api     基础路径，发送请求的时候，路径当中会出现api
  baseURL: temp,
  //代表请求超时的时间
  timeout: 5000,
});

//请求拦截器：
requests.interceptors.request.use((config) => {
  const token = store.state.gobal.token;
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };
// 标志当前是否正在刷新token
let isNotRefreshing = true;
// 请求队列
let requestList = [];
//响应拦截器
requests.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    switch (code) {
      case "555":
        // 刷新token
        if (store.state.gobal.refreshToken !== null) {
          isNotRefreshing = false;
          refreshToken()
            .then((res) => {
              if (res.data.code !== store.state.gobal.success) {
                // 清除本地保存记录，返回登录界面
                router.push({
                  path: "/login",
                });
                return false;
              } else {
                // 保存token
                store.commit("setToken", res.data.access_token);
                // 保存refreshToken
                store.commit("setRefreshToken", res.data.refresh_token);
                //执行队列中的请求，（队列中存的不是请求参数，而是请求的Promise函数，这里直接拿来执行就好）
                requestList.forEach((run) => run());
                //将请求队列置空
                requestList = [];
                //重新执行当前未执行成功的请求并返回
                return requests(config);
              }
            })
            .finally(() => {
              isNotRefreshing = true;
            });
        }
    }
    return res;
  },
  (error) => {
    return error;
  }
);

//对外暴露
export default requests;
