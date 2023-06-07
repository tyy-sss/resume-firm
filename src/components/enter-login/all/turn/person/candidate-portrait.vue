<template>
  <div class="candidate-portrait">
    <div>
      <div class="top">
        <div class="basic-list">
          <div v-for="(item, index) in data.basicData" :key="index">
            <turn-user-information :data="item" />
          </div>
        </div>
      </div>
      <div class="label">
        <div class="title">
          <personal-setting-header :title="data.labelList.name" />
          <div class="news">
            <div v-for="(item, index) in data.labelList.list" :key="index">
              <turn-label :data="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="imges">
        <div v-for="(item, index) in data.imgesList" :key="index">
          <personal-setting-header :title="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import turnUserInformation from "@/components/enter-login/card/turn/turn-user-information.vue";
import turnLabel from "@/components/enter-login/card/turn/turn-label.vue";

const data = reactive({
  basicData: [
    {
      name: null,
      value: "熟练掌握英语，可以流利地进行听说读写",
    },
  ],
  labelList: {
    name: "候选人标签",
    list: [
      {
        name: "基本标签",
        type: "success",
        list: [
          {
            value: "22到26岁",
          },
        ],
      },
    ],
  },
  imgesList: [{ name: "背景行业" }, { name: "综合能力" }, { name: "预测职能" }],
});
</script>
<style scoped>
.candidate-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
  width: 1000px;
  padding: 14px 20px;
  border: dashed 2px RGB(41, 121, 255);
  border-radius: 8px;
  background-color: #f6f9fc;
  cursor: pointer;
}
.basic-list div {
  display: flex;
  justify-content: flex-start;
}
.news {
  margin-left: 40px;
  margin-bottom: 10px;
}
</style>