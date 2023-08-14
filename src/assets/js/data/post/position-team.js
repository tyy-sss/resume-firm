import { reactive } from "vue";

// 职位团队设置
const positionTeamData = reactive([
  {
    title: "岗位负责人",
    description: "负责该职位的招聘，拥有对该职位的操作权限",
  },
  {
    title: "面试官",
    description: "拥有该职位的筛选简历、参与面试、填写反馈的操作权限",
  },
]);
// 处理选择器
const handlePostSelectList = (data, user) => {
  if (user === "岗位负责人") {
    user = "HR";
  }
  const list = [];
  data.forEach((element) => {
    if (element.roleName === user) {
      list.push(handleSelectItem(element));
    }
  });
  return list;
};
const handleSelectItem = (data) => {
  const item = {
    userId: data.pkUserId,
    userName: data.userName,
    roleName: data.roleName,
    userPicture: data.accountPicture,
  };
  return item;
};
// 处理展示的负责人list
const handlePostList = (data, user) => {
  if (user === "岗位负责人") {
    user = "HR";
  }
  const list = [];
  data.forEach((element) => {
    if (element.roleName === user) {
      list.push(element);
    }
  });
  return list;
};
export { positionTeamData, handlePostSelectList,handlePostList };
