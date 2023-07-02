<template>
  <div class="register">
    <div class="left">
      <img src="@/assets/images/register-left.png" />
    </div>
    <div class="middle">
      <div class="form">
        <div class="title">
          <h3 class="register-title">注册</h3>
        </div>
        <div class="form-show">
          <el-form
            ref="registerForm"
            :model="formData.form"
            :rules="formData.rules"
          >
            <el-form-item prop="userEmail">
              <div class="item">
                <span>邮箱：</span>
                <el-input
                  v-model="formData.form.userEmail"
                  placeholder="请输入邮箱"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="userName">
              <div class="item">
                <span>姓名：</span>
                <el-input
                  v-model="formData.form.userName"
                  placeholder="请输入姓名"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <div class="item">
                <span>密码：</span>
                <el-input
                  v-model="formData.form.password"
                  type="password"
                  placeholder="请输入密码"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="passwordAgain">
              <div class="item">
                <span>确认密码：</span>
                <el-input
                  v-model="formData.form.passwordAgain"
                  type="password"
                  placeholder="请输入密码"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="companyName">
              <div class="item">
                <span>公司名称：</span>
                <el-input
                  v-model="formData.form.companyName"
                  placeholder="请输入公司名称"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="submit-button">
                <el-button type="primary" @click="handleRegister"
                  >注册</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="other-choose">
          <div>
            <router-link class="no-default-style" to="/login">登录</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/register-right.png" />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import store from "@/store";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();                                                                                                                                                                                                                                                                                                                                                     
// 接口
import { register } from "@/api/user";
// 验证
import { validatePass } from "@/assets/js/data/validateData";
const registerForm = ref(null);

const validatePass2 = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== formData.form.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

// 初始化数据
const formData = reactive({
  form: {
    userEmail: "",
    userName: "",
    password: "",
    passwordAgain: "",
    companyName: "",
  },
  rules: {
    userEmail: [
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: "change",
      },
      { required: true, message: "请输入邮箱地址" },
    ],
    userName: [{ required: true, message: "请输入姓名" }],
    password: [{ validator: validatePass, trigger: "blur" }],
    passwordAgain: [{ validator: validatePass2, trigger: "blur" }],
    companyName: [{ required: true, message: "请输入公司名称" }],
  },
});

//注册
const handleRegister = () => {
  registerForm.value.validate((valid) => {
    if (valid) {
      const data = JSON.parse(JSON.stringify(formData.form));
      register(data).then((res) => {
        console.log(res);
        const code = res.data.code;
        console.log(store.state.gobal.success)
        if (code === store.state.gobal.success) {
          ElMessage.success("注册成功");
          router.push({ path: 'login' });
        } else {
          ElMessage.error(res.data.message);
        }
      });
    } else {
      console.log("验证失败");
    }
  });
};
</script>
<style src="@/assets/css/prepare-login/register.css" scoped>
</style>