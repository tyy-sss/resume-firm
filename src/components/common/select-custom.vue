<template>
  <div class="select-custom">
    <!-- 输入框 -->
    <div
      class="input-container"
      :style="{ width: props.widthValue + 'px' }"
      @click="handleSelectContent"
    >
      <div>
        <div class="input" v-if="selectList.isDefault">
          {{ selectList.value }}
        </div>
        <div v-else class="placeholder">{{ selectList.value }}</div>
      </div>
      <div class="input-icon">
        <el-icon><ArrowDown /></el-icon>
      </div>
    </div>
    <div
      ref="selectContent"
      :style="{ width: props.widthValue + 'px' }"
      class="select-content"
    >
      <div v-for="(item, index) in selectList.list" :key="index">
        <div class="show-item" @click="handleCheck(item.value)">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
// 获得父组件的传值
const props = defineProps({ selectList: Object, widthValue: Number });
let selectList = reactive(props.selectList);
// 给父组件传值
const emit = defineEmits(["handleCheckData"]);

// 获得下拉框
const selectContent = ref("");

// 展示
const handleSelectContent = () => {
  selectList.isShow = !selectList.isShow;
  if (selectList.isShow) {
    selectContent.value.style.display = "block";
  } else {
    selectContent.value.style.display = "none";
  }
};
// 选择下拉框的数据
const handleCheck = (data) => {
  if (!selectList.isDefault) {
    selectList.isDefault = !selectList.isDefault;
  }
  handleSelectContent();
  // 只有在改变的时候才触发父组件的方法
  if (selectList.value != data) {
    selectList.value = data;
    // 给父组件传值
    emit("handleCheckData", data);
  }
};
watch(()=>props.selectList,(newValue,oldValue)=>{
  console.log(newValue )
  selectList = newValue;
})
</script>
<style scoped>
.input-container {
  width: 150px;
  height: 30px;
  display: flex;
  border: 1px solid RGB(213, 215, 218);
  border-radius: 5px;
  background: #fff;
  color: #999999;
  justify-content: space-between;
}
.input,
.placeholder {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-left: 10px;
  color: RGB(99, 103, 111);
}
.input-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-right: 10px;
}
.select-content {
  background: #fff;
  border: 1px solid RGB(213, 215, 218);
  border-top: 0;
  border-radius: 5px;
  color: #999999;
  z-index: 999;
  display: none;
  position: absolute;
  width: 150px;
}
.show-item {
  padding: 5px;
}
.show-item:hover {
  color: black;
  font-weight: bold;
  background: RGB(238, 240, 245);
}
.placeholder {
  font-size: 15px;
  color: RGB(168, 171, 178);
}
</style>