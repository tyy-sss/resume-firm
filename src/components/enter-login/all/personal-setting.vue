<template>
  <div class="personal-setting">
    <div class="choose">
      <div class="menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="RGB(65,74,96)"
          @select="handleSelect"
        >
          <div v-for="(item, index) in menuData" :key="index">
            <el-menu-item :index="item.allPath">
             {{ item.menuName }}
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { personalAsideData,changePersonalSettingPath } from "@/assets/js/data/menu";

const menuData = reactive(personalAsideData);

const router = useRouter();

const handleSelect = (key, keyPath) => {
  // 这里跳转路由之后修改侧边菜单，个人设置的路径
  changePersonalSettingPath(key,"个人设置");
  router.push({ path: key });
};
</script>
<style scoped>
.personal-setting {
  display: flex;
  justify-content: center;
  align-items: center;
}
.choose {
  width: 97%;
  height: 97%;
  background: #fff;
  display: flex;
}
.menu {
  width: 170px;
}
.menu,.content{
  height: 80vh;
}
.content{
  padding: 20px;
  border-left: 1px solid RGB(220,223,230);
}
::v-deep .el-menu{
  border: 0;
}
::v-deep .el-menu-item {
  display: flex;
  justify-content: center;
  font-size: 17px;
  border: 0;
}
.el-menu-item:hover,
.el-menu-item.is-active {
  border-right: 2px solid RGB(64, 158, 255);
  color: RGB(64, 158, 255);
  background: #fff;
}
</style>