<template>
  <div class="left-news">
    <div class="role">
      <h1 v-html="data.role"></h1>
    </div>
    <div class="information">
      <div class="information-header">
        <div class="img" :style="{ background: data.headerColor }"></div>
        <div class="news">{{ data.postProgress }}</div>
      </div>
      <div class="information-ender">
        <div v-for="(item, index) in data.list" :key="index">
          <div class="content">
            <div class="split">
              <span>|</span>
            </div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let data = ref({});
defineExpose({
  data,
});
</script>
<style scoped>
.left-news {
  display: flex;
  color: #414a60;
  align-items: center;
}
.role {
  margin-right: 20px;
}
.information {
  display: flex;
  justify-content: center;
  align-items: center;
}
.information-header,
.information-ender {
  display: flex;
  justify-content: center;
  align-items: center;
}
.information-header .img {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 5px;
}
.information-ender > div {
  display: flex;
}
.content {
  display: flex;
}
.split {
  padding-left: 10px;
  padding-right: 10px;
}
</style>