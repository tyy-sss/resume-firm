<template>
     <el-dialog v-model="dialogTableVisible" title="Shipping address">
        111
  </el-dialog>
</template>
<script setup>
const props = defineProps({ dialogTableVisible: Boolean })
var dialogTableVisible = props.dialogTableVisible;
console.log(dialogTableVisible)
</script>