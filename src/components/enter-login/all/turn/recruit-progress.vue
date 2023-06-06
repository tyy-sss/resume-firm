<template>
  <div class="post-progress">
    <div class="top">
      <div class="left"><post-left-news :data="recruitPostData" /></div>
      <div class="right">
        <div class="edit" @click="handleTurnTo">编辑</div>
        <div>
          <div
            v-if="recruitPostData.postProgress === '招聘中'"
            class="close"
            @click="handleOpenDialog('确认关闭该职位？')"
          >
            关闭
          </div>
          <div v-else class="over">
            <div @click="handleOpenDialog('确认重新激活该职位？')">激活</div>
            <div>
              <el-button
                type="danger"
                link
                @click="handleOpenDialog('确定删除该职位？')"
                >删除
              </el-button>
            </div>
          </div>
          <div class="dialog">
            <el-dialog
              v-model="dialogVisible.close"
              title="操作确定"
              width="30%"
            >
              <span>{{ dialogVisible.show }}</span>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible.close = false"
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
        <upload-resume ref="upload" :post="titleValue" />
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
      <el-button @click="handleTurnPage('left')"
        ><el-icon><ArrowLeft /></el-icon
      ></el-button>
      <div ref="content" class="scrollbar-content">
        <p
          v-for="(item, index) in data"
          :key="index"
          class="scrollbar-demo-item"
          :style="{transform:'translateX(-'+buttomList.move+'px)'}"
        >
          <post-sift-card />
        </p>
      </div>
      <el-button @click="handleTurnPage('right')"
        ><el-icon><ArrowRight /></el-icon
      ></el-button>
    </div>
  </div>
</template>
<script setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import postLeftNews from "@/components/enter-login/card/post-left-news.vue";
import uploadResume from "@/components/enter-login/card/upload-resume.vue";
import postSiftCard from "@/components/enter-login/card/post-sift-card.vue";

const router = useRouter();
const route = useRoute();
const content = ref(null)
const titleValue = ref(route.query.title).value;
var dialogVisible = reactive({
  close: false,
  show: "",
});
var progressItemShow = ref(1);
import { getRecruitPostData } from "@/assets/js/data/post/recruit";
const recruitPostData = getRecruitPostData(titleValue);

const upload = ref(null);
const handleUpload = () => {
  upload.value.dialogTableVisible = true;
};
const data = reactive([{}, {}, {}, {}, {}, {}]);
const buttomList = reactive({
  realWidth: 0, // 真实宽度
  viewWidth: 0, // 可视宽度
  move: 0, // 移动位置
});
// 编辑职位
const handleTurnTo = () => {
  const href = router.resolve({
    path: "/turn/add-post",
    query: {
      title: titleValue,
    },
  });
  window.open(href.href);
};
// 打开弹窗
const handleOpenDialog = (show) => {
  (dialogVisible.show = show), (dialogVisible.close = true);
};
// 关闭职位
const handleClose = () => {
  if (dialogVisible.show === "确认关闭该职位？") {
  } else if (dialogVisible.show === "确认重新激活该职位？") {
  } else if (dialogVisible.show === "确定删除该职位？") {
  }
  // 向后端发送请求关闭该职位
  dialogVisible.close = false;
};
// 选择展示的状态
const handleClickActive = (data) => {
  progressItemShow.value = data;
};
// 获得宽度
const rollTemp = () => {
  nextTick(() => {
    buttomList.realWidth = data.length * 260;
    buttomList.viewWidth = content.value.offsetWidth;
  });
};
// 展示框向左向右
const handleTurnPage = (data) => {
  console.log(buttomList.move,"move前")
  if(data === 'left'){
    // 向左移动
   if(buttomList.move > 260){
    buttomList.move = buttomList.move - buttomList.viewWidth;
   }else{
    buttomList.move = 0;
   }
  }else{
    // 向右移动
    if((buttomList.move + buttomList.viewWidth + 260)> buttomList.realWidth ){
      buttomList.move = buttomList.move;
    }else{
      buttomList.move = buttomList.move + buttomList.viewWidth;
    }
  }
};

onMounted(() => {
  rollTemp();
});
</script>
<style scoped>
.post-progress > div {
  width: 1110px;
}
.top,
.right {
  display: flex;
  justify-content: space-between;
}
.middle,
.buttom {
  display: flex;
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
.top{
  margin-right: 40px;
}
.top,.middle {
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
.buttom .el-button {
  margin: 5px;
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
  margin: 4px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
}

.scrollbar-demo-item > div {
  margin-right: 13px;
  height: 90%;
}
</style>