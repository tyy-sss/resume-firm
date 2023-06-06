<template>
  <div class="progress-top">
    <div class="left">
      <div class="title">
        <span>招聘进展</span>
      </div>
      <div class="left-news">
        <num-name
          :data="progressTopLeftData"
          :styleData="topLeftStyleData"
        ></num-name>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <span>本年度招聘完成度</span>
      </div>
      <div class="right-news">
        <div
          class="item"
          v-for="(item, index) in progressTopRightData"
          :key="index"
        >
          <div class="item-news">
            <div class="name">{{ item.name }}</div>
            <div class="num">{{ item.num }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  progressTopLeftData,
  progressTopRightData,
  topLeftStyleData,
} from "@/assets/js/data/home/home-data";
import numName from "@/components/enter-login/common/num-name.vue";
</script>
<style src="@/assets/css/home/progress-top.css" scoped>
</style>