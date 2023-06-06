import { reactive } from "vue";

const progressTopLeftData = reactive([
  {
    num: 22,
    name: "在招职位",
    router: {
      path: "/post",
      query: {
        title: null,
      }
    },
    isBlank: false,
  },
  {
    num: 0,
    name: "本周新简历",
    router: {
      path: "/post",
      query: {
        title: null,
      }
    },
    isBlank: false,
  },
  {
    num: 0,
    name: "本周面试",
    router: {
      path: "/post",
      query: {
        title: null,
      }
    },
    isBlank: false,
  },
  {
    num: 2,
    name: "待入职",
    router: {
      path: "/post",
      query: {
        title: null,
      }
    },
    isBlank: false,
  },
]);

const topLeftStyleData = reactive({
  width: "170px",
  height: "70px",
});

const progressTopRightData = reactive([
  { num: 22, name: "目标招聘人数" },
  { num: 2, name: "待入职" },
  { num: 2, name: "已入职" },
]);

export { progressTopLeftData, topLeftStyleData, progressTopRightData };
