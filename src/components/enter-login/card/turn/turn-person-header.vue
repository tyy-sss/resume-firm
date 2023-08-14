<template>
  <div class="turn-person-header">
    <div class="top">
      <div class="left">
        <img :src="data.user.img" />
      </div>
      <div class="right" v-if="data.isCheck">
        <div class="top">
          <div>{{ data.user.name }}</div>
          <div>
            <el-rate v-model="data.user.start" disabled allow-half />
          </div>
          <div class="recommend" v-if="data.user.isRecommend">
            <div>荐</div>
          </div>
          <!-- 个人标签 -->
          <div>
            <label-person :data="data.user.labelList" />
          </div>
        </div>
        <div class="buttom">
          <div
            class="information"
            v-for="(item, index) in data.user.userList"
            :key="index"
          >
            <div class="information-item">
              <el-button :icon="item.icon" link />
              <div>{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttom buttons">
      <div v-for="(item, index) in buttonList" :key="index">
        <el-button
          :class="indexValue === index ? 'is-active' : ''"
          size="large"
          plain
          @click="handleCheckView(item.path, index)"
          >{{ item.value }}</el-button
        >
      </div>
    </div>
    <div class="content" v-if="data.isCheck">
      <ul class="infinite-list" style="overflow: auto">
        <router-view :pkResumeId="data.pkResumeId" />
      </ul>
      <div class="right">
        <recruitment-progress :pkResumeId="data.pkResumeId" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
// 界面
import labelPerson from "@/components/common/label-person.vue";
import recruitmentProgress from "@/components/enter-login/middle/recruit/recruitment-progress.vue";
// 接口
import { getOneResume } from "@/api/resume";
// 数据处理
import { handlePersonHeaderResume } from "@/assets/js/views/person/person";
import store from "@/store";
const router = useRouter();
const route = useRoute();
var indexValue = ref(1);
// 按钮数据
const buttonList = reactive([
  {
    value: "原始简历",
    path: "original-resume",
  },
  {
    value: "标准简历",
    path: "standard-resume",
  },
  {
    value: "候选人画像",
    path: "candidate-portrait",
  },
]);
// 跳转界面
const handleCheckView = (path, index) => {
  indexValue.value = index;
  router.push({
    path: path,
    query: {
      pkResumeId: data.pkResumeId,
    },
  });
};
// 获取当前组件的路由消息
const currentRouteParams = computed(() => {
  return route.query;
});
const data = reactive({
  user: {},
  isCheck: false,
  pkResumeId: currentRouteParams.value.pkResumeId,
});
// 得到当前简历的消息
const getResume = () => {
  getOneResume(data.pkResumeId).then((res) => {
    if (res.data.code === store.state.global.success) {
      console.log(res.data.data, "当前简历");
      data.user = handlePersonHeaderResume(res.data.data);
      data.isCheck = true;
    }
  });
};
onMounted(() => {
  getResume();
});
</script>
<style scoped>
.turn-person-header > div {
  display: flex;
  width: 1100px;
}
.turn-person-header > .top {
  width: 1060px;
  padding: 20px;
}
.left img {
  width: 70px;
  height: 70px;
}
.turn-person-header .top .right {
  margin-left: 20px;
}
.turn-person-header > .top,
.turn-person-header > .buttom,
.content {
  position: absolute;
  background: #fff;
}
.turn-person-header > .buttom {
  height: 40px;
  top: 190px;
  padding-bottom: 0px;
  border-bottom: 1px solid RGB(220, 223, 230);
}
.content {
  top: 232px;
  height: 500px;
  bottom: 0;
}
.right .top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.right .top > div {
  margin-right: 10px;
}
.right .top:first-child {
  color: #414a60 !important;
  font-size: 24px;
  line-height: 24px;
}
.right .buttom,
.information-item {
  display: flex;
}
.right .buttom > div {
  margin-right: 10px;
  height: 30px;
}
.information {
  display: flex;
  align-items: center;
  padding-top: 5px;
}
.information-item > div {
  color: #89909e;
}
::v-deep .el-button {
  border-bottom: 0;
  border-radius: 0;
}
.is-active {
  color: RGB(41, 121, 255) !important;
}
.infinite-list {
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
}
.content .right {
  width: 300px;
  padding: 0;
  margin: 0;
  background-color: rgb(247, 248, 250);
}
</style>
<style src="@/assets/css/card/enter-login/person/recommend.css" scoped>
</style>
<style src="@/assets/css/card/enter-login/person/label.css" scoped>
</style>