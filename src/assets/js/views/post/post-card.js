import { reactive } from "vue";

// 处理整体
const handleRecruitmentData = (data) => {
  const recruitmentData = {
    header: handleRecruitmentHeaderData(data),
    process: handleRecruitmentProcessData(data),
  };
  return recruitmentData;
};
// 处理从后端传过来的职位筛选人数数据
const handleRecruitmentProcessData = (data) => {
  var processData = [];
  processData.push(
    handleProcesss(data.firstScreenerCount, "初筛", data.positionName)
  );
  processData.push(
    handleProcesss(data.interviewCount, "面试", data.positionName)
  );
  processData.push(
    handleProcesss(data.communicateOfferCount, "沟通offer", data.positionName)
  );
  processData.push(
    handleProcesss(data.pendEmploy, "待入职", data.positionName)
  );
  processData.push(
    handleProcesss(data.employedEmploy, "已入职", data.positionName)
  );
  return processData;
};
const handleProcesss = (num, name, title) => {
  let item = {
    num: num,
    name: name,
    router: {
      path: "/turn/recruit",
      query: {
        title: title,
      },
    },
    isBlank: true,
  };
  return item;
};
// 处理职位头部信息
const handleRecruitmentHeaderData = (data) => {
  // 得到展示的list
  let list = [];
  list.push(handleHeader(data.type));
  list.push(handleHeader(data.workingCity));
  list.push(handleHeader(data.educationBackground));
  list.push(handleHeader(data.workingYears));
  list.push(handleHeader(data.salaryMin + "K ~ " + data.salaryMax +'K'));
  // 得到职位的招聘进展信息
  let postProgress = handleHeaderPostProgress(data.state);
  var item = {
    role: data.positionName,
    headerColor: postProgress.headerColor,
    postProgress: postProgress.postProgress,
    list: list,
  };
  return item;
};
// 招聘进度展示处理
const handleHeaderPostProgress = (data) => {
  let item = {
    headerColor: "",
    postProgress: "",
  };
  switch (data) {
    case 1:
      item.headerColor = "RGB(45,203,111)";
      item.postProgress = "招聘中";
      break;
    case 0:
      item.headerColor = "yellow";
      item.postProgress = "已结束";
      break;
  }
  return item;
};
// 价值处理
const handleHeader = (data) => {
  let item = {
    value: data,
  };
  return item;
};


export { handleRecruitmentData,handleRecruitmentHeaderData,handleHeader,handleHeaderPostProgress };
