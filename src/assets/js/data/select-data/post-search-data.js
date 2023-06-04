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
  list: [{ value: "前端开发工程师" }, { value: "后端开发工程师" }, { value: "java开发工程师" }],
});

// 候选人类型下拉框数据
const candidatePersonSelectList = reactive({
  value:"候选人类型",
  isDefault:false,
  isShow:false, 
  list:[{ value: "全部候选人" }, { value: "已归档候选人" }, { value: "未归档候选人" }],
})
export { recruitTimeSelectList,postSelectList,candidatePersonSelectList };
