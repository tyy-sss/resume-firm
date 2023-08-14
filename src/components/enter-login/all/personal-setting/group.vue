<template>
  <div class="group">
    <div class="top">
      <div class="left">
        <personal-setting-header :title="titleValue" />
      </div>
      <div class="right" v-if="isPermission(`addTeamMembers`)">
        <el-button type="primary" link @click="data.form.dialogVisible = true">
          <el-icon class="icon"><CirclePlus /></el-icon>
          邀请成员</el-button
        >
        <div class="dialog">
          <el-dialog
            v-model="data.form.dialogVisible"
            title="邀请成员"
            width="30%"
            :before-close="handleCloseDialog"
          >
            <el-form
              ref="form"
              :model="data.form.formData"
              :rules="data.form.rules"
            >
              <el-form-item label="权限：" prop="roleName">
                <el-radio-group
                  v-model="data.form.formData.roleName"
                  class="ml-4"
                >
                  <div
                    class="roleNames"
                    v-for="(item, index) in data.roleNames"
                    :key="index"
                  >
                    <el-radio :label="item.value" size="large">
                      <div class="permission-item">
                        <span class="permission-value">{{ item.value }}</span>
                        <span class="description">{{ item.description }} </span>
                      </div>
                    </el-radio>
                  </div>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="受邀人姓名：" prop="userName">
                <el-input
                  v-model="data.form.formData.userName"
                  placeholder="请输入受邀人姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="受邀人邮箱：" prop="userEmail">
                <el-input
                  v-model="data.form.formData.userEmail"
                  placeholder="请输入受邀人邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="受邀人密码：" prop="password">
                <el-input
                  v-model="data.form.formData.password"
                  type="password"
                  placeholder="请输入受邀人密码"
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
        <el-table-column label="姓名" min-width="200px">
          <template #default="scope">
            <div class="message">
              <img :src="scope.row.avatar" />
              <div class="time">{{ scope.row.userName }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="roleName" label="权限" min-width="200px" />
        <el-table-column prop="userEmail" label="邮箱" min-width="300px" />
        <el-table-column label="操作" min-width="300px">
          <template #default="scope">
            <div v-if="scope.row.operate">
              <el-button link type="danger" @click="handleDetele(scope.row)"
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
import { ref, reactive, onMounted } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("团队成员");
import { ElMessage } from "element-plus";
// 验证
import { validatePass } from "@/assets/js/data/validateData";
// 数据处理
import { handleAllTeamMember } from "@/assets/js/views/group/group";
import { isPermission } from "@/assets/js/util/permissions";
// 接口
import { addTeamMemeber, selectTeamMember,deleteTeamMember } from "@/api/group";
import store from "@/store";
const data = reactive({
  tableData: [],
  form: {
    dialogVisible: false,
    formData: {
      roleName: "",
      userName: "",
      userEmail: "",
      password: "",
    },
    rules: {
      roleName: [{ required: true, message: "必须选择一个权限" }],
      userName: [{ required: true, message: "请输入受邀人姓名" }],
      userEmail: [
        {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: "change",
        },
        { required: true, message: "请输入受邀人邮箱" },
      ],
      password: [{ validator: validatePass, trigger: "blur" }],
    },
  },
  roleNames: [
    {
      value: "公司管理员",
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
// 添加团队成员
const handleAddGroup = () => {
  form.value.validate((valid) => {
    if (valid) {
      console.log(data.form.formData, "formData");
      addTeamMemeber(data.form.formData).then((res) => {
        if (res.data.code === store.state.global.success) {
          ElMessage.success("添加团队成员成功");
          getTeamMembers();
        } else {
          ElMessage.error(res.data.message);
        }
      });
      handleCloseDialog();
    } else {
      console.log("验证失败");
    }
  });
};
// 删除
const handleDetele = (data) => {
  console.log(data)
  deleteTeamMember(data.userId).then((res)=>{
     if(res.data.code === store.state.global.success){
      getTeamMembers();
     }else{
      ElMessage.error("删除失败")
     }
  })
};
// 获得所有的团队的成员
const getTeamMembers = () => {
  selectTeamMember().then((res) => {
    if (res.data.code === store.state.global.success) {
      data.tableData = handleAllTeamMember(res.data.data);
    }
  });
};
onMounted(() => {
  getTeamMembers();
});
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
.roleNames {
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
.permission-value {
  width: 80px;
  margin-left: 2px;
}
.description {
  width: 290px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #8d92a1;
}
</style>
<style scoped src="@/assets/css/common/enter-login/table-style.css">
</style>