<template>
  <div class="top">
    <div class="left">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="right">
      <el-button type="primary" link @click="data.form.dialogVisible = true">
        <el-icon class="icon"><CirclePlus /></el-icon>
        添加邮箱</el-button
      >
      <div class="dialog">
        <el-dialog
          v-model="data.form.dialogVisible"
          title="添加邮箱"
          width="30%"
        >
          <el-form
            ref="form"
            :model="data.form.formData"
            :rules="data.form.rules"
          >
            <el-form-item label="简历邮箱：" prop="email">
              <el-input v-model="data.form.formData.email" placeholder="请输入简历邮箱"></el-input>
            </el-form-item>
            <el-form-item label="邮箱密码：" prop="password">
              <el-input v-model="data.form.formData.password" type="password" placeholder="请输入邮箱密码"></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="handleCloseDialog">取消</el-button>
              <el-button type="primary" @click="handleAddEmail">
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
      <el-table-column prop="email" label="邮箱" width="400px" />
      <el-table-column prop="status" label="状态" width="400px">
        <template #default="scope">
          <div class="message">
            <div
              class="status"
              :style="{
                background: scope.row.status.statusColor,
              }"
            />
            <div>{{ scope.row.status.information }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="200px">
        <template #default="scope">
          <div v-if="scope.row.operate">
            <el-button link type="primary" @click="handleEdit">编辑</el-button>
            <el-button link type="danger" @click="handleDetele">删除</el-button>
          </div>
          <div v-else>-</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  <script setup>
import { ref, reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("简历邮箱");

const form =ref(null)
import { validatePass } from "@/assets/js/data/validateData";
const data = reactive({
  tableData: [
    {
      email: "3671284623957@qq.com",
      status: {
        statusColor: "RGB(80,194,134)",
        information: "使用中",
      },
      operate: true,
    },
  ],
  form: {
    dialogVisible: false,
    formData: {
      email: "",
      password: "",
    },
    rules: {
      email: [
        {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: "change",
        },
        { required: true, message: "请输入邮箱地址" },
      ],
      password: [
        { required: true, message: "请输入邮箱密码" },
        { validator: validatePass, trigger: "blur" },
      ],
    },
  },
});

// 编辑
const handleEdit = () => {};
// 删除
const handleDetele = () => {};
// 关闭对话框
const handleCloseDialog = () => {
  data.form.dialogVisible = false;
  form.value.resetFields();
};
// 添加邮箱
const handleAddEmail = () => {
  form.value.validate((valid) => {
    if (valid) {
      console.log(data.form.formData,"formData");
      handleCloseDialog();
    } else {
      console.log("验证失败");
    }
  });
};
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
  height: 32px;
  color: #9fa3af;
  font-size: 14px;
}
::v-deep .el-form-item {
  display: block;
    --font-size: 14px;
    margin-bottom: 18px;
    padding: 0 5px;
}
</style>
<style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>