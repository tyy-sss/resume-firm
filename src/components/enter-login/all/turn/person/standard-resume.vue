<template>
  <div class="standard-resume">
    <div v-if="data.user.basicData.listData.length">
      <personal-setting-header :title="data.user.basicData.name" />
      <div class="list">
        <div v-for="(item, index) in data.user.basicData.listData" :key="index">
          <turn-user-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.user.educationData.listData.length">
      <personal-setting-header :title="data.user.educationData.name" />
      <div class="news">
        <div
          v-for="(item, index) in data.user.educationData.listData"
          :key="index"
        >
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.user.workData.listData.length">
      <personal-setting-header :title="data.user.workData.name" />
      <div class="news">
        <div v-for="(item, index) in data.user.workData.listData" :key="index">
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
    <div v-if="data.user.projectData.listData.length">
      <personal-setting-header :title="data.user.projectData.name" />
      <div class="news">
        <div
          v-for="(item, index) in data.user.projectData.listData"
          :key="index"
        >
          <turn-progress-information :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
// 界面
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import turnUserInformation from "@/components/enter-login/card/turn/turn-user-information.vue";
import turnProgressInformation from "@/components/enter-login/card/turn/turn-progress-information.vue";
// 接口
import { getOneResume } from "@/api/resume";
// 数据处理
import { handleStandardResume } from "@/assets/js/views/person/person";
import store from "@/store";
// 界面参数消息
const route = new useRoute();
const pkResumeId = ref(route.query.pkResumeId).value;

const data = reactive({
  user: {
    basicData: {
      name: "基本信息",
      listData: [],
    },
    educationData: {
      name: "教育背景",
      listData: [],
    },
    workData: {
      name: "工作经历",
      listData: [],
    },
    projectData: {
      name: "项目经历",
      listData: [],
    },
  },
});
// 得到简历的消息
const getResume = () => {
  getOneResume(pkResumeId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.user = reactive(handleStandardResume(res.data.data));
    }
  });
};
onMounted(() => {
  getResume();
});
</script>
<style scoped>
.standard-resume {
  padding: 20px;
}
.standard-resume > div {
  border: dashed 2px RGB(41, 121, 255);
  border-radius: 8px;
  background-color: #f6f9fc;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 20px;
  width: 700px;
}
.list {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding-bottom: 20px;
  margin-left: 2em;
}
.list div {
  box-sizing: border-box;
}
.news {
  margin-left: 40px;
}
</style>