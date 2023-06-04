<template>
  <div class="excel">
    <div class="top">
      <personal-setting-header :title="titleValue" />
      <el-button type="primary" @click="handleExportExcel">
        <el-icon><Download /></el-icon>导出</el-button
      >
    </div>
    <div class="middle">
      <div class="select" v-if="data.table.isSelect">
        <select-custom
          :selectList="data.table.selectList"
          :width-value="220"
          @handleCheckData="handleChoose"
        />
      </div>
      <div class="data-picker">
        <el-date-picker
          v-model="data.date"
          type="daterange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
          @calendar-change="handleChangeDate"
        />
      </div>
    </div>
    <div class="buttom">
      <div>
        <div class="table">
           <candidate-person v-if="titleValue === '候选人录取分析'"/>
            <progress-excel v-else-if="titleValue === '招聘阶段进展分析'"/>
            <group-efficiency v-else-if="titleValue === '招聘团队效率分析'"/>
            <post-progress v-else/>
        </div>
        <div class="pages">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="20"
          class="mt-4"
        />
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
// 界面
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import selectCustom from "@/components/common/select-custom.vue";
import progressExcel from '@/components/enter-login/card/excel/progress-excel.vue'
import candidatePerson from "@/components/enter-login/card/excel/candidate-person.vue"
import groupEfficiency from "@/components/enter-login/card/excel/group-efficiency.vue";
import postProgress from '@/components/enter-login/card/excel/post-progress.vue'
import { getSelectData } from '@/assets/js/data/excel/data.js'
import { formatTimeForChinaTime } from "@/assets/js/util/time.js";

const titleValue = ref(router.query.title);

const data = reactive({
  date: "",
  table: {
  },
  tableData:{}
});

// 得到选择框的类型
onBeforeMount(()=>{
    data.table = getSelectData(titleValue.value)[0];
    console.log(data.table)
})

// 改变选项
const handleChoose = (data) => {
  console.log(data, "选择之后的值");
};

// 改变时间
const handleChangeDate = (data) => {
  data.date =
    formatTimeForChinaTime(data[0]) + "to" + formatTimeForChinaTime(data[1]);
  console.log(data.date);
};
//导出excel表
const handleExportExcel = () => {};
</script>
<style scoped>
.excel {
  padding: 20px;
}
.top,.middle{
    display: flex;
}
.top {
  justify-content: space-between;
}
::v-deep .el-icon svg {
  margin-right: 2px;
}
.middle > div{
    padding: 20px;
    margin-right: 10px;
}
.pages{
    float: right;
    padding: 10px;
}
.buttom{
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttom > div{
  width: 90%;
}
.table{
  border: 1px solid RGB(235,238,245);
  padding-top: 5px;
}
</style>