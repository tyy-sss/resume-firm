<template>
  <div class="self">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="table">
        <el-form ref="form" :model="formData.form" :rules="formData.rules">
          <el-form-item label="用户头像：" prop="accountPicture">
            <div class="item">
              <div><img :src="formData.form.accountPicture" /></div>
              <div>
                <el-button type="primary" @click="imagecropperShow = true"
                  >修改头像</el-button
                >
              </div>
              <div>
                <my-upload
                  v-model="imagecropperShow"
                  lang-type="zh"
                  img-format="png"
                  @crop-success="cropSuccess"
                ></my-upload>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="用户名称：" prop="userName">
            <el-input
              v-model="formData.form.userName"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱：" prop="userEmail">
            <el-input v-model="formData.form.userEmail" disabled></el-input>
          </el-form-item>
          <el-form-item label="个人签名：" prop="personalSignature">
            <el-input
              v-model="formData.form.personalSignature"
              placeholder="请输入个人签名"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="button">
              <el-button type="primary" @click="handleChange">保存</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("个人设置");
// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
var imagecropperShow = ref(false);
import i from "@/assets/images/avatar.png";
const form = ref(null);
// 数据处理
import { getUserNews } from "@/assets/js/util/user";
// 初始化数据
const formData = reactive({
  form: {
    accountPicture: i,
    userEmail: "",
    userName: "",
    personalSignature: "",
  },
  rules: {
    userName: [{ required: true, message: "请输入姓名" }],
  },
});

const cropSuccess = (imgDataUrl, field) => {
  //把头像设置成上传的图片
  formData.form.accountPicture = imgDataUrl;
};

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
onMounted(() => {
  formData.form = getUserNews();
});
</script>
<style scoped>
.self {
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
  padding: 20px 40px;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.item img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
}
.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>