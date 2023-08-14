<template>
  <div class="candidate-portrait">
    <div>
      <div class="label" v-if="data.isCheck">
        <div class="title">
          <div class="header-title">
            <personal-setting-header :title="data.labelList.name" />
          </div>
          <div class="news">
            <div v-for="(item, index) in data.labelList.list" :key="index">
              <turn-label class="label-item" :data="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="imges">
        <div>
          <div class="header-title">
            <personal-setting-header :title="data.imgesList[0].name" />
          </div>
          <div class="show">
            <div id="backMain" style="width: 700px; height: 400px"></div>
          </div>
        </div>
        <div>
          <div class="header-title">
            <personal-setting-header :title="data.imgesList[1].name" />
          </div>
          <div class="show">
            <div
              id="comprehensiveMain"
              style="width: 700px; height: 400px"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import * as echarts from "echarts";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import turnLabel from "@/components/enter-login/card/turn/turn-label.vue";
// 接口
import { getOneResume } from "@/api/resume";
// 数据处理
import { handleCandidatePortrait } from "@/assets/js/views/person/person";
// 界面参数消息
const route = new useRoute();
const pkResumeId = ref(route.query.pkResumeId).value;
const data = reactive({
  labelList: {
    name: "候选人标签",
    list: [],
  },
  imgesList: [{ name: "背景行业" }, { name: "综合能力" }],
  abilitys:[],
  industryBackgrounds:[],
  isCheck: false,
});
// 得到简历的消息
const getResume = () => {
  getOneResume(pkResumeId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.abilitys = res.data.data.abilitys;
      data.industryBackgrounds = res.data.data.industryBackgrounds;
      data.labelList.list = handleCandidatePortrait(res.data.data);
      console.log(data.labelList.list);
      data.isCheck = true;
      getEcharts();
    }
  });
};
// eacharts
const getEcharts = () => {
  var backMain = echarts.init(document.getElementById("backMain"));
  var option = {
    title: {},
    legend: {
      data: [],
    },
    radar: {
      indicator: [
        { name: "产品", max: 5 },
        { name: "人事", max: 5 },
        { name: "生产", max: 5 },
        { name: "工程师", max: 5 },
        { name: "互联网", max: 5 },
        { name: "金融", max: 5 },
        { name: "其他", max: 5 },
      ],
      axisName: {
        color: "RGB(50,50,93)",
        padding: [3, 5],
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: data.industryBackgrounds,
            symbolSize: 12,
            areaStyle: {
              color: "rgba(209,212,247,0.9)",
            },
          },
        ],
      },
    ],
  };
  backMain.setOption(option);
  var comprehensiveMain = echarts.init(
    document.getElementById("comprehensiveMain")
  );
  var optionOne = {
    title: {},
    legend: {
      data: [],
    },
    radar: {
      indicator: [
        { name: "所获荣誉", max: 5 },
        { name: "领导力", max: 5 },
        { name: "社会能力", max: 5 },
        { name: "教育背景", max: 5 },
        { name: "工作能力", max: 5 },
      ],
      axisName: {
        color: "RGB(50,50,93)",
        padding: [3, 5],
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: data.abilitys,
            areaStyle: {
              color: "rgba(209,212,247,0.9)",
            },
            symbolSize: 12,
          },
        ],
      },
    ],
  };
  comprehensiveMain.setOption(optionOne);
};
onMounted(() => {
  getResume();

});
</script>
<style scoped>
.candidate-portrait {
  padding: 20px;
  width: 700px;
}
.top {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.basic-list {
  width: 700px;
  padding: 20px;
  border: dashed 2px RGB(41, 121, 255);
  border-radius: 8px;
  background-color: #f6f9fc;
  cursor: pointer;
}
.basic-list div {
  display: flex;
}
.header-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.news {
  margin-bottom: 20px;
}
</style>