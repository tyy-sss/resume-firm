import axios from "axios";
import { showLoading,hideLoading } from "@/utils/loading";

const temp = "http://192.168.134.199:63010/";
//1.利用axios对象的方法create，去创建一个axios实例。
const requests = axios.create({
  //配置对象
  //接口当中：路径都带有/api     基础路径，发送请求的时候，路径当中会出现api
  baseURL: temp,
  //代表请求超时的时间
  timeout: 100000,
});

//请求拦截器：
requests.interceptors.request.use((config) => {
  showLoading();

  //config:配置对象，对象里面有一个属性很重要，header请求头
  const token = localStorage.getItem("token");
  // 如果token存在就携带token到服务器
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 响应拦截进来隐藏loading效果，此处采⽤延时处理是合并loading请求效果，避免多次请求loading关闭⼜开启
    setTimeout(() => {
      hideLoading();
    }, 200);
    return res;
  },
  (error) => {
    // 响应拦截进来隐藏loading效果，此处采⽤延时处理是合并loading请求效果，避免多次请求loading关闭⼜开启
    setTimeout(() => {
      hideLoading();
    }, 200);
    console.log(error, "错误数据");
    return error;
  }
);

//对外暴露
export default requests;
