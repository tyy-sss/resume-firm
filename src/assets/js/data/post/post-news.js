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
// 清空选择器的值
const handlePostSelectList = (data) => {
  return {
    educationBackground: postSelectList(
      "选择学历要求",
      data.educationBackground,
      false
    ),
    workingYears: postSelectList("选择工作年限要求", data.workingYears, false),
    type: postSelectList("选择工作性质", data.type, false),
  };
};
const postList = (data) => {
  const list = reactive([]);
  data.forEach((element) => {
    list.push({ value: element });
  });
  return list;
};
// 给有值的选择器赋值
const getPostSelect = (data, selectData) => {
  return reactive({
    educationBackground: postSelectList(
      data.educationBackground,
      selectData.educationBackground,
      true
    ),
    workingYears: postSelectList(
      data.workingYears,
      selectData.workingYears,
      true
    ),
    type: postSelectList(data.type, selectData.type, true),
  });
};
const postSelectList = (value, data, isDefault) => {
  return {
    value: value,
    isDefault: isDefault,
    isShow: false,
    list: postList(data),
  };
};
export { addPostTitleData, handlePostSelectList,getPostSelect };
