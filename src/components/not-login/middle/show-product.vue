<template>
  <div class="show-product">
    <div class="title">人工智能时代，用 AI 为招聘赋能</div>
    <div class="middle">
      <div class="product">
        <div
          class="product-item"
          v-for="(item, index) in allProductData"
          :style="{ backgroundColor: item.backgroundColor }"
          :key="index"
        >
          <div class="show-item">
            <div class="product-img">
              <img :src="require('@/assets/images/' + item.img)" />
            </div>
            <div class="product-text">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//产品数据
import { allProductData } from "@/assets/js/data/not-login/product-data";
</script>
<style src="@/assets/css/middle/not-login/show.css" scoped>
</style>