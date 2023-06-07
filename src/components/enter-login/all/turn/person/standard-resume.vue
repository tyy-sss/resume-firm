<template>
  <div class="standard-resume">
    <div v-if="data.basicData !== null">
      <personal-setting-header :title="data.basicData.name" />
      <div class="list">
        <div v-for="(item, index) in data.basicData.listData" :key="index">
          <turn-user-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.educationData !== null">
      <personal-setting-header :title="data.educationData.name" />
      <div class="news">
        <div v-for="(item, index) in data.educationData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.workData !== null">
      <personal-setting-header :title="data.workData.name" />
      <div class="news">
        <div v-for="(item, index) in data.workData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.projectData !== null">
      <personal-setting-header :title="data.projectData.name" />
      <div class="news">
        <div v-for="(item, index) in data.projectData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.societyData !== null">
      <personal-setting-header :title="data.societyData.name" />
      <div class="news">
        <div v-for="(item, index) in data.societyData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.otherData !== null">
      <personal-setting-header :title="data.otherData.name" />
      <div class="news">
        <div v-for="(item, index) in data.otherData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import turnUserInformation from "@/components/enter-login/card/turn/turn-user-information.vue";
import turnProgressInformation from "@/components/enter-login/card/turn/turn-progress-information.vue";

const data = reactive({
  basicData: {
    name: "基本信息",
    listData: [
      {
        name: "姓名",
        value: "tyy",
      },
      {
        name: "姓名",
        value: "tyy",
      },
      {
        name: "姓名",
        value: "tyy",
      },
      {
        name: "姓名",
        value: "tyy",
      },
      {
        name: "姓名",
        value: "tyy",
      },
    ],
  },
  educationData: {
    name: "教育背景",
    listData: [
      {
        title: "河南科技大学",
        list: [
          {
            name: "学位",
            value: "本科",
          },
          {
            name: "学位",
            value: "本科",
          },
        ],
      },
    ],
  },
  workData: {
    name: "工作经历",
    listData: [{
      title: "郑州中科宇图华中分公司",
      list: [
        {
          name: "开始时间",
          value: "2023.02",
        },
        {
          name: "结束时间",
          value: "至今",
        },
        {
          name: "公司行业",
          value: "互联网/软件",
        },
      ],
    }],
  },
  projectData: { name: "项目经历" ,listData: [{
      title: "郑州中科宇图华中分公司",
      list: [
        {
          name: "开始时间",
          value: "2023.02",
        },
        {
          name: "结束时间",
          value: "至今",
        },
        {
          name: "公司行业",
          value: "组员项目介绍: 研究纳米过氧化铜在对典型海洋生物粘附蛋白及多糖的破坏机制:基于现在自抛光防污涂料中主除污剂氧化亚铜在空气中容易氧化失效的问题，探索纳米过氧化铜代替氧化亚铜作为防污涂料中主除污剂的可能性，即纳米过氧化铜对于海洋生物粘附蛋白以及多糖的破坏原理，进行抗黏附生物的实验探索研究。工作内容:1、通过中国知网、维普、万方等文献查询网站，寻找文献并制订实验方案进行试验:2、通过实验结果对论文进行撰写。",
        },
      ],
    }],},
  societyData: { name: "社会经历" ,listData: [{
      title: "郑州中科宇图华中分公司",
      list: [
        {
          name: "开始时间",
          value: "2023.02",
        },
        {
          name: "结束时间",
          value: "至今",
        },
        {
          name: "公司行业",
          value: "互联网/软件",
        },
      ],
    }],},
  otherData: { name: "补充信息" ,listData: [{
      title: null,
      list: [
        {
          name: "开始时间",
          value: "2023.02",
        },
        {
          name: "结束时间",
          value: "至今",
        },
        {
          name: "公司行业",
          value: "互联网/软件",
        },
      ],
    }],},
});

</script>
<style scoped>
.list {
  width: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding-bottom: 20px;
}
.list div {
  width: 50%;
  box-sizing: border-box;
}
.news {
  margin-left: 40px;
}
</style>