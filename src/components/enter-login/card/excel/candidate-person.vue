<template>
    <div class="candidate-person">
      <div class="table">
        <el-table :data="data" empty-text="暂无录取分析" style="width: 100%">
          <el-table-column prop="name" label="候选人姓名" />
          <el-table-column prop="postName" label="职位名" />
          <el-table-column prop="stage" label="招聘阶段" />
          <el-table-column prop="eliminate" label="淘汰情况" />
          <el-table-column prop="updateTime" label="更新时间" />
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column prop="reason" label="淘汰原因" />
        </el-table>
      </div>
    </div>
  </template>
  <script setup>
  import { reactive } from "vue";
  
  const data = reactive([
    {
      name: "tyy",
      postName: "项目经理",
      stage: "沟通offer",
      eliminate: "-",
      updateTime: "2023-6-4 15:00:00",
      createTime: "2023-6-1 15:00:00",
      reason: "-",
    },
  ]);
  </script>
  <style scoped src="@/assets/css/common/enter-login/table-style.css">
  </style>