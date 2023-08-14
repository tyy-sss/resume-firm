import {
  handleHeader,
  handleHeaderPostProgress,
} from "@/assets/js/views/post/post-card";
// 处理后端穿过来的数据
const handleRecruitPostData = (data) => {
  // 处理招聘进度
  let list = [];
  list.push(handleHeader("发布于 " + data.createTime.slice(0, 10)));
  list.push(handleHeader(data.educationBackground));
  list.push(handleHeader(data.workingYears));
  list.push(handleHeader(data.salaryMin + "K ~ " + data.salaryMax + "K"));
  let postProgress = handleHeaderPostProgress(data.state);
  var item = {
    role: data.positionName,
    headerColor: postProgress.headerColor,
    postProgress: postProgress.postProgress,
    list: list,
  };
  return item;
};
export { handleRecruitPostData };
