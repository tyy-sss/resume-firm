<template>
  <div class="common-aside">
    <div class="middle">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        text-color="RGB(116,121,140)"
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
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";
const router = useRouter();
// 数据处理
import { getUserNews } from "@/assets/js/util/user";
// 初始化数据
const data = reactive({
  userData: reactive({
    accountPicture: "",
    userName: "",
  }),
});
const menuData = reactive(store.state.menu.menuData);

const handleSelect = (key, keyPath) => {
  router.push({ path: key });
};
onMounted(() => {
  data.userData = reactive(getUserNews());
});
</script>
<style src="@/assets/css/common/enter-login/common-aside.css" scoped>
</style>