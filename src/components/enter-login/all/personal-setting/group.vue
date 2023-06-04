<template>
  <div class="group">
    <div class="top">
      <div class="left">
        <personal-setting-header :title="titleValue" />
      </div>
      <div class="right">
        <el-button type="primary" link @click="data.form.dialogVisible = true">
          <el-icon class="icon"><CirclePlus /></el-icon>
          邀请成员</el-button
        >
        <div class="dialog">
          <el-dialog
            v-model="data.form.dialogVisible"
            title="邀请成员"
            width="30%"
          >
            <el-form
              ref="form"
              :model="data.form.formData"
              :rules="data.form.rules"
            >
              <el-form-item label="权限：" prop="permissions">
                <el-radio-group
                  v-model="data.form.formData.permissions"
                  class="ml-4"
                >
                  <div class="permissions" v-for="(item, index) in data.permissions" :key="index">
                    <el-radio :label="item.value" size="large">
                      <div class="permission-item">
                        <span class="permission-value">{{ item.value }}</span>
                        <span class="description">{{ item.description }} </span>
                      </div>
                    </el-radio>
                  </div>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="受邀人姓名：" prop="name">
                <el-input
                  v-model="data.form.formData.name"
                  type="name"
                  placeholder="请输入受邀人姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="受邀人邮箱：" prop="email">
                <el-input
                  v-model="data.form.formData.email"
                  placeholder="请输入受邀人邮箱"
                ></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="handleCloseDialog">取消</el-button>
                <el-button type="primary" @click="handleAddGroup">
                  添加
                </el-button>
              </span>
            </template>
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="buttom">
      <el-table :data="data.tableData" style="width: 100%">
        <el-table-column label="姓名" width="250">
          <template #default="scope">
            <div class="message">
              <img :src="scope.row.user.avatar" />
              <div class="time">{{ scope.row.user.name }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="permissions" label="权限" width="100" />
        <el-table-column prop="email" label="邮箱" width="250" />
        <el-table-column prop="status" label="状态" width="200">
          <template #default="scope">
            <div class="message">
              <div
                class="status"
                :style="{
                  background: scope.row.status.statusColor,
                }"
              />
              <div>{{ scope.row.status.information }}</div>
              <div
                :style="{
                  color: scope.row.status.statusColor,
                }"
                v-if="scope.row.status.information !== '已激活'"
                @click="handleInvite(scope.row)"
              >
                <span> [ 重发邀请 ] </span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="200px">
          <template #default="scope">
            <div v-if="scope.row.operate">
              <el-button link type="primary" @click="handleEdit"
                >编辑</el-button
              >
              <el-button link type="danger" @click="handleDetele"
                >删除</el-button
              >
            </div>
            <div v-else>-</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  <script setup>
import { ref, reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("团队成员");
import i from "@/assets/images/avatar.png";
import { ElMessage } from "element-plus";

const data = reactive({
  tableData: [
    {
      user: {
        avatar: i,
        name: "tyy",
      },
      permissions: "管理员",
      email: "3671284623957@qq.com",
      status: {
        statusColor: "RGB(80,194,134)",
        information: "已激活",
      },
      operate: false,
    },
    {
      user: {
        avatar: i,
        name: "tyy",
      },
      permissions: "管理员",
      email: "3671284623957@qq.com",
      status: {
        statusColor: "RGB(255,191,76)",
        information: "未激活",
      },
      operate: true,
    },
  ],
  form: {
    dialogVisible: false,
    formData: {
      permissions: "",
      name: "",
      email: "",
    },
    rules: {
      permissions: [{ required: true, message: "必须选择一个权限" }],
      name: [{ required: true, message: "请输入受邀人姓名" }],
      email: [
        {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: "change",
        },
        { required: true, message: "请输入受邀人邮箱" },
      ],
    },
  },
  permissions: [
    {
      value: "管理员",
      description: "所有权限，包括编辑公司信息｜管理团队成员｜管理招聘流程",
    },
    { value: "HR", description: "创建、发布、编辑职位｜安排面试｜发布Offer" },
    { value: "面试官", description: "筛选简历｜参与面试｜填写反馈" },
  ],
});

const form = ref(null);

// 关闭对话框
const handleCloseDialog = () => {
  data.form.dialogVisible = false;
  form.value.resetFields();
};
// 添加邮箱
const handleAddGroup = () => {
  form.value.validate((valid) => {
    if (valid) {
      console.log(data.form.formData, "formData");
      handleCloseDialog();
    } else {
      console.log("验证失败");
    }
  });
};
//重发邀请
const handleInvite = (data) => {
  console.log(data, "data");
  ElMessage({
    message: "重发邀请",
    type: "success",
  });
};
// 编辑
const handleEdit = () => {};
// 删除
const handleDetele = () => {};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  margin-right: 4px;
}
.buttom {
  padding: 0 20px;
}
.message {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message > div {
  margin: 5px;
  cursor: pointer;
}
.message img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.status {
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
/* 对话框 */
::v-deep .el-form-item__label {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #9fa3af;
  font-size: 14px;
}
::v-deep .el-form-item {
  display: block;
  --font-size: 14px;
  margin-bottom: 18px;
  padding: 0 2px;
}
.permissions{
  height: 30px;
}
/* 让单选框垂直展示 */
::v-deep .el-radio-group {
  display: flex;
  flex-direction: column;
}
.permission-item {
  display: flex;
  width: 400px;
}
/* 控制内容范围 */
.permission-value{
  width: 70px;
  margin-left: 2px;
}
.description {
  width: 290px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #8D92A1;
}
</style>
<style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>