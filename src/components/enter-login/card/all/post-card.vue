<template>
  <div class="post-card">
    <div class="top">
      <div class="left">
        <post-left-news :data="recruitUserData"/>
      </div>
      <div class="right">
        <el-button type="primary" @click="handleUpload">添加候选人</el-button>
        <upload-resume ref="upload" :post="post"/>
      </div>
    </div>
    <div class="middle">
      <num-name
        :data="recruitmentProcessData"
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
import { ref } from "vue";
import numName from "@/components/enter-login/common/num-name.vue";
import postLeftNews from "@/components/enter-login/card/post-left-news.vue";
import uploadResume from '@/components/enter-login/card/upload-resume.vue';

import {
  recruitmentProcessData,
  recruitmentProcessStyleData,
  recruitUserData,
} from "@/assets/js/data/post/recruit";

// 职位
const post = recruitUserData.role;
const upload = ref(null)

const handleUpload = () =>{
  upload.value.dialogTableVisible = true;
}

const handleEdit = () =>{
  alert("编辑")
}
const handleClose = () =>{                                                                 
  alert("关闭")
}
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