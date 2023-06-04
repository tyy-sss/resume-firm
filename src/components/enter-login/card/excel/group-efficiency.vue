<template>
  <div class="group-efficiency">
    <div class="table">
      <el-table :data="data" empty-text="暂无团队效率分析" style="width: 100%">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="uploadNum" label="上传简历数量" />
        <el-table-column prop="attendNum" label="参加面试数量" />
        <el-table-column prop="createNum" label="创建面试数量" />
        <el-table-column prop="eliminateNum" label="已淘汰候选人数量" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    name: "小析",
    uploadNum: 100,
    attendNum: 90,
    createNum: 70,
    eliminateNum: 100,
  },
]);
</script>
  <style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>