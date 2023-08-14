import { reactive } from "vue";

// 处理前端传给后端的值
const handleSalaryArray = (salary, id) => {
  console.log(salary);
  const data = reactive({
    pkPositionId: id,
    positionName: salary.positionName,
    description: salary.description,
    hc: salary.hc,
    workingCity: salary.workingCity,
    workingYears: salary.workingYears,
    educationBackground: salary.educationBackground,
    type: salary.type,
    salaryMin: salary.money.min,
    salaryMax: salary.money.max,
    salaryMonth: salary.money.month,
  });
  return data;
};
// 处理前端过来的职位信息
const handlePostNewsData = (data) => {
  const postData = reactive({
    positionName: data.positionName,
    description: data.description,
    hc: data.hc,
    workingCity: data.workingCity,
    workingYears: data.workingYears,
    educationBackground: data.educationBackground,
    type: data.type,
    money: {
      min: data.salaryMin,
      max: data.salaryMax,
      month: data.salaryMonth,
    },
  });
  return postData;
};
export { handleSalaryArray, handlePostNewsData };
