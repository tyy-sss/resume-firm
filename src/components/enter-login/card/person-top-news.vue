<template>
  <div class="person-top-news">
    <div class="left">
      <div>
        <span>投递职位：</span> <span>{{ data.post }}</span>
      </div>
      <div class="split">
        <span>|</span>
      </div>
      <div>
        <span>当前阶段：</span>
        <div class="img" :style="{ background: data.headerColor }"></div>
        <span class="news">{{ data.nowProgress }}</span>
      </div>
    </div>
    <div class="right">
      <div class="rate">
        <span>职位匹配指数</span>
        <el-rate v-model="data.rate" allow-half @change="hanleChangeRate(data.rate)" />
      </div>
    </div>
  </div>
</template>
<script setup>
const props =  defineProps({data: Object});
const data = props.data;

const emit = defineEmits(['hanldeChangeRate'])
// 修改打分
const hanleChangeRate = (data) => {
  emit('hanldeChangeRate',data)
};
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
.rate > span {
  padding-right: 10px;
}
</style>