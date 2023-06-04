<template>
  <div class="interview-card">
    <div class="title">
      <div class="name">{{ data.titleName }}</div>
      <div class="num">（{{ data.titleNum }}）</div>
    </div>
    <div class="table">
      <el-table
        :data="data.tableData"
        empty-text="暂时没有面试安排"
        style="width: 100%"
      >
        <el-table-column label="面试消息" width="300">
          <template #default="scope">
            <div class="message">
              <el-button size="small" :style="{ background: scope.row.message.progressColor }"
                ><span>{{ scope.row.message.progress }}</span></el-button
              >
              <el-button size="small" :style="{ background: scope.row.message.mannerColor,color: scope.row.message.color }"
                ><span>{{ scope.row.message.manner }}</span></el-button
              >
              <span class="time">{{ scope.row.message.time }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="candidate" label="候选人" width="100" />
        <el-table-column prop="position" label="应聘职位" width="200" />
        <el-table-column prop="place" label="面试地点" width="250" />
        <el-table-column prop="interviewer" label="面试官" width="210" />
        <el-table-column prop="feedback" label="面试反馈" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({data:Object})
const data = props.data;
</script>
<style scoped>
.interview-card{
    padding-bottom: 50px;
}
.title {
  display: flex;
  font-size: 17px;
  color: #414a60;
  font-weight: bold;
  margin-bottom: 18px;
}
.table {
  background: #fff;
}
.message .el-button{
    color: white;
    font-size: 13px;
}
.time {
  margin-left: 10px;
}
</style>
<style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>