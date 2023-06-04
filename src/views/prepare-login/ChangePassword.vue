<template>
    <div class="common-layout">
    <el-container>
      <el-header><common-header /></el-header>
      <el-main>
        <change-password />
      </el-main>
      <el-footer><common-footer/></el-footer>
    </el-container>
  </div>
</template>
<script setup>
import commonFooter from "@/components/not-login/common/common-footer.vue";
import commonHeader from "@/components/not-login/common/common-header.vue";
import changePassword from "@/components/prepare-login/change-password.vue";
</script>
<style src="@/assets/css/prepare-login/enter-login-main.css" scoped>
</style>