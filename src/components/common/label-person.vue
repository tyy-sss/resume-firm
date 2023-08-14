<template>
    <div class="label-person">
        <div class="label">
            <div v-for="(item, index) in data" :key="index"  >
              <div class="lable-item" v-if="index <= 7" :style="{ background: item.background,color:item.color }">{{ item.value }}</div>
              <div class="time" v-else-if="index === 8">. . .</div>
            </div>
          </div>
    </div>
</template>
<script setup>
const props = defineProps({ data: Array });
const data = props.data;
</script>
<style src="@/assets/css/card/enter-login/person/label.css" scoped>
</style>