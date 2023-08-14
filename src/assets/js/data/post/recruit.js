// 招聘流程
import { reactive } from "vue";

// 招聘流程
const recruitmentProcessData = reactive([
  {
    num: 0,
    name: "初筛",
    router: {
      path: "/turn/recruit",
      query: {
        title: "前端开发工程师",
      },
    },
    isBlank: true,
  },
]);

const recruitmentProcessStyleData = reactive({
  width: "200px",
  height: "35px",
});

// 招聘人的信息
const recruitUserData = reactive({
  role: "前端开发工程师",
  headerColor: "yellow",
  postProgress: "招聘中",
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
});

// 招聘职位的消息
const getRecruitPostData =(role) =>({
  role: role,
  headerColor: "RGB(80,194,134)",
  postProgress: "招聘中",
  list: [
    {
      value: "发布与3天前",
    },
    {
      value: "学历不限",
    },
    {
      value: "经历不限",
    },
  ],
})
export { recruitmentProcessStyleData, recruitUserData,getRecruitPostData };
