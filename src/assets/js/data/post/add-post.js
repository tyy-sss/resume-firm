import { reactive } from "vue";

// 职位添加标题展示数组
const addPostTitleData = reactive([
  {
    num: 1,
    name: "职位基本信息",
    description: "加 * 内容，为必填字段",
  },
  {
    num: 2,
    name: "职位要求",
    description: "我们将通过以下条件，为您精确推荐合适的牛人，请尽量详细填写",
  },
]);

// 年限下拉框数据
const selectYearList = reactive({
  value: "选择工作年限要求",
  isDefault: false,
  isShow: false,
  list: [
    { value: "经验不限" },
    { value: "0-3年" },
    { value: "3-5年" },
    { value: "5-10年" },
    { value: "10年以上" },
  ],
});

// 学历下拉框数据
const selectSchoolList = reactive({
  value: "选择学历要求",
  isDefault: false,
  isShow: false,
  list: [
    { value: "大专" },
    { value: "本科" },
    { value: "硕士" },
    { value: "博士" },
  ],
});

// 工作性质下拉框数据
const selectQualityList = reactive({
  value: "选择工作性质",
  isDefault: false,
  isShow: false,
  list: [
    { value: "不限" },
    { value: "兼职" },
    { value: "全职" },
    { value: "外包" },
    { value: "实习" },
  ],
});

// 下拉框数据汇总
const selectList = reactive({
    year: selectYearList,
    school: selectSchoolList,
    quality: selectQualityList,
})

export { addPostTitleData,selectList };
