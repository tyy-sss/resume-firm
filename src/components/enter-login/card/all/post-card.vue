<template>
  <div class="post-card">
    <div class="top">
      <div class="left">
        <post-left-news ref="postLeftNewsRef" />
      </div>
    </div>
    <div class="middle">
      <num-name
        v-if="data.isCheck"
        :data="data.postData.process"
        :id="props.postData.pkPositionId"
        :style-data="recruitmentProcessStyleData"
      ></num-name>
    </div>
    <div class="buttom">
      <el-button type="primary" link @click="handleEdit">编辑</el-button>
      <el-button type="primary" link @click="handleClose">关闭</el-button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, toRefs, watch } from "vue";
// 界面
import numName from "@/components/enter-login/common/num-name.vue";
import postLeftNews from "@/components/enter-login/card/post-left-news.vue";
import { recruitmentProcessStyleData } from "@/assets/js/data/post/recruit";
// 处理数据
import { handleRecruitmentData } from "@/assets/js/views/post/post-card";
var props = defineProps(["postData"]);
const data = reactive({
  postData: props.postData,
  isCheck: false,
  isAddPerson: false,
});
// 职位
const postLeftNewsRef = ref(null);
const handleEdit = () => {
  alert("编辑");
};
const handleClose = () => {
  alert("关闭");
};
// 获得职位消息
const getPostInformation = () => {
  data.postData = handleRecruitmentData(props.postData);
  postLeftNewsRef.value.data = data.postData.header;
};
onMounted(() => {
  getPostInformation();
  data.isCheck = true;
});
watch(
  () => props.postData,
  (newValue, oldView) => {
    props.postData = newValue;
    getPostInformation();
  }
);
</script>
<style scoped>
.post-card {
  background: #fff;
  padding: 20px;
  height: 140px;
  margin-bottom: 20px;
}
.post-card:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(50, 50, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}
.post-card > div {
  padding-bottom: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
  color: RGB(65, 74, 96);
}
.buttom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>