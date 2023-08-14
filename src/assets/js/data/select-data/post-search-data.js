import { reactive } from "vue";

// 下拉框数据
const recruitTimeSelectList = reactive({
  value: "不限",
  isDefault: true,
  isShow: false,
  list: [{ value: "不限" }, { value: "在招" }, { value: "已结束" }],
});

// 职位下拉框数据
const postSelectList = reactive({
  value: "按职位筛选",
  isDefault: false,
  isShow: false,
  list: [
    { value: "前端开发工程师" },
    { value: "后端开发工程师" },
    { value: "java开发工程师" },
    { value: "人工智能算法工程师" },
    { value: "大数据中心专员" },
  ],
});

// 候选人类型下拉框数据
const candidatePersonSelectList = reactive({
  value: "候选人类型",
  isDefault: false,
  isShow: false,
  list: [
    { value: "全部候选人" },
    { value: "已归档候选人" },
    { value: "未归档候选人" },
  ],
});

// 面试类型下拉框数据
const interviewSelectList = reactive({
  value: "面试类型",
  isDefault: false,
  isShow: false,
  list: [{ value: "电话面试" }, { value: "现场面试" }, { value: "视频面试" }],
});
// 面试等级
const interviewLevelSelectList = reactive({
  value: "面试等级",
  isDefault: false,
  isShow: false,
  list: [{ value: "初试" }, { value: "复试" }, { value: "终试" }],

})
// 面试时间
const interviewTimeSelectList = reactive({
  value: "面试时间",
  isDefault: false,
  isShow: false,
  list: [{ value: "30分钟" }, { value: "1小时" }, { value: "1.5小时" },{value:"2小时"}],
})
export {
  recruitTimeSelectList,
  postSelectList,
  candidatePersonSelectList,
  interviewSelectList,
  interviewLevelSelectList,
  interviewTimeSelectList
};
