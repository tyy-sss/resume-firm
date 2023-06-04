<template>
  <div class="progress-buttom">
    <div class="graphics">
      <div id="progress-up" style="width: 1200px; height: 380px"></div>
    </div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
function init() {
  var progressUp = echarts.init(document.getElementById("progress-up"));
  progressUp.setOption({
    title: {
      text: "招聘趋势",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["新简历", "面试", "offer"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", "2023-05-01", "2023-06-01", "2023-07-01"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "新简历",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "面试",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "offer",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  });
}
onMounted(() => {
  init();
});
</script>
<style scoped>
.progress-buttom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
}
</style>