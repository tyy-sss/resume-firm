/**
 * 职位
 */
import request from "./request";

/**
 * 查找职位
 * @param {*} data
 * @returns
 */
export const getPostsListByPage = (data) => {
  return request({
    url: "/position/select-position/by-page",
    method: "post",
    data: {
      query: data.query,
      state: data.state, //-1-不限  0-已结束  1-在招
      page: data.page,
      pageSize: data.pageSize,
    },
  });
};
/**
 * 添加职位
 * @param {} data 
 * @returns 
 */
export const addPosts = (data) =>{
  return request({
    url: "/position/add-position",
    method: "POST",
    data:data
  });
 }
/**
 * 得到职位的所有枚举类型数据
 */
export const getEnumerate = () =>{
  return request({
    url: "/position/get-enumerate",
    method: "get",
  });
}
/**
 * 得到一个职位的所有消息
 * @param {职位id} data 
 * @returns 
 */
export const getPosition =(data)=>{
  return request({
    url: "/position/get-position",
    method: "get",
    params:{
      positionId: data
    }
  });
}
/**
 * 编辑职位
 * @param {} data 
 * @returns 
 */
export const editPosition = (data) =>{
  return request({
    url: "/position/edit-position",
    method: "put",
    data:data
  });
}
/**
 * 关闭职位
 * @param {职位id} data 
 * @returns 
 */
export const closePosition = (data) =>{
  return request({
    url: "/position/close-position",
    method: "put",
    params:{
      positionId:data
    }
  });
}
/**
 * 激活职位
 * @param {职位id} data 
 * @returns 
 */
 export const openPosition = (data) =>{
  return request({
    url: "/position/open-position",
    method: "put",
    params:{
      positionId:data
    }
  });
}
