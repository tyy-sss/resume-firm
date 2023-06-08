<template>
  <div class="original-resume">
    <div>
        <div class="load">
            <el-button @click="handleExportPDF">导出PDF文件</el-button>
        </div>
        <div class="pdf-show">
      <pdf-show :pdf-url="pdfShowSrc" />
    </div>
    </div>
  
  </div>
</template>
<script setup>
import pdfShow from "@/components/common/pdf-show.vue";
import pdfShowSrc from "@/assets/pdf-view/test.pdf";

import jsPDF from 'jspdf';

const handleExportPDF = () =>{
}
</script>
<style scoped>
.original-resume{
    width:1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>