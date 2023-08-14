<template>
  <div class="turn-position-team">
    <div class="item">
      <div class="title">{{ data.positionData.title }}</div>
      <div class="description">{{ data.positionData.description }}</div>
      <div class="show">
        <div class="list">
          <el-tag
            v-for="(item, index) in data.list"
            :key="index"
            class="mx-1"
            closable
            @close="handleDetelePositionTeam(item)"
            effect="light"
          >
            <div class="position-member">
              <img :src="item.userPicture" />
              <div>{{ item.userName }}</div>
            </div>
          </el-tag>
        </div>
        <div class="add" @click="handleOpenDia">
          <el-icon><CirclePlus /></el-icon>
          <div>添加</div>
        </div>
      </div>
    </div>
    <el-dialog
      v-model="data.dialog.dialogVisible"
      :title="data.dialog.title"
      width="460px"
      :before-close="handleClose"
      ><el-select
        :placeholder="'选择添加' + data.positionData.title"
        v-model="data.select.select"
        class="m-2"
        style="width: 100%"
      >
        <el-option
          v-for="(item, index) in data.select.postSelectList"
          :key="index"
          :label="item.userName"
          :value="item"
        />
      </el-select>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleAddPositionTeam">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch } from "vue";
import store from "@/store";
// 数据处理
import {
  handlePostSelectList,
  handlePostList,
} from "@/assets/js/data/post/position-team";
//接口
import {
  optionalPositionTeam,
  addPositionTeam,
  deletePositionTeam,
  selectedPositionTeam,
} from "@/api/position-team";
import { ElMessage } from "element-plus";
// 数据
const props = defineProps({ positionData: Object, positionId: String });
const data = reactive({
  positionData: reactive(props.positionData),
  dialog: {
    dialogVisible: false,
    title: "",
    width: 400,
    choosePosition: {
      value: "",
      userId: "",
    },
  },
  list: [],
  select: {
    postSelectList: [],
    select: null,
  },
});
// 打开对话框
const handleOpenDia = () => {
  getSelectTeamMember();
  console.log(data.select.postSelectList)
  data.select.select = null;
  data.dialog.title = "添加" + data.positionData.title;
  data.dialog.dialogVisible = true;
};
// 关闭对话框
const handleClose = () => {
  data.dialog.dialogVisible = false;
};
// 删除团队成员
const handleDetelePositionTeam = (data) => {
  deletePositionTeam(data.positionId, data.userId).then((res) => {
    if (res.data.code === store.state.global.success) {
      ElMessage.success("删除成功");
      getPersonList();
    } else {
      ElMessage.error("删除失败");
    }
  });
};
// 添加
const handleAddPositionTeam = () => {
  if (data.select.select !== null) {
    addPositionTeam(data.select.select, props.positionId).then((res) => {
      if (res.data.code === store.state.global.success) {
        ElMessage.success("添加成功");
        getPersonList();
      } else {
        ElMessage.error("添加失败");
      }
    });
    data.dialog.dialogVisible = false;
  }
};
// 获得可选的人物列表
const getSelectTeamMember = () => {
  optionalPositionTeam(props.positionId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.select.postSelectList = handlePostSelectList(
        res.data.data,
        data.positionData.title
      );
    }
  });
};
// 获取负责人list
const getPersonList = () => {
  selectedPositionTeam(props.positionId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.list = handlePostList(res.data.data, data.positionData.title);
    }
  });
};
onMounted(() => {
  getPersonList();
});
</script>
<style scoped>
.item {
  padding: 20px;
  margin-bottom: 32px;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid RGB(231, 236, 251);
  box-shadow: 0 0 8px 0 hsla(0, 0%, 84.7%, 0.37);
  width: 90vh;
}
.title {
  font-weight: bold;
  font-size: 16px;
  color: #414a60;
  margin-bottom: 8px;
}
.description {
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 12px;
  color: #8d92a1;
}
.show,
.position-member,
.add {
  display: flex;
  align-items: center;
}
::v-deep .el-tag {
  padding: 0 5px;
  height: 30px;
}
.position-member {
  font-size: 13px;
  line-height: 28px;
}
.position-member img {
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 50%;
}
.add {
  color: RGB(64, 158, 255);
  margin-left: 8px;
}
.add div {
  margin-left: 5px;
}
</style>