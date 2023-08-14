/**
 * 简历
 */
import { data } from "jquery";
import request from "./request";
/**
 * 下载单一简历
 * @param {} data
 * @returns
 */
export const uploadSingleResume = (file, identifier) => {
  return request({
    url: "/resume/upload-single-resume",
    method: "post",
    data: {
      file: file,
      identifier: identifier,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
/**
 * 分页查询简历
 * @param {} data
 * @returns
 */
export const selectResumeByPage = (data, query) => {
  return request({
    url: "/resume/select-resume/by-page",
    method: "post",
    data: {
      page: data.page,
      pageSize: data.pageSize,
      query: query,
      state: data.state,
    },
  });
};
/**
 * 查询一个简历
 * @param {*} data
 * @returns
 */
export const getOneResume = (data) => {
  return request({
    url: "/resume/get-one-resume",
    method: "get",
    params: {
      pkResumeId: data,
    },
  });
};
/**
 * 移动简历
 * @param {*} data 
 * @returns 
 */
export const removeResume = (data) => {
  return request({
    url: "/resume/removeResume",
    method: "post",
    data: {
      positionId: data.positionId,
      positionName: data.positionName,
      resumeId: data.resumeId,
    },
  });
};
/**
 * 修改简历状态
 * @param {*} data 
 * @returns 
 */
export const changeResumeSate = (data) =>{
  return request({
    url: "/resume/change-resume-state",
    method: "put",
    data: {
      positionId: data.positionId,
      positionName: data.positionName,
      resumeId:data.resumeId,
      preState:data.preState,
      targetState: data.targetState,
    },
  });
}
/**
* 淘汰简历
* @param {*} data 
* @returns 
*/
export const phasedOutResume = (data) =>{
  return request({
    url: "/resume/phased-out-resume",
    method: "put",
    data: {
      positionId: data.positionId,
      positionName: data.positionName,
      resumeId:data.resumeId,
      phasedOutCause:data.phasedOutCause,
      targetState: data.targetState,
    },
  });
}
/**
* 备注简历
* @param {*} data 
* @returns 
*/
export const remarkResume = (data) =>{
  return request({
    url: "/resume/remark-resume",
    method: "put",
    data: {
      userName: data.userName,
      resumeId:data.resumeId,
      userPicture:data.userPicture,
      content:data.content
    },
  });
}

