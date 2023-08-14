<template>
  <div class="common-layout">
    <el-container>
      <el-header><common-header /></el-header>
      <el-main>
        <div class="turn">
          <div class="item"><router-view /></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
  <script setup>
import commonHeader from "@/components/enter-login/common/common-header.vue";
import store from "@/store";
console.log(store.state.global.token);
</script>
  <style src="@/assets/css/enter/enter-login-main.css" scoped>
</style>
<style src="@/assets/css/enter/enter-login-turn.css" scoped>
</style>