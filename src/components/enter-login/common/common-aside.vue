<template>
  <div class="common-aside">
    <div class="top">
      <div class="title">
        <div class="logo">
          <img class="item" src="@/assets/images/logo.png" />
        </div>
        <div class="logo-name">logo</div>
      </div>
      <div class="user">
        <div class="user-avatar">
          <img src="@/assets/images/avatar.png" />
        </div>
        <div class="user-name">
          <span>{{ userData.name }}</span>
        </div>
      </div>
    </div>
    <div class="middle">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        text-color="RGB(59,163,254)"
        background-color="RGB(37, 40, 48)"
        @select="handleSelect"
      >
        <div v-for="(item, index) in menuData" :key="index">
          <el-menu-item :index="item.path">
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";
const router = useRouter();
// 初始化数据
const userData = reactive({
  avatar: "@/assets/images/avatar.png",
  name: "小涂吃饭了没",
});
const menuData = reactive(store.state.menu.menuData);

const handleSelect = (key, keyPath) => {
  router.push({ path: key });
};
</script>
<style src="@/assets/css/common/enter-login/common-aside.css" scoped>
</style>