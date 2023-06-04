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
          time: "2023-05-30 08:45:00",
        },
        candidate: "tyy",
        position: "产品经理",
        place: "吉首",
        interviewer: "小值",
        feedback: "很厉害",
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
          time: "2023-05-30 08:45:00",
        },
        candidate: "tyy",
        position: "产品经理",
        place: "吉首",
        interviewer: "小值",
        feedback: "很厉害",
      },
      {
        message: {
          progress: "终试",
          progressColor: "RGB(98,54,255)",
          manner: "视频",
          mannerColor: "RGB(253,246,234)",
          color: "RGB(250,140,22)",
          time: "2023-05-30 08:45:00",
        },
        candidate: "tyy",
        position: "产品经理",
        place: "吉首",
        interviewer: "小值",
        feedback: "很厉害",
      },
    ],
  },
]);

export { interviewData };
