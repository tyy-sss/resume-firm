import { reactive } from "vue";
// 全部的产品介绍
const allProductData = reactive([
  {
    img: "resume-analysis.png",
    title: "简历解析",
    description: "高效提取指定文件的简历信息",
    color: "RGB(103,114,229)",
    backgroundColor: "RGBA(103,114,229,0.2)",
  },
  {
    img: "match-people-positions.png",
    title: "人岗匹配",
    description: "自动快速，精确匹配最合适的候选人",
    color: "RGB(67,211,148)",
    backgroundColor: "RGBA(67,211,148,0.2)",
  },
  {
    img: "search.png",
    title: "人才搜索",
    description: "基于语意分析，有效定位目标候选人",
    color: "RGB(255,118,0)",
    backgroundColor: "RGBA(255,118,0,0.2)",
  },
  {
    img: "portrait.png",
    title: "候选人画像",
    description: "多维读刻画候选人画像",
    color: "RGB(215,130,217)",
    backgroundColor: "RGBA(215,130,217,0.2)",
  },
  {
    img: "knowledge-mask.png",
    title: "知识面谱",
    description: "垂直于招聘场景的人力资源知识图谱",
    color: "RGB(167,140,233)",
    backgroundColor: "RGBA(167,140,233,0.2)",
  },
  {
    img: "job-resolution.png",
    title: "职位解析",
    description: "深度理解职位文本，提炼出岗位要求",
    color: "RGB(31,119,224)",
    backgroundColor: "RGBA(31,119,224,0.2)",
  },
]);

export { allProductData }