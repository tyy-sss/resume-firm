<template>
  <div class="common-header">
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <div class="flex-grow" />
      <div class="left">
        <div class="logo">
          <img class="item" src="@/assets/images/logo.png" />
          <div class="logo-text"><span>智筛</span></div>
        </div>
      </div>
      <div class="flex-grow" />
      <el-menu-item
        id="checkProduct"
        class="item"
        @mouseover="handleCheckProduct"
        index="1"
        >产品</el-menu-item
      >
      <div
        ref="showProduct"
        style="z-index: 999;display: none;position: absolute;"
        @mouseleave="handleCloseProduct"
      >
        <common-header-product-card :productData="productData" />
      </div>
      <div class="right">
        <div class="btn-login item">
          <el-button type="primary"
            ><router-link class="no-default-style" to="/login"
              >登录</router-link
            ></el-button
          >
        </div>
      </div>
      <div class="flex-grow" />
    </el-menu>
  </div>
</template>
<script setup>
import { reactive, ref, nextTick } from "vue";
//产品数据
import { allProductData } from "@/assets/js/data/not-login/product-data";
//组件
import CommonHeaderProductCard from "@/components/not-login/card/common-header-product-card.vue";
//给子组件传值
const productData = reactive(allProductData);

const showProduct = ref(null);

// 触及产品
const handleCheckProduct = () =>{
  // 显示卡片
  showProduct.value.style.display = "block";

  // 获取指定元素并获取其位置信息
  const linkElement = document.getElementById("checkProduct");

  // 将获取位置信息的代码移动到 nextTick 中
  // 确保元素已经被正确渲染
  nextTick(() => {
    const linkRect = linkElement.getBoundingClientRect();

    // 计算卡片应该显示的位置
    const top = linkRect.top + linkRect.height;
    const left = linkRect.left - 300;

    // 将卡片设置为绝对定位，并将计算得到的位置应用到 top 和 left 属性上
    showProduct.value.style.top = top + "px";
    showProduct.value.style.left = left + "px";
  });
}

// 关闭产品
const handleCloseProduct = () => {
  showProduct.value.style.display = "none";
};
</script>
<style src="@/assets/css/common/not-login/common-header.css" scoped>
</style>