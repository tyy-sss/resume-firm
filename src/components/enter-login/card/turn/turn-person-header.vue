<template>
  <div class="turn-person-header">
    <div class="top">
      <div class="left">
        <img src="@/assets/images/avatar.png" />
      </div>
      <div class="right">
        <div class="top">
          <div>{{ data.name }}</div>
          <div>
            <el-rate v-model="data.start" />
          </div>
          <div class="recommend" v-if="data.isRecommend">
            <div>荐</div>
          </div>
          <div>
            <label-person :data="data.labelList" />
          </div>
        </div>
        <div class="buttom">
          <div
            class="information"
            v-for="(item, index) in data.userList"
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
    <div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import labelPerson from "@/components/common/label-person.vue";

const router = useRouter();
const route = useRoute();
const nameValue = ref(route.query.name).value;
var indexValue = ref(1);

const data = reactive({
  name: "tyy",
  start: 3,
  isRecommend: true,
  labelList: [
    { value: "技术达标" },
    { value: "技术达标" },
    { value: "技术达标" },
    { value: "技术达标" },
    { value: "技术达标" },
  ],
  userList: [
    {
      icon: "UserFilled",
      value: "19813404813",
    },
    {
      icon: "Message",
      value: "19813404813",
    },
  ],
});

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

const handleCheckView = (path, index) => {
  indexValue.value = index;
  router.push({
    path: path,
    query: {
      name: nameValue,
    },
  });
};
</script>
<style scoped>
.turn-person-header > div {
  padding-top: 10px;
  display: flex;
  width: 100%;
}
.right {
  margin-left: 20px;
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
.left img {
  width: 70px;
  height: 70px;
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
}
.information-item > div {
  color: #89909e;
}
.buttons {
  padding-bottom: 0px;
  border-bottom: 1px solid RGB(220, 223, 230);
}
::v-deep .el-button {
  border-bottom: 0;
  border-radius: 0;
}
.is-active {
  color: RGB(41, 121, 255) !important;
}
</style>
<style src="@/assets/css/card/enter-login/person/recommend.css" scoped>
</style>
<style src="@/assets/css/card/enter-login/person/label.css" scoped>
</style>