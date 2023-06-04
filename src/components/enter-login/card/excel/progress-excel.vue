<template>
  <div class="progress">
    <div class="table">
      <el-table :data="data" empty-text="暂无进展分析" style="width: 100%">
        <el-table-column prop="stage" label="招聘阶段" />
        <el-table-column prop="totalNum" label="总人数" />
        <el-table-column prop="nowNum" label="现有人数" />
        <el-table-column prop="eliminateNum" label="淘汰人数" />
        <el-table-column prop="eliminateProportion" label="淘汰比例" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    stage: "沟通offer",
    totalNum: 10,
    nowNum:5,
    eliminateNum:5,
    eliminateProportion:0.5,
  },
]);
</script>
<style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>