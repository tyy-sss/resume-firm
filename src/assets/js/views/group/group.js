import { isPermission } from "@/assets/js/util/permissions";

// 处理后端传过来的数组
const handleAllTeamMember = (data) => {
  let item = [];
  data.forEach((element) => {
    item.push({
      userId: element.pkUserId,
      avatar: element.accountPicture,
      userName: element.userName,
      roleName: element.roleName,
      userEmail: element.userEmail,
      operate: isOperate(element.pkUserId),
    });
  });
  return item;
};
const isOperate = (data) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user.pkUserId === data) {
    return false;
  } else {
    return isPermission("deleteTeamMembers");
  }
};

export { handleAllTeamMember };
