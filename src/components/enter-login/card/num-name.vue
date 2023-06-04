<template>
  <div class="num-name">
    <div
      class="item"
      v-for="(item, index) in data"
      :key="index"
      :style="{ width: styleData.width,height: styleData.height }"
    >
      <div class="item-news">
        <div class="num">{{ item.num }}</div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({data:Array,styleData:Object})
const data = props.data;
const styleData = props.styleData;
</script>
<style src="@/assets/css/card/enter-login/num-name.css" scoped>
</style>