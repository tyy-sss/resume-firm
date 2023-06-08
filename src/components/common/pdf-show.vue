<template>
  <div class="pdf-show">
    <div>
      <vue-pdf-embed
        class="vue-pdf-embed"
        :source="state.source"
        :style="scale"
        :page="state.pageNum"
      />
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩小</div>
    </div>
  </div>
</template>
    <script setup>
import { reactive, onMounted, computed } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs/esm";

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
const pageZoomOut = () => {
  if (state.scale < 2) {
    state.scale += 0.1;
  }
};
const pageZoomIn = () => {
  if (state.scale > 1) {
    state.scale -= 0.1;
  }
};
</script>
    <style lang="css" scoped>
.pdf-show {
  position: relative;
  padding: 10px 10px;
  box-sizing: border-box;
}

.vue-pdf-embed {
  text-align: center;
  width: 800px;
  min-height: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}
.page-tool {
  position: absolute;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
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
.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
}
</style>