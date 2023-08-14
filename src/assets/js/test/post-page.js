import { reactive } from "vue";

//职位列表数据
const postPage = reactive([
  {
    pkPositionId: 1,
    header: {
      role: "前端工程师",
      headerColor: "RGB(45,203,111)",
      postProgress: "招聘中",
      list: [
        {
          value: "全职",
        },
        {
          value: "天津市/河西区",
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
    },
    process: [
      {
        num: 2,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 3,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
  {
    pkPositionId: 6,
    header: {
      role: "大数据中心专员",
      headerColor: "RGB(45,203,111)",
      postProgress: "招聘中",
      list: [
        {
          value: "全职",
        },
        {
          value: "天津市/河西区",
        },
        {
          value: "本科",
        },
        {
          value: "3 ~ 4年",
        },
        {
          value: "9K ~ 17K",
        },
      ],
    },
    process: [
      {
        num: 5,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 3,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 2,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
  {
    pkPositionId: 5,
    header: {
      role: "人工智能算法工程师",
      headerColor: "yellow",
      postProgress: "已结束",
      list: [
        {
          value: "不限",
        },
        {
          value: "北京市/丰台区",
        },
        {
          value: "硕士",
        },
        {
          value: "不限",
        },
        {
          value: "50K ~ 52K",
        },
      ],
    },
    process: [
      {
        num: 0,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 3,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
  {
    pkPositionId: 2,
    header: {
      role: "后端开发工程师",
      headerColor: "RGB(45,203,111)",
      postProgress: "招聘中",
      list: [
        {
          value: "全职",
        },
        {
          value: "河北省/秦皇岛市",
        },
        {
          value: "研究生",
        },
        {
          value: "不限",
        },
        {
          value: "10K ~ 18K",
        },
      ],
    },
    process: [
      {
        num: 1,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 3,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
  {
    pkPositionId: 3,
    header: {
      role: "人工智能算法工程师",
      headerColor: "RGB(45,203,111)",
      postProgress: "招聘中",
      list: [
        {
          value: "不限",
        },
        {
          value: "天津市/河西区",
        },
        {
          value: "硕士",
        },
        {
          value: "不限",
        },
        {
          value: "40K ~ 48K",
        },
      ],
    },
    process: [
      {
        num: 0,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 2,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
  {
    pkPositionId: 4,
    header: {
      role: "java开发工程师",
      headerColor: "RGB(45,203,111)",
      postProgress: "招聘中",
      list: [
        {
          value: "全职",
        },
        {
          value: "北京市/丰台区",
        },
        {
          value: "本科",
        },
        {
          value: "不限",
        },
        {
          value: "8K ~ 12K",
        },
      ],
    },
    process: [
      {
        num: 2,
        name: "初筛",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 3,
        name: "面试",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 0,
        name: "沟通offer",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 1,
        name: "待入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
      {
        num: 2,
        name: "已入职",
        router: {
          path: "/turn/recruit",
        },
        isBlank: true,
      },
    ],
  },
]);
const searchByState = (data) => {
  if (data === 1) {
    var list = [];
    postPage.forEach((element) => {
      if (element.header.postProgress === "招聘中") {
        list.push(element);
      }
    });
    return {
      total: 5,
      list: list,
    };
  } else if (data === 0) {
    var list = [];
    postPage.forEach((element) => {
      if (element.header.postProgress !== "招聘中") {
        list.push(element);
      }
    });
    return {
      total: 1,
      list: list,
    };
  } else {
    return {
      total: 5,
      list: postPage,
    };
  }
};
const searchByQuery = (data) => {
  var list = searchByState(data).list;
  var newList = [];
  list.forEach((element) => {
    if (element.pkPositionId !== 6) {
      newList.push(element);
    }
  });
  return {
    total: 1,
    list: newList,
  };
};
export { postPage, searchByState, searchByQuery };
