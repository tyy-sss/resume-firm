<template>
  <div class="pdf-show">
    <div class="show">
      <div class="turn" @click="lastPage">&lt;</div>
      <ul class="infinite-list" style="overflow: auto" ref="content">
        <vue-pdf-embed
          id="content"
          class="vue-pdf-embed"
          :source="state.source"
          :style="scale"
          :page="state.pageNum"
        />
      </ul>
      <div class="turn" @click="nextPage">&gt;</div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed, ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
// 展示
import { createLoadingTask } from "vue3-pdfjs/esm";

const content = ref(null);
const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
});
const state = reactive({
  source: props.pdfUrl,
  pageNum: 1,
  scale: 1,
  numPages: 0,
});
onMounted(() => {
  const loadingTask = createLoadingTask(state.source);
  loadingTask.promise.then((pdf) => {
    state.numPages = pdf.numPages;
  });
});

// 左右查看操作
const scale = computed(() => `transform:scale(${state.scale})`);

const lastPage = () => {
  if (state.pageNum > 1) {
    state.pageNum -= 1;
  }
};
const nextPage = () => {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1;
  }
};
</script>
<style lang="css" scoped>
.pdf-show {
  position: relative;
  box-sizing: border-box;
}
.show {
  display: flex;
  justify-content: center;
  align-items: center;
}
.infinite-list {
  width: 650px;
}
.vue-pdf-embed {
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
}
.turn {
  height: 100px;
  width: 30px;
  background: RGB(189, 189, 189);
  border: 0;
  margin-left: 15px;
  margin-right: 15px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.page-tool {
  position: absolute;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  background: rgb(66, 66, 66);
  color: white;
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
.page-tool .page-tool-item {
  padding: 8px 15px;
  cursor: pointer;
}
</style>