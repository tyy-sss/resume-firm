<template>
  <div class="common-header">
    <div class="left">
      <div class="title">
        <div class="logo">
          <img class="item" src="@/assets/images/logo.png" />
        </div>
      </div>
    </div>
    <div class="right">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img class="user" :src="data.userData.accountPicture" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item command="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 数据处理
import { getUserNews } from "@/assets/js/util/user";
const handleClick = (command) => {
  if (command === "exit") {
    router.push({ path: "/login" });
  }
};
const data = reactive({
  userData:{
    accountPicture: "",
  }
})
onMounted(() => {
  data.userData = reactive(getUserNews());
});
</script>
<style src="@/assets/css/common/enter-login/common-header.css" scoped>
</style>
    