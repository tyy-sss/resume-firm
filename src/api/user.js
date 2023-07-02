// 用户
import request from "./request";
import store from "@/store";

/**
 * 注册
 * @param {*} data 
 * @returns 
 */
export const register = (data) => {
  return request({
    url: "/auth/register",
    method: "post",
    data: {
      userEmail: data.userEmail,
      password: data.password,
      userName: data.userName,
      companyName: data.companyName,
    },
  });
};

/**
 * 登录
 * @param {*} data 
 * @returns 
 */
export const login = (data) =>{
  return request({
    url: "/auth/login",
    method: "post",
    data: {
      userEmail: data.userEmail,
      password: data.password,
    },
  });
}
/**
 * 刷新token
 */
 export const refreshToken = () =>{
  return request({
    url: "/auth/refresh-token",
    method: "post",
    headers: {
      Authorization: `Bearer ${store.state.global.refreshToken}`,
    },
  });
}