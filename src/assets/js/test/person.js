import { reactive } from "vue";

const personList = reactive([
  {
    pkResumeId: 3,
    userHeaderData: {
      post: "大数据中心专员",
      headerColor: "RGB(45,203,111)",
      nowProgress: "面试",
      rate: 4,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "林国瑞",
      isRecommend: true,
      labelList: [
        { value: "名企经历" },
        { value: "稳定性高" },
        { value: "国内985/211" },
        { value: "国外留学经历" },
        { value: "国外留学经历" },
      ],
      experienceList: [
        { value: "19年工作经验" },
        { value: "博士" },
        { value: "浙江杭州" },
      ],
      description:
        "熟练掌握英语，能进行基本的沟通；有丰富的硬件开发经验，对电路设计、cadence、控制系统、ccd、spi、pcb、i2c、mcu、射频、dvb、layout、fpga、rfid、gsm、tft、arm、微电子、数字电路、单片机、sdram、uart、asic、集成电路、adc、ddr等技能或工具有深入的理解；拥有丰富的项目经验；拥有博士学位；院校背景不错，本科学历，毕业于985院校；有韩国、韩国留学经历，更能适应外语工作环境，符合海外经验要求；龙头互联网企业从业经历；候选人存在1段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "阿里巴巴公司", timestamp: "2004-04-13 ~ 2017-04-15" },
        { content: "腾讯公司", timestamp: "2018-04-13 ~ 2018-04-15" },
      ],
    },
  },
  {
    userHeaderData: {
      post: "前端工程师",
      headerColor: "RGB(45,203,111)",
      nowProgress: "沟通offer",
      rate: 2,
    },
    userMiddleData: {
      img: "https://ats-images.oss-cn-hangzhou.aliyuncs.com/0d6ae58c2fc63292d3ded78610a02b19.png",
      name: "王海",
      isRecommend: false,
      labelList: [
        { value: "稳定性高" },
        { value: "国内985/211" },
        { value: "技术达标" },
      ],
      experienceList: [{ value: "6年工作经验" }, { value: "硕士" }],
      description:
        "院校背景不错，本科学历，毕业于985院校；世界500强企业从业经历；曾经工作有带过27人的团队，拥有良好的团队建设能力与协调能力，具有优秀的团队管理能力，积累了一定团队管理经验与能力；候选人存在2段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "英国谢菲尔德大学", timestamp: "2011.09 - 2016.07" },
        { content: "重庆市设计院", timestamp: "2017.08 - 2018.03" },
        { content: "重庆长厦公司", timestamp: "2018.03 - 至今" },
        { content: "高新集团有限公司", timestamp: "2020.03 - 至今" },
      ],
    },
  },
  {
    userHeaderData: {
      post: null,
      headerColor: "yellow",
      nowProgress: "未投递",
      rate: null,
    },
    userMiddleData: {
      img: "https://ats-images.oss-cn-hangzhou.aliyuncs.com/0f0415e5687172495be424b5e4d7894d.png",
      name: "曹秋阳",
      isRecommend: false,
      labelList: [
        { value: "名企经历" },
        { value: "稳定性高" },
        { value: "国内211" },
      ],
      experienceList: [{ value: "4年工作经验" }, { value: "本科" }],
      description:
        "拥有丰富的项目经验；院校背景不错，本科学历，毕业于211院校；龙头传统工业企业从业经历；候选人存在1段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "贵州大学", timestamp: "2014.09 - 2018.07" },
        { content: "中建有限公司", timestamp: "2018.07 - 2021.06" },
      ],
    },
  },
  {
    userHeaderData: {
      post: "java开发工程师",
      headerColor: "RGB(45,203,111)",
      nowProgress: "初筛",
      rate: 3,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/17823c8dba3a87a03ff8ac2197dab9c5.svg",
      name: "王小薇",
      isRecommend: false,
      labelList: [{ value: "管理经验" }, { value: "稳定性高" }],
      experienceList: [
        { value: "11年工作经验" },
        { value: "本科" },
        { value: "上海" },
      ],
      description:
        "拥有丰富的项目经验；院校背景不错，本科学历，毕业于211院校；曾经工作有带过3人的团队，拥有良好的团队建设能力与协调能力，具有优秀的团队管理能力，积累了一定团队管理经验与能力；候选人存在3段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "东北林业大学", timestamp: "2007.09 - 2011.06" },
        { content: "上海世茂有限公司", timestamp: "2011.03 - 2016.06" },
        { content: "上海地产集团有限公司", timestamp: "2016.07 - 2018.08" },
        { content: "正荣地产", timestamp: "2018.09 - 至今" },
      ],
    },
  },
  {
    userHeaderData: {
      post: null,
      headerColor: "yellow",
      nowProgress: "未投递",
      rate: null,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "卜映升",
      isRecommend: true,
      labelList: [{ value: "名企经历" }, { value: "稳定性高" }],
      experienceList: [
        { value: "9年工作经验" },
        { value: "本科" },
        { value: "天津" },
      ],
      description:
        "世界500强企业从业经历；龙头传统工业企业从业经历；候选人存在2段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "中央美术学院", timestamp: "2007.09 - 2013.06" },
        { content: "北京设计有限公司", timestamp: "2013.03 - 2017.01" },
        { content: "富力地产", timestamp: "2017.02 - 2021.08" },
        { content: "天津万科有限公司", timestamp: "2021.08 - 至今" },
      ],
    },
  },
  {
    userHeaderData: {
      post: "人工智能算法工程师",
      headerColor: "RGB(45,203,111)",
      nowProgress: "沟通offer",
      rate: 3,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "吴佩霖",
      isRecommend: false,
      labelList: [{ value: "证书达人" }, { value: "稳定性高" }],
      experienceList: [{ value: "8年工作经验" }, { value: "本科" }],
      description:
        "拥有丰富的项目经验；候选人存在3段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "河南农业大学", timestamp: "2010.09 - 2014.06" },
        { content: "和昌地产(集团)", timestamp: "2017.07 - 2019.10" },
        { content: "河南康桥豫南区域公司", timestamp: "2019.12 - 2020.06" },
        { content: "郑州绿都地产集团", timestamp: "2020.06 - 至今" },
      ],
    },
  },
  {
    userHeaderData: {
      post: "大数据中心专员",
      headerColor: "RGB(45,203,111)",
      nowProgress: "已入职",
      rate: 2,
    },
    userMiddleData: {
      img: "https://ats-images.oss-cn-hangzhou.aliyuncs.com/804e0b1bfdcc85066681e9088b2ee164.png",
      name: "陈龙",
      isRecommend: true,
      labelList: [{ value: "稳定性高" }, { value: "国内211" }],
      experienceList: [{ value: "12年工作经验" }, { value: "硕士" }],
      description:
        "拥有丰富的项目经验；拥有硕士学位；院校背景不错，硕士学历，毕业于211院校；候选人存在3段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "天津城建大学", timestamp: "2001.09 - 2006.07" },
        { content: "北京工业大学", timestamp: "2007.09 - 2010.07" },
        { content: "国际建筑设计有限公司", timestamp: "2010.07 - 2013.11" },
      ],
    },
  },
  {
    userHeaderData: {
      post: "大数据中心专员",
      headerColor: "RGB(45,203,111)",
      nowProgress: "初筛",
      rate: 1,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "冯雅筑",
      isRecommend: false,
      labelList: [
        { value: "稳定性高" },
        { value: "国内211" },
        { value: "英语能力良好" },
        { value: "技术达标" },
        { value: "证书达人" },
      ],
      experienceList: [{ value: "11年工作经验" }, { value: "本科" }],
      description:
        "熟练掌握英语，可以流利地进行听说读写；有丰富的运营经验，对媒体推广、策划、运营推广、网络推广、运营、市场推广等技能或工具有深入的理解；院校背景不错，本科学历，毕业于211院校；候选人存在2段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "郑州大学", timestamp: "2008.09 - 2012.07" },
        { content: "朗赛活动有限公司", timestamp: "2012.08 - 2019.08" },
        { content: "奇宏信息科技有限公司", timestamp: "2019.08 - 至今" },
      ],
    },
  },
  {
    userHeaderData: {
      post: null,
      headerColor: "yellow",
      nowProgress: "未投递",
      rate: null,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "连书忠",
      isRecommend: false,
      labelList: [
        { value: "稳定性高" },
        { value: "英语能力良好" },
        { value: "证书达人" },
      ],
      experienceList: [{ value: "15年工作经验" }, { value: "浙江杭州" }],
      description:
        "熟练掌握英语，可以流利地进行听说读写；候选人存在4段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "中山大学", timestamp: "2012.01 - 2015.01" },
        { content: "国际商务单证员专业证书", timestamp: "2015.09 - 2018.09" },
        { content: "阅读运动音乐", timestamp: "2018.09 - 2023.01" },
      ],
    },
  },
  {
    userHeaderData: {
      post: null,
      headerColor: "yellow",
      nowProgress: "未投递",
      rate: null,
    },
    userMiddleData: {
      img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
      name: "白怡",
      isRecommend: false,
      labelList: [{ value: "稳定性高" }, { value: "国内985/211" }],
      experienceList: [{ value: "11年工作经验" }, { value: "本科" }],
      description:
        "有丰富的后端开发经验，对ibatis、struts2、struts、spring、tomcat、架构、ssh、oracle、hibernate、数据库、系统、mysql等技能或工具有深入的理解；有丰富的数据库经验，对mysql数据库、sql数据库、oracle、数据库、mysql等技能或工具有深入的理解；院校背景不错，本科学历，毕业于985院校；候选人存在1段工作经历2年以上，工作稳定性较高",
      activities: [
        { content: "中国海洋大学", timestamp: "2008.09 - 2012.06" },
        { content: "君兆设计管理有限公司", timestamp: "2012.07 - 至今" },
      ],
    },
  },
]);

export { personList };
