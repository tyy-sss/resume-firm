<template>
  <div>
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange"
      placeholder="请选择地址"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { pcTextArr } from "element-china-area-data";
const options = ref(pcTextArr);
let selectedOptions = ref([]);
const emit= defineEmits(['getAddress'])
const handleChange = () => {
  var address = selectedOptions.value[0]+'/'+selectedOptions.value[1];
  emit('getAddress',address)
};
defineExpose({
  selectedOptions
})
</script>