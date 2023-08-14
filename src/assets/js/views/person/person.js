import { data } from "jquery";
import { reactive } from "vue";

// 展示个人简历头部界面
const handlePersonHeaderResume = (data) => {
  const content = JSON.parse(data.jsonContent);
  return {
    name: data.name,
    img: data.img,
    start: data.score.toFixed(1)/20,
    isRecommend: data.score >= 70,
    labelList: handlexperienceList(data),
    userList: handleUserList(content["基本信息"][0]),
  };
};
// 处理经验数据
const handlexperienceList = (data) => {
  var list = [];
  list.push({
    value: data.workingYears + "年工作经验",
    background: "RGB(240, 248, 255)",
    color: "RGB(79, 121, 255)",
  });
  list.push({
    value: data.educationBackground,
    background: "RGB(240, 248, 255)",
    color: "RGB(79, 121, 255)",
  });
  list.push({
    value: data.graduateInstitution,
    background: "RGB(240, 248, 255)",
    color: "RGB(79, 121, 255)",
  });
  return list;
};
// 处理用户联系方式数据
const handleUserList = (data) => {
  var list = [];
  if (data["电话号码"]) {
    list.push({
      icon: "UserFilled",
      value: data["电话号码"],
    });
  }
  if (data["邮箱"]) {
    list.push({
      icon: "Message",
      value: data["邮箱"],
    });
  }
  return list;
};
const handleStandardResume = (data) => {
  const content = JSON.parse(data.jsonContent);
  return {
    basicData: {
      name: "基本信息",
      listData: handleStandardResumeBasicItem(content["基本信息"][0]),
    },
    educationData: {
      name: "教育经历",
      listData: handleStandardResumeItem(content["教育经历"], "学校"),
    },
    workData: {
      name: "工作经历",
      listData: handleStandardResumeItem(content["工作经历"], "公司名称"),
    },
    projectData: {
      name: "项目经历",
      listData: handleStandardResumeItem(content["项目经历"], "项目名称"),
    },
  };
};
const handleStandardResumeBasicItem = (data) => {
  var list = [];
  for (let item in data) {
    if (item.length === 2) {
      list.push({ name: item, value: data[item] });
    }
  }
  for (let item in data) {
    if (item.length === 4) {
      list.push({ name: item, value: data[item] });
    }
  }
  return list;
};
const handleStandardResumeItem = (data, type) => {
  var allList = [];
  if (!data || data.length <= 0) {
    return allList;
  }
  data.forEach((element) => {
    var list = [];
    var title;
    list.push({ name: "开始时间:", value: element["开始时间"] });
    list.push({ name: "结束时间:", value: element["结束时间"] });
    for (let item in element) {
      if (
        item !== type &&
        item !== "段落" &&
        item !== "开始时间" &&
        item !== "结束时间"
      ) {
        list.push({ name: item, value: element[item] });
      } else if (item === type) {
        title = element[item];
      }
    }
    // 去除前面的多余\n符号
    if (element["段落"].indexOf("\n", 0) === 0) {
      element["段落"] = element["段落"].slice(1);
    }
    list.push({ name: "描述", value: element["段落"] });
    allList.push({ title: title, list: list });
  });
  return allList;
};
const handleCandidatePortrait = (data) => {
  const content = JSON.parse(data.jsonContent);
  return handleCPItem(content["补充信息"][0]);
};
const handleCPItem = (data) => {
  var allList = [];
  let t = 0;
  for (let item in data) {
    if (item !== "自我评价") {
      var name = item;
      var list = [];
      data[item].forEach((element) => {
        list.push({ value: element });
      });
      allList.push({ name: name, type: typeOfItem[t % 4], list: list });
      t++;
    }
  }
  return allList;
};
const typeOfItem = reactive(["success", "warning", "danger", ""]);
export {
  handlePersonHeaderResume,
  handleStandardResume,
  handleCandidatePortrait,
};
