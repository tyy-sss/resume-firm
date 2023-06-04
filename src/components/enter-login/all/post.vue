<template>
  <div class="post">
    <div class="top">
      <div class="search">
        <div class="search-input">
          <el-input v-model="input1" class="w-50 m-2" :suffix-icon="Search" />
        </div>
        <div class="select">
          <select-custom
            :width-value="150"
            :select-list="recruitTimeSelectList"
            @handle-check-data="handleCheckData"
          ></select-custom>
        </div>
      </div>
      <div>
        <el-button type="primary"
          >   <router-link class="no-default-style" target="_blank" to="/turn/add-post">创建职位</router-link>
          </el-button
        >
      </div>
    </div>
    <div class="middle">
      <div class="post-news">
        <div>
          <post-card />
          <post-card />
          <post-card />
          <post-card />
          <post-card />
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

// 界面
import selectCustom from "@/components/common/select-custom.vue";
import postCard from "@/components/enter-login/card/all/post-card.vue";
import { Search } from "@element-plus/icons-vue";

// 数据
import { recruitTimeSelectList } from "@/assets/js/data/select-data/post-search-data";

import { ref } from "vue";
const input1 = ref("");

// 得到修改后的下拉框数据
const handleCheckData = (data) => {
  console.log(data, "data");
};
                      
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.search {
  display: flex;
  justify-content: center;
  align-self: start;
}
.select {
  margin-left: 30px;
}
.pages {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
}
.post-news {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-news > div {
  width: 97%;
  min-width: 800px;
}
  /* 取消指定 router-link 元素的默认样式 */
  .no-default-style {
    text-decoration: none;
    color: #fff;
  }
</style>