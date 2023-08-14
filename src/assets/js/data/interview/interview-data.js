import { reactive } from "vue";

const interviewData = reactive([
  {
    titleName: "今天的面试",
    titleNum: 1,
    tableData: [
      {
        message: {
          progress: "复试",
          progressColor: "RGB(68,215,182)",
          manner: "现场",
          mannerColor: "RGB(230,247,255)",
          color: "RGB(56,159,255)",
          time: "2023-07-313 08:30:00",
        },
        candidate: "张小甜",
        position: "前端工程师",
        place: "长沙",
        interviewer: "小明",
        feedback: "面试效果一般",
      },
    ],
  },
  {
    titleName: "之后的面试",
    titleNum: 0,
    tableData: [],
  },
  {
    titleName: "之前的面试",
    titleNum: 2,
    tableData: [
      {
        message: {
          progress: "初试",
          progressColor: "RGB(0,145,255)",
          manner: "电话",
          mannerColor: "RGB(249,240,255)",
          color: "RGB(114,46,209)",
          time: "2023-07-13 10:00:00",
        },
        candidate: "王小薇",
        position: "java开发工程师",
        place: "长沙",
        interviewer: "小云",
        feedback: "面试效果很好",
      },
      {
        message: {
          progress: "终试",
          progressColor: "RGB(98,54,255)",
          manner: "视频",
          mannerColor: "RGB(253,246,234)",
          color: "RGB(250,140,22)",
          time: "2023-07-13 13:30:00",
        },
        candidate: "陈龙",
        position: "产品经理",
        place: "线上",
        interviewer: "析析",
        feedback: "建议淘汰",
      },
    ],
  },
]);

export { interviewData };
