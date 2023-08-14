<template>
  <div class="person-top-news">
    <div class="left">
      <div v-if="data.post">
        <span>投递职位：</span> <span>{{ data.post }}</span>
      </div>
      <div class="split"  v-if="data.post">
        <span>|</span>
      </div>
      <div>
        <span>当前阶段：</span>
        <div class="img" :style="{ background: data.headerColor }"></div>
        <span class="news">{{ data.nowProgress }}</span>
      </div>
    </div>
    <div class="right">
      <div class="rate" v-if="data.rate">
        <span>推荐指数</span>
        <el-rate v-model="data.star" disabled allow-half />
      </div>
      <div class="score">{{ data.rate }}</div>
    </div>
  </div>
</template>
<script setup>
import {watch } from "vue";
const props =  defineProps({data: Object});
var data = props.data;

const emit = defineEmits(['hanldeChangeRate'])
// 修改打分
// const hanleChangeRate = (data) => {
//   emit('hanldeChangeRate',data)
// };
watch(
  () => props.data,
  (newValue, oldView) => {
    console.log(newValue)
    data = newValue;
  }
);
</script>
<style scoped>
.person-top-news{
  display: flex;
  color: RGB(141, 146, 182);
  justify-content: space-between;
}
.left,
.left > div,
.rate {
  display: flex;
  align-items: center;
}
.img {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 5px;
}

.split {
  padding-left: 10px;
  padding-right: 10px;
}
.right{
  display: flex;
  align-items: center;
}
.rate > span {
  padding-right: 10px;
}
.score {
  align-items: center;
  color: #5a8bff;
  font-size: 13px;
}
</style>