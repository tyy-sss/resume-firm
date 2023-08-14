<template>
  <div class="post-progress">
    <div class="top">
      <div class="left"><post-left-news ref="postLeftNewsRef" /></div>
      <div class="right">
        <div class="edit" v-if="isPermission(`editPosition`)" @click="handleTurnTo">编辑</div>
        <div>
          <div
            v-if="data.recruitPostData.postProgress === '招聘中'&&isPermission(`closePosition`)"
            class="over"
          >
            <div @click="handleOpenDialog('确认关闭该职位？')">关闭</div>
          </div>
          <div v-else-if="data.recruitPostData.postProgress !== '招聘中'&&isPermission(`openPosition`)" class="over">
            <div @click="handleOpenDialog('确认重新激活该职位？')">激活</div>
          </div>
          <div class="dialog">
            <el-dialog
              v-model="data.dialogVisible.close"
              title="操作确定"
              width="30%"
            >
              <span>{{ data.dialogVisible.show }}</span>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="data.dialogVisible.close = false"
                    >取消</el-button
                  >
                  <el-button type="primary" @click="handleClose">
                    确定
                  </el-button>
                </span>
              </template>
            </el-dialog>
          </div>
        </div>
        <el-button type="primary" @click="handleUpload">添加候选人</el-button>
        <upload-resume ref="upload" />
      </div>
    </div>
    <div class="middle">
      <div
        :class="progressItemShow === 1 ? 'is-active' : ''"
        @click="handleClickActive(1)"
      >
        沟通中
      </div>
      <div
        :class="progressItemShow === 2 ? 'is-active' : ''"
        @click="handleClickActive(2)"
      >
        已淘汰
      </div>
    </div>
    <div class="buttom">
      <recruit-buttom/>
    </div>
  </div>
</template>
<script setup>
import {  onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import store from "@/store";
//界面
import postLeftNews from "@/components/enter-login/card/post-left-news.vue";
import uploadResume from "@/components/enter-login/card/upload-resume.vue";
import recruitButtom from "@/components/enter-login/middle/recruit/recruit-buttom.vue"
// 接口
import { getPosition, closePosition, openPosition } from "@/api/posts";
// 数据处理
import { handleRecruitPostData } from "@/assets/js/views/recruit/recruit-progress";
import { isPermission } from "@/assets/js/util/permissions";
// 数据
import { recruitPostData,closeRecruitPostData } from '@/assets/js/test/recruit-progress'
const upload = ref(null);
const postLeftNewsRef = ref(null);
const data = reactive({
  positionId: ref(route.query.id).value,
  recruitPostData: reactive({
    role: "",
    headerColor: "",
    postProgress: "",
    list: [],
  }),
  dialogVisible: reactive({
    close: false,
    show: "",
  }),
});
//展示是关闭还是激活
var progressItemShow = ref(1);
// 编辑职位
const handleTurnTo = () => {
  const href = router.resolve({
    path: "/turn/post/post-news",
    query: {
      positionId: data.positionId,
    },
  });
  window.open(href.href);
};
// 打开弹窗
const handleOpenDialog = (show) => {
  (data.dialogVisible.show = show), (data.dialogVisible.close = true);
};
// 打开上传的对话框
const handleUpload = () => {
  upload.value.data.dialogTableVisible = true;
  upload.value.data.post = data.recruitPostData.role;
};
// 关闭职位
const handleClose = () => {
  if (data.dialogVisible.show === "确认关闭该职位？") {
    console.log("关闭");
    // closePosition(data.positionId).then((res) => {
    //   console.log(res);
    //   if (res.data.code === store.state.global.success) {
    //     getPostData();
    //   }
    // });
    data.recruitPostData = closeRecruitPostData;
    postLeftNewsRef.value.data = data.recruitPostData;
  } else if (data.dialogVisible.show === "确认重新激活该职位？") {
    // openPosition(data.positionId).then((res) => {
    //   console.log(res);
    //   if (res.data.code === store.state.global.success) {
    //     getPostData();
    //   }
    // });
    data.recruitPostData = recruitPostData;
    postLeftNewsRef.value.data = data.recruitPostData;
  }
  // 向后端发送请求关闭该职位
  data.dialogVisible.close = false;
};
// 选择展示的状态
const handleClickActive = (data) => {
  progressItemShow.value = data;
};
// 获得职位消息
const getPostData = () => {
  getPosition(data.positionId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.recruitPostData = handleRecruitPostData(res.data.data);
      postLeftNewsRef.value.data = data.recruitPostData;
    }
  });
};
onMounted(() => {
  // getPostData();
  data.recruitPostData = recruitPostData;
  postLeftNewsRef.value.data = recruitPostData;
});
</script>
<style scoped>
.post-progress {
  padding: 40px;
}
.top,
.right {
  display: flex;
  justify-content: space-between;
}
.top .left {
  display: flex;
  align-items: center;
}
.middle,
.buttom {
  display: flex;
  margin-top: 20px;
}
.right > div {
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #6772e5;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.over {
  display: flex;
  justify-content: center;
  align-items: center;
}
.over > div {
  margin-right: 10px;
}
.top {
  margin-right: 40px;
}
.top,
.middle {
  margin-bottom: 10px;
  margin-left: 40px;
}
.middle > div {
  background: RGB(238, 240, 245);
  padding: 10px;
  color: #414a60;
  margin-right: 4px;
  font-size: 14px;
  cursor: pointer;
}
.is-active {
  color: RGB(103, 114, 229) !important;
}
.buttom {
  justify-content: center;
  align-items: center;
}
</style>