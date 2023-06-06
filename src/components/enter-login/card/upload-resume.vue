<template>
  <div class="upload-resume">
    <el-dialog v-model="dialogTableVisible" title="添加候选人">
      <el-divider />
      <div class="post">
        <div>添加候选人</div>
        <div>至</div>
        <div>{{ post }}</div>
      </div>
      <div class="content">
        <div class="upload">
          <div class="img">
            <div class="text">
              <div><img src="@/assets/images/upload.png" /></div>
              <div class="big">点击 或 拖拽</div>
              <div class="small">即可上传简历文件</div>
            </div>
          </div>
          <div class="title">
            <div>支持PDF，DOC，DOCX，JPEG，JPG，PNG</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({ post: String });
const post = props.post;
var dialogTableVisible = ref(false);

// 把参数暴露给父组件，让父组件进行修改
defineExpose({
  dialogTableVisible,
});
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
</style>