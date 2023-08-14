/**
 * 职位团队
 */
import request from "./request";
/**
 * 查询职位可选负责人
 * @param {职位id} data
 * @returns
 */
export const optionalPositionTeam = (data) => {
  return request({
    url: "/position/optional-position-team/" + data,
    method: "get",
  });
};
/**
 * 添加职位负责人
 * @param {*} data
 * @returns
 */
export const addPositionTeam = (user, positionId) => {
  return request({
    url: "/position/add-position-team",
    method: "post",
    data: {
      roleName: user.roleName,
      userId: user.userId,
      userName: user.userName,
      userPicture: user.userPicture,
      positionId: positionId,
    },
  });
};
/**
 * 删除职位负责人
 * @param {用户id} userId 
 * @param {职位id} positionId 
 * @returns 
 */
 export const deletePositionTeam = (positionId, userId) => {
  return request({
    url: "/position/delete-position-team",
    method: "delete",
    params: {
      positionId: positionId,
      userId: userId,
    },
  });
};
/**
 * 查询职位已选负责人
 * @param {职位id} data
 * @returns
 */
export const selectedPositionTeam = (positionId) =>{
  return request({
    url: "/position/selected-position-team/"+positionId,
    method: "get",
  });
}