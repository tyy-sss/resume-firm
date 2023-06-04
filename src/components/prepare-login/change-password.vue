<template>
  <div class="change-password">
    <div class="middle">
      <div class="form">
        <div class="title">
          <div class="logo">welcome</div>
          <h3 class="change-password-title">修改密码</h3>
        </div>
        <div class="form-show">
          <el-form
            ref="changePasswordForm"
            :model="formData.form"
            :rules="formData.rules"
          >
            <el-form-item prop="email">
              <el-input
                v-model="formData.form.email"
                placeholder="请输入邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="form-code">
                <el-input
                  v-model="formData.form.code"
                  placeholder="请输入验证码"
                >
                </el-input>
                <el-button
                  :disabled="formData.code.codeDisabled"
                  @click="handleGetCode"
                  >{{ formData.code.codeTime }}</el-button
                >
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="formData.form.password"
                type="password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="passwordAgain">
              <el-input
                v-model="formData.form.passwordAgain"
                type="password"
                placeholder="请再次输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div class="submit-button">
                <el-button type="primary" @click="handleChangePassWord"
                  >修改密码</el-button
                >
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="other-choose">
          <div>
            <router-link class="no-default-style" to="/login"
              >登录</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/images/change-password-img.png" />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

// 验证
import { validatePass } from "@/assets/js/data/validateData";
const changePasswordForm = ref(null);

//验证判断
const validatePass2 = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== formData.form.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};
const validateCode = (rule,value,callback)=>{
  if(value === ""){
    callback(new Error("请输入验证码"));
  }else if(formData.code.codeValue === null){
    callback(new Error("请获取验证码"));
  }else if(formData.code.codeValue !== value){
    callback(new Error("验证码错误"));
  }else{
    callback();
  }
}

// 初始化数据
const formData = reactive({
  form: {
    email: "",
    code: "",
    password: "",
    passwordAgain: "",
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
    code: [{  validator: validateCode, trigger: 'blur'  }],
    password: [{ validator: validatePass, trigger: 'blur' }],
    passwordAgain: [{ validator: validatePass2, trigger: 'blur' }],
  },
});

// 发送验证码
const handleGetCode = () => {
  let time = 60;
  //给后端发送邮箱
  const timer = setInterval(() => {
    formData.code.codeDisabled = true;
    time--;
    if (time > 0) {
      formData.code.codeTime = `${time}s后重新获取`;
    } else {
      clearInterval(timer);
      formData.code.codeDisabled = false;
      formData.code.codeTime = "获取验证码";
    }
  }, 1000);
  formData.code.codeValue = "123456";
};

//修改密码
const handleChangePassWord = () => {
  changePasswordForm.value.validate((valid) => {
    if (valid) {
      console.log("验证通过");
    } else {
      console.log("验证失败");
    }
  });
};
</script>
<style src="@/assets/css/prepare-login/change-password.css" scoped>
</style>