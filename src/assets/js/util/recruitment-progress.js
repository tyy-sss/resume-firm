const getProgressState = (data) => {
  switch (data) {
    case "未选中":
      return -1;
    case "已淘汰":
      return 0;
    case "初筛":
      return 1;
    case "面试":
      return 2;
    case "沟通offer":
      return 3;
    case "待入职":
      return 4;
    case "已入职":
      return 5;
  }
};
const getProgressStateBack = (data) => {
  switch (data) {
    case 0:
      return "已淘汰";
    case 1:
      return "初筛";
    case 2:
      return "面试";
    case 3:
      return "沟通offer";
    case 4:
      return "待入职";
    case 5:
      return "已入职";
  }
};
export { getProgressState,getProgressStateBack };
