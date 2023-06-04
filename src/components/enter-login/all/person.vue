<template>
  <div class="person">
    <div class="top">
      <div class="search">
        <el-input
          v-model="input1"
          placeholder="请输入职位，公司，学校，技能，专业等关键词"
        >
          <template #append
            ><el-button @click="handleSearch" :icon="Search"
          /></template>
        </el-input>
      </div>
    </div>
    <div class="buttom">
      <div class="person-news">
        <div class="person-item">
          <person-card />
          <person-card />
          <person-card />
          <person-card />
          <person-card />
        </div>
      </div>
      <div class="pages">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="40"
          class="mt-4"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import personCard from "@/components/enter-login/card/all/person-card.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const input1 = ref("");

const handleSearch = () => {
  alert("搜索");
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.search {
  width: 90%;
}
.el-input {
  height: 50px;
}
.el-button {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 20px !important;
}
::v-deep .el-input-group__append {
  color: #fff;
  background-color: RGB(64, 158, 255);
}
.person-news {
  display: flex;
  justify-content: center;
  align-items: center;
}
.person-item{
  width: 97%;
  min-width: 1000px;
}
.pages {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
}
</style>