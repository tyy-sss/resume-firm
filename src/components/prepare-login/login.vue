<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/images/login-background-img.png" />
    </div>
    <div class="right">
      <div class="form">
        <div class="right-title">
          <div class="logo">welcome</div>
          <h3 class="login-title">登录</h3>
        </div>
        <div class="form-show">
          <el-form
            ref="loginForm"
            :model="loginData.form"
            :rules="loginData.rules"
          >
            <el-form-item prop="userEmail">
              <template #default>
                <el-input
                  v-model="loginData.form.userEmail"
                  placeholder="请输入邮箱"
                ></el-input
              ></template>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginData.form.password"
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div class="submit-button">
                <el-button type="primary" @click="handleLogin">登录</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="other-choose">
          <div>
            <router-link class="no-default-style" to="/change-password"
              >忘记密码</router-link
            >
          </div>
          <div>
            <router-link class="no-default-style" to="/register"
              >没有账号？注册</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import router from "@/router";
import store from "@/store";
// 验证
import { validatePass } from "@/assets/js/data/validateData";
// 接口
import { login } from "@/api/user";
import { ElMessage } from "element-plus";
// 定义表单绑定的ref
const loginForm = ref(null);

// 定义初始化数据
const loginData = reactive({
  form: {
    userEmail: "",
    password: "",
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
    password: [{ validator: validatePass, trigger: "blur" }],
  },
});

//登录
const handleLogin = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      login(loginData.form).then((res) => {
        if (res.data.code === store.state.global.success) {
          // 保存token
          store.commit("setToken", res.data.data.access_token);
          // 保存refreshToken
          store.commit("setRefreshToken", res.data.data.refresh_token);
          sessionStorage.setItem("token", res.data.data.access_token);
          sessionStorage.setItem("efreshToken", res.data.data.refresh_token);
          // 保存用户信息
          sessionStorage.setItem(
            "user",
            JSON.stringify(res.data.data.userInfoDTO)
          );
          // console.log(JSON.parse(sessionStorage.getItem('user')).userEmail)
          // 保存权限消息
          store.commit("setPermissionsList", res.data.data.permissionsList);
          // 保存菜单消息
          store.commit("setMenu", res.data.data.menusList);
          // 动态添加菜单信息
          store.commit("addMenu");
          router.push({ path: "/home" });
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
<style src="@/assets/css/prepare-login/login.css" scoped>
</style>