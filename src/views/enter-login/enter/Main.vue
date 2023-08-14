<template>
  <div class="common-layout">
    <el-container>
      <el-header><common-header /></el-header>
      <el-container>
        <el-aside> <common-aside /></el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import commonAside from "@/components/enter-login/common/common-aside.vue";
import commonHeader from "@/components/enter-login/common/common-header.vue";
</script>
<style src="@/assets/css/enter/enter-login-main.css" scoped>
</style>