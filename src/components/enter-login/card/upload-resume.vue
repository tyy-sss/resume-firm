<template>
  <div class="upload-resume">
    <el-dialog v-model="data.dialogTableVisible" title="添加候选人">
      <el-divider />
      <div class="post" v-if="data.post">
        <div>添加候选人</div>
        <div>至</div>
        <div>{{ data.post }}</div>
      </div>
      <div class="content">
        <div class="upload">
          <el-upload
            class="upload-demo"
            drag
            multiple
            :show-file-list="false"
            accept=".doc,.docx,.pdf,image/png,image/jpg,image/jpeg"
            action="#"
            :http-request="uploadAction"
            :before-upload="beforeUpload"
          >
            <div>
              <div class="loading" v-if="!data.upload.isProgress">
                <div>
                  <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                  <div class="big">点击 或 拖拽</div>
                  <div class="small">即可上传简历文件</div>
                </div>
                </div>
               
              </div>
              <div class="loading" v-else v-loading="data.upload.isProgress"></div>
            </div>
            <template #tip>
              <div class="el-upload__tip title">
                <div>
                  <div>支持PDF，DOC，DOCX，JPEG，JPG，PNG</div>
                  <div>限制一个文件，下一个文件会覆盖上一个文件</div>
                </div>
              </div>
            </template>
          </el-upload>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import SparkMD5 from "spark-md5";
// 接口
import { uploadSingleResume } from "@/api/resume";
import { ElMessage } from "element-plus";
const data = reactive({
  dialogTableVisible: false,
  post: "",
  upload: {
    isProgress: false,
  },
});
// 把参数暴露给父组件，让父组件进行修改
defineExpose({
  data,
});
// 上传文件
const uploadAction = (option) => {
  // md5加密
  const fileReader = new FileReader();
  var spark = new SparkMD5.ArrayBuffer();
  // 获取文件二进制数据
  fileReader.readAsArrayBuffer(option.file);
  fileReader.onload = function (e) {
    spark.append(e.target.result);
    var md5 = spark.end();
    uploadSingleResume(option.file, md5).then((res) => {
      ElMessage.success("上传成功");
      data.dialogTableVisible = false;
      setTimeout(()=>{
        data.upload.isProgress = false;
      },100)
    });
  };
};
const beforeUpload = (rawFile) => {
  data.upload.isProgress = true;
};
</script>
<style scoped>
.post {
  display: flex;
  font-size: 17px;
}
.post > div {
  margin-right: 5px;
}
::v-deep .el-divider--horizontal {
  margin: 2px 0;
}
.content,
.img,
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content,
.title,
.post,
.img {
  padding: 20px;
}
.upload {
  width: 90%;
}
.img {
  padding: 10px;
  border: 3px dashed RGB(217, 217, 217);
  border-radius: 10px;
  background: #eef0f5;
}

img {
  width: 200px;
  height: 150px;
}
.text > div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.big {
  color: #32325d;
  font-size: 22px;
  font-weight: 600;
}
.small {
  color: #32325d;
  font-size: 18px;
}
/* 加载框 */
.loading{
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>