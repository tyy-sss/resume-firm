<template>
  <div class="safe">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="table">
        <el-form ref="form" :model="formData.form" :rules="formData.rules">
          <el-form-item label="当前密码：" prop="password">
            <el-input v-model="formData.form.password" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item label="设置密码：" prop="nowPassword">
            <el-input v-model="formData.form.nowPassword" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确定密码：" prop="passwordAgain">
            <el-input v-model="formData.form.passwordAgain" placeholder="请输入" type="password"></el-input>
          </el-form-item>
          <el-form-item class="buuton">
            <div class="button">
              <el-button type="primary" @click="handleChange"
                >保存</el-button
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("安全设置");

const form = ref(null);

// 验证
import { validatePass } from "@/assets/js/data/validateData";
const validatePass2 = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== formData.form.nowPassword) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

// 初始化数据
const formData = reactive({
  form: {
    password: "",
    nowPassword:"",
    passwordAgain: "",
  },
  rules: {
    password: [{ required: true,  message: "请输入密码" }],
    nowPassword: [{ required: true,  message: "请设置密码" },{ validator: validatePass, trigger: "blur" }],
    passwordAgain: [{ required: true,  message: "请确定密码" },{ validator: validatePass2, trigger: "blur" }],
  },
});

//修改消息
const handleChange = () => {
  form.value.validate((valid) => {
    if (valid) {
      console.log("验证通过");
    } else {
      console.log("验证失败");
    }
  });
};
</script>
<style scoped>
.safe{
  width: 700px;
}
::v-deep .el-form-item__label {
  display: flex;
  min-width: 100px;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  color: #9fa3af;
  font-size: 14px;
}
.el-form-item {
  padding: 5px;
}
.buttom {
  padding:20px 40px;
}
.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>