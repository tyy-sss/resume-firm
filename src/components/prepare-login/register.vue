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
            <el-form-item prop="email">
              <div class="item">
                <span>邮箱：</span>
                <el-input
                  v-model="formData.form.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="name">
              <div class="item">
                <span>姓名：</span>
                <el-input
                  v-model="formData.form.name"
                  placeholder="请输入姓名"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="phone">
              <div class="item">
                <span>电话：</span>
                <el-input
                  v-model="formData.form.phone"
                  placeholder="请输入电话"
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

// 验证
import { validatePhone,validatePass } from "@/assets/js/data/validateData";
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
    email: "",
    name: "",
    phone: "",
    password: "",
    passwordAgain: "",
    companyName: "",
  },
  code: {
    codeTime: "获取验证码",
    codeDisabled: false,
    codeValue: null,
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
    name: [{ required: true, message: "请输入姓名"}],
    phone: [{ validator: validatePhone, trigger: "blur"}],
    password: [{ validator: validatePass, trigger: "blur" }],
    passwordAgain: [{ validator: validatePass2, trigger: "blur" }],
    companyName: [{ required: true, message: "请输入公司名称"}],
  },
});

//注册
const handleRegister = () => {
  registerForm.value.validate((valid) => {
    if (valid) {
      console.log("验证通过");
    } else {
      console.log("验证失败");
    }
  });
};
</script>
<style src="@/assets/css/prepare-login/register.css" scoped>
</style>