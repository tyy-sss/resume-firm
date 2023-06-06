<template>
  <div class="person-news-card">
    <div class="top">
      <div class="left"><img src="@/assets/images/avatar.png" /></div>
      <div class="right">
        <div class="title">
          <div class="left">
            <div class="name">{{ data.name }}</div>
            <div v-if="data.isRecommend" class="recommend">
              <div>荐</div>
            </div>
          </div>
          <div class="right">
            <el-button
              type="primary"
              :icon="Delete"
              circle
              @click="handleDeleteCandidate"
            />
          </div>
        </div>
        <div class="rate">
          <el-rate
            v-model="data.rate.star"
            allow-half
            @change="hanleChangeRate(data.rate)"
          />
          <div>{{ data.rate.num }}</div>
        </div>
      </div>
    </div>
    <div class="buttom">
      <div class="item" v-for="(item, index) in data.list" :key="index">
        <el-icon><Reading /></el-icon>
        <div class="information">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Delete } from "@element-plus/icons-vue";
const data = reactive({
  name: "tyy",
  isRecommend: true,
  rate: {
    star: 3,
    num: 61.5,
  },
  list: [
    {
      value: "无工作经验",
    },
    { value: "吉首大学 | 本科" },
  ],
});

// 修改评分
const hanleChangeRate = () => {};

// 删除候选人
const handleDeleteCandidate = () => {};
</script>
<style scoped>
.person-news-card {
  background: #fff;
  padding: 4px;
  width: 210px;
}
.person-news-card:hover {
  box-shadow: 2px 2px 1px #a5adba;
  background-color: #e8ebf9;
  border-radius: 3px;
}
.top {
  display: flex;
  align-items: center;
}
.left img {
  width: 36px;
  height: 36px;
  margin: 5px;
}
.right {
  color: #414a60;
  font-size: 14px;
  line-height: 18px;
}
.title .left,
.title {
  display: flex;
  align-items: center;
}
.title {
  justify-content: space-between;
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