<template>
  <div class="turn-label">
    <div class="name">
      {{ data.name }}
    </div>
    <div class="label-list">
      <div v-for="(item, index) in data.list" :key="index">
        <el-tag class="label" :type="data.type" size="large" round>{{ item.value }}</el-tag>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ data: Object });
const data = props.data;
</script>
<style scoped>
.name {
  margin-top: 10px;
  font-size: 18px;
  padding-left: 11px;
  color: #28283c;
  position: relative;
}
.label-list{
    display: flex; 
    flex-wrap: wrap;
}
.label{
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}
</style>