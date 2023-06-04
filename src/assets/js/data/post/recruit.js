// 招聘流程
import { reactive } from "vue";

// 招聘流程
const recruitmentProcessData = reactive([
  { num: 0, name: "初筛" },
  { num: 0, name: "部门筛选" },
  { num: 0, name: "面试" },
  { num: 0, name: "沟通offer" },
  { num: 0, name: "待入职" },
  { num: 0, name: "已入职" },
]);
const recruitmentProcessStyleData = reactive({
  width: "160px",
  height: "30px",
});

// 招聘人的信息
const recruitUserData = reactive({
  role: "前端开发工程师",
  headerColor: "yellow",
  list: [
    {
      value: "全职",
    },
    {
      value: "吉首",
    },
    {
      value: "本科",
    },
    {
      value: "0 ~ 3年",
    },
    {
      value: "7K ~ 10K",
    },
  ],
})

export { recruitmentProcessData, recruitmentProcessStyleData,recruitUserData };
