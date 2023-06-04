import { reactive } from "vue";

const userHeaderData = reactive({
  post: "机器学习工程师",
  headerColor: "RGB(80,194,134)",
  nowProgress: "已入职",
  rate: 3,
});

const userMiddleData = reactive({
  userAvatar: "",
  name: "涂圆元",
  isRecommend: false,
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
    { content: "Event start", timestamp: "2018-04-13 ~ 2018-04-15" },
    { content: "Approved", timestamp: "2018-04-13 ~ 2018-04-15"  },
    { content: "Success", timestamp: "2018-04-13 ~ 2018-04-15" },
    { content: "Event start", timestamp:"2018-04-13 ~ 2018-04-15" },
    { content: "Approved", timestamp:"2018-04-13"  },
    { content: "Approved", timestamp:"2018-04-13"  },
    { content: "Approved", timestamp:"2018-04-13"  },
  ],
})
export { userHeaderData,userMiddleData }