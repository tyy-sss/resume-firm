<template>
  <div class="person-news-card">
    <div class="top">
      <div class="left">
        <div class="img">
          <img :src="props.data.img" />
        </div>
        <div>
          <div class="user">
            <div class="name">{{ props.data.name }}</div>
            <div v-if="props.data.isRecommend" class="recommend">
              <div>荐</div>
            </div>
          </div>
          <div class="rate">
            <el-rate
              v-model="props.data.rate.star"
              allow-half
              @change="hanleChangeRate(props.data.rate)"
            />
            <div>{{ props.data.rate.num }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <el-button
          circle
          @click="handleDeleteCandidate"
        >
        <el-icon style="font-size: 20px;color: RGB(155,162,171);"><Delete /></el-icon>
      </el-button>
      </div>
    </div>
    <div class="buttom">
      <div class="item" v-for="(item, index) in data.list" :key="index">
        <el-icon v-if="!index"><Reading /></el-icon>
        <el-icon v-if="index"><Monitor /></el-icon>
        <div class="information">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Delete } from "@element-plus/icons-vue";
const props = defineProps({ data:Object })
// 修改评分
const hanleChangeRate = () => {};

// 删除候选人
const handleDeleteCandidate = () => {
  console.log("删除")
};
</script>
<style scoped>
.person-news-card {
  background: #fff;
  padding: 10px;
  width: 240px;
  margin-top: 10px;
  border-radius: 10px;
}
.person-news-card:hover {
  box-shadow: 2px 2px 1px #a5adba;
  border-radius: 10px;
}
.top,
.user,
.left {
  display: flex;
  align-items: center;
}
.left img {
  width: 40px;
  height: 40px;
  padding: 5px;
}
.user .name{
  font-size: 18px;
}
.right {
  color: #414a60;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.right .el-button {
  background-color: RGB(242, 244, 247) !important;
  color: rgb(155, 162, 171);
  border: none;
}
.el-icon svg {
  font-weight: bold !important;
  font-size:30px !important;
}
.rate {
  display: flex;
  align-items: center;
  color: #5a8bff;
}
.buttom .item {
  display: flex;
  color: #63676f;
  margin-left: 5px;
}
.information {
  margin-left: 10px;
  width: 120px;
  font-size: 12px;
  height: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
<style src="@/assets/css/card/enter-login/person/recommend.css" scoped>
</style>