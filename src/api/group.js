/**
 * 团队群组
 */
import request from "./request";

/**
 * 添加团队成员
 * @param {*} data
 * @returns
 */
export const addTeamMemeber = (data) => {
  return request({
    url: "/auth/add-team-members",
    method: "post",
    data: {
      userEmail: data.userEmail,
      password: data.password,
      userName: data.userName,
      roleName: data.roleName,
    },
  });
};
/**
 * 获得一个团队的所有成员
 * @returns
 */
export const selectTeamMember = () => {
  return request({
    url: "/auth/select-team-members",
    method: "get",
  });
};
/**
 *
 * @returns 删除团队成员
 */
export const deleteTeamMember = (data) => {
  return request({
    url: "/auth/delete-team-members/"+data,
    method: "delete",
  });
};
