<template>
  <div class="common-layout">
    <el-container>
      <el-header><common-header /></el-header>
      <el-main>
        <div class="middle">
          <show-product />
          <introduct-product />
        </div>
      </el-main>
      <el-footer><common-footer/></el-footer>
    </el-container>
  </div>
</template>
<script setup>
import commonFooter from "@/components/not-login/common/common-footer.vue";
import CommonHeader from "@/components/not-login/common/common-header.vue";
import IntroductProduct from "@/components/not-login/middle/introduct-product.vue";
import ShowProduct from "@/components/not-login/middle/show-product.vue";
</script>
<style src="@/assets/css/not-login-main.css" scoped>
</style>