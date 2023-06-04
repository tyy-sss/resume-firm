<template>
  <div class="personal-setting-header">
    <div class="title">{{ title }}</div>
  </div>
</template>
<script setup>
const props = defineProps({ title: String });
const title = props.title;
</script>
<style scoped>
.title{
    color: #414a60;
    font-size: 24px;
    height: 100%;
    display: inline-block;
    position: relative;
    margin-bottom: 30px;
    margin-left: 20px;
}
.title::after{
    content: "";
    position: absolute;
    top: 20px;
    left: 15px;
    width: 110%;
    height: 20px;
    background: rgba(103, 137, 229, 0.16);
}
</style>