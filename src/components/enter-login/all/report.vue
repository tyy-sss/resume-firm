<template>
  <div class="report">
    <div>
      <div class="title">
        <div class="top">
          <span>系统报表</span>
        </div>
        <div class="buttom">
          <span
            >系统报表可以更好地帮助你跟踪并分析招聘过程中的招聘数据与候选人进展</span
          >
        </div>
      </div>
      <div class="middle">
        <div v-for="(item,index) in nameData" :key="index">
           <report-card :data="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import reportCard from "@/components/enter-login/card/all/report-card.vue"
import { nameData } from "@/assets/js/data/report/excel-data";
</script>
<style scoped>
.report {
  display: flex;
  justify-content: center;
}
.report > div {
  width: 97%;
}
.top {
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: #414a60;
}
.buttom {
  font-size: 13px;
  line-height: 16px;
  margin: 10px 0 25px;
  color: #8d92a1;
}
.middle{
    display: flex;
}
.report-card{
    margin-right: 30px;
}
</style>