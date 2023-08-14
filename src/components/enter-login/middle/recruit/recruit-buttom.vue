<template>
  <div class="recruit-buttom">
    <el-button @click="handleTurnPage('left')"
      ><el-icon><ArrowLeft /></el-icon
    ></el-button>
    <div ref="content" class="scrollbar-content">
      <div
        v-for="(item, index) in data.data"
        :key="index"
        class="scrollbar-demo-item"
        :style="{ transform: 'translateX(-' + buttomList.move + 'px)' }"
      >
        <div class="item" >
          <post-sift-card :data="item"/>
        </div>
      </div>
    </div>
    <el-button @click="handleTurnPage('right')"
      ><el-icon><ArrowRight /></el-icon
    ></el-button>
  </div>
</template>
<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
// 数据
import { userData } from "@/assets/js/test/recruit-buttom";
// 界面
import postSiftCard from "@/components/enter-login/card/post-sift-card.vue";
const content = ref(null);
const data = reactive({
  data: userData,
});
const buttomList = reactive({
  realWidth: 0, // 真实宽度
  viewWidth: 0, // 可视宽度
  move: 0, // 移动位置
});
// 获得宽度
const rollTemp = () => {
  nextTick(() => {
    buttomList.realWidth = data.data.length * 320;
    buttomList.viewWidth = content.value.offsetWidth;
    console.log(buttomList.viewWidth, "可视宽度");
    console.log(buttomList.realWidth, "真实宽度");
  });
};
// 展示框向左向右
const handleTurnPage = (data) => {
  console.log(buttomList.move, "move前");
  if (data === "left") {
    // 向左移动
    if (buttomList.move > 320) {
      buttomList.move = buttomList.move - 320;
    } else {
      buttomList.move = 0;
    }
  } else {
    // 向右移动
    if (buttomList.move + buttomList.viewWidth + 320 > buttomList.realWidth) {
      buttomList.move = buttomList.move;
    } else {
      buttomList.move = buttomList.move + 320;
    }
  }
};
onMounted(() => {
  rollTemp();
});
</script>
<style scoped>
.recruit-buttom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1050px;
}
.el-button {
  margin: 7.5px;
  height: 100px;
  width: 30px;
  background: RGB(189, 189, 189);
  border: 0;
  color: #fff;
}
.scrollbar-content {
  display: flex;
  max-width: 95%;
  overflow: hidden;
}
.scrollbar-content > div {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
}

.item {
  width: 320px;
  height: 90%;
  margin: 0;
}
</style>