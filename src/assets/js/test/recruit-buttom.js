import { reactive } from "vue";

const userData = reactive([
  {
    title: "初筛",
    num: 2,
    list: [
      {
        img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
        name: "林雅南",
        isRecommend: false,
        rate: {
          star: 1,
          num: 29.2,
        },
        list: [
          {
            value: "1年工作经验",
          },
          { value: "吉首大学 | 本科" },
        ],
      },
      {
        img: "https://ats.xiaoxizn.com/assets/17823c8dba3a87a03ff8ac2197dab9c5.svg",
        name: "张小甜",
        isRecommend: false,
        rate: {
          star: 2,
          num: 40.7,
        },
        list: [
          {
            value: "无工作经验",
          },
          { value: "北京大学 | 本科" },
        ],
      },
    ],
  },
  {
    title: "面试",
    num: 3,
    list: [
      {
        img: "https://ats.xiaoxizn.com/assets/17823c8dba3a87a03ff8ac2197dab9c5.svg",
        name: "郑伊雯",
        isRecommend: true,
        rate: {
          star: 4,
          num: 87.2,
        },
        list: [
          {
            value: "卓米控股集团 | 副总监",
          },
          { value: "华中农业大学 | 博士" },
        ],
      },
      {
        img: "https://ats-images.oss-cn-hangzhou.aliyuncs.com/804e0b1bfdcc85066681e9088b2ee164.png",
        name: "陈龙",
        isRecommend: true,
        rate: {
          star: 4.5,
          num: 98.6,
        },
        list: [
          {
            value: "北京猫眼机械有限公司 | 部长助理",
          },
          { value: "北京师范大学 | 本科" },
        ],
      },
      {
        img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
        name: "陈凯",
        isRecommend: false,
        rate: {
          star: 1.5,
          num: 39.2,
        },
        list: [
          {
            value: "7年工作经验",
          },
          { value: "哈尔滨工业大学 | 本科" },
        ],
      },
    ],
  },
  {
    title: "沟通offer",
    num: 1,
    list: [
      {
        img: "https://ats.xiaoxizn.com/assets/4c1dfa88596748bf19af303827ab0fcc.svg",
        name: "王海滨",
        isRecommend: false,
        rate: {
          star: 3,
          num: 61.5,
        },
        list: [
          {
            value: "无工作经验",
          },
          { value: "北京工业大学 | 硕士" },
        ],
      },
    ],
  },
  {
    title: "待入职",
    num: 0,
    list: [],
  },
  {
    title: "已入职",
    num: 1,
    list: [
      {
        img: "https://ats.xiaoxizn.com/assets/17823c8dba3a87a03ff8ac2197dab9c5.svg",
        name: "程雪",
        isRecommend: false,
        rate: {
          star: 4.5,
          num: 91.5,
        },
        list: [
          {
            value: "10年工作经验",
          },
          { value: "中国传媒大学 | 硕士" },
        ],
      },
    ],
  },
]);

export { userData };
