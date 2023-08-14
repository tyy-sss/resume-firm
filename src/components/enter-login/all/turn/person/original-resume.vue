<template>
  <div class="original-resume">
    <div class="show">
      <div class="load">
        <el-button class="click" @click="handleExportPDF"
          >导出PDF文件</el-button
        >
      </div>
      <div class="pdf-show" v-if="data.isCheck">
        <pdf-show :pdf-url="data.pdfShowSrc" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
import pdfShow from "@/components/common/pdf-show.vue";
import axios from "axios";
// 接口
import { getOneResume } from "@/api/resume";
// 界面参数消息
const route = new useRoute();
const pkResumeId = ref(route.query.pkResumeId).value;
const data = reactive({
  pdfShowSrc: "",
  isCheck: false,
  fileName:"",
});
const handleExportPDF = async () => {
  const response = await axios({
      url: data.pdfShowSrc,
      method: 'GET',
      responseType: 'blob', // 必须指定为blob类型才能下载
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    const fileName = data.fileName + '简历.pdf';
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
};

// 得到简历的消息
const getResume = () => {
  getOneResume(pkResumeId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.pdfShowSrc = res.data.data.pdfUrl;
      data.fileName = res.data.data.name;
      data.isCheck = true;
    }
  });
};
onMounted(() => {
  getResume();
});
</script>
<style scoped>
.original-resume {
  display: flex;
  justify-content: center;
  align-items: center;
}
.show {
  padding: 10px;
}
.load {
  height: 50px;
  background-color: RGB(50, 54, 57);
  border-bottom: 5px solid RGB(80, 84, 87);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.pdf-show {
  padding: 10px;
  background-color: RGB(230, 230, 230);
  width: 720px;
}
.click {
  margin-right: 3vh;
}
</style>