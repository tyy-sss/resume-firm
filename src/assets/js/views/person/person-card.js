// 解析后端传过来的简历信息
const handleResumeData = (data) => {
  return {
    userHeaderData: handleUserHeaderData(data),
    userMiddleData: handleUserMiddleData(data),
  };
};
// 展示头部数据
const handleUserHeaderData = (data) => {
  var color;
  switch (data.state) {
    case "未选中":
      color = "RGB(255,191,76)";
      break;
    default:
      color = "RGB(80,194,134)";
      break;
  }
  let star =data.score.toFixed(1)/20;
  return {
    resumeId:data.pkResumeId,
    post: data.positionName,
    headerColor: color,
    nowProgress: data.state,
    positionId:data.positionId,
    positionName: data.positionName,
    rate: data.score.toFixed(1),
    star:star,
    state: data.state
  };
};
// 展示中间数据
const handleUserMiddleData = (data) => {
  const content = JSON.parse(data.jsonContent);
  var activities = handleActivities(content["工作经历"], "公司名称");
  if (activities.length === 0) {
    activities = handleActivities(content["教育经历"], "学校");
  }
  return {
    name: data.name,
    labelList: handleLabelList(data.tags_good, data.tags_bad),
    experienceList: handlexperienceList(data),
    activities: activities,
    img: data.img,
    description: handleDescription(content["补充信息"][0]),
  };
};
// 处理经验数据
const handlexperienceList = (data) => {
  var list = [];
  list.push({ value: data.workingYears + "年工作经验" });
  list.push({ value: data.educationBackground });
  list.push({ value: data.graduateInstitution });
  return list;
};
// 处理标签数据
const handleLabelList = (goodList, badList) => {
  var list = [];
  for (let item in goodList) {
    list.push({
      value: goodList[item],
      background: "RGB(240, 248, 255)",
      color: "RGB(79, 121, 255)",
    });
  }
  for (let item in badList) {
    list.push({
      value: badList[item],
      background: "RGB(253, 246, 236)",
      color: "RGB(230, 162, 60)",
    });
  }
  return list;
};
// 处理时间线数据
const handleActivities = (data, type) => {
  var list = [];
  if (!data || data.length === 0) {
    return list;
  }
  data.forEach((element) => {
    list.push({
      content: element[type],
      timestamp: element["开始时间"] + " ~ " + element["结束时间"],
    });
  });
  return list;
};
// 处理描述数据
const handleDescription = (data) => {
  if (data["自我评价"]) {
    return data["自我评价"];
  } else {
    var description = "";
    description += handleDescriptionItem(data["专业证书"], "专业证书");
    description += handleDescriptionItem(data["专业技能"], "专业技能");
    description += handleDescriptionItem(data["商业技能"], "商业技能");
    description += handleDescriptionItem(data["语言能力"], "语言能力");
    description += handleDescriptionItem(data["IT技能"], "IT技能");
    return description;
  }
};
const handleDescriptionItem = (data, item) => {
  if (data) {
    var description = "拥有";
    const length = data.length - 1;
    for (let element in data) {
      description += data[element];
      if (element != length) {
      description += "、";
      }
    }
    description += "等" + item + "，";
    return description;
  }
  return "";
};
export { handleResumeData };
