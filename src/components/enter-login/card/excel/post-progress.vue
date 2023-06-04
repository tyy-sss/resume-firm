<template>
    <div class="post-progress">
      <div class="table">
        <el-table :data="data" empty-text="暂无团队效率分析" style="width: 100%">
          <el-table-column prop="postName" label="职位名" />
          <el-table-column prop="department" label="部门" />
          <el-table-column prop="createPeople" label="创建人" />
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column prop="eliminatePersonNum" label="已淘汰候选人" />
          <el-table-column prop="eliminateNum" label="候选人总数" />
          <el-table-column prop="recruitNum" label="招聘人数" />
        </el-table>
      </div>
    </div>
  </template>
  <script setup>
  import { reactive } from "vue";
  
  const data = reactive([
    {
      postName: "小析",
      department:"项目经理",
      createPeople:"小析",
      createTime:"2023-6-1 15:00:00",
      eliminatePersonNum: 100,
      eliminateNum: 200,
      recruitNum: 5,
    },
  ]);
  </script>
    <style scoped src="@/assets/css/common/enter-login/table-style.css">
  </style>