<template>
  <el-card class="box-card" shadow="always">
    <div class="product">
      <div
        class="product-item"
        v-for="(item, index) in productData"
        :key="index"
        
      >
        <div class="left">
          <img :src="require('@/assets/images/' + item.img)" />
        </div>
        <div class="right">
          <div class="right-title" :style="{ color: item.color }">
            {{ item.title }}
          </div>
          <div class="right-description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
const props = defineProps({
  productData: Object,
});
</script>
<style src="@/assets/css/card/not-login/product-card.css" scoped>
</style>