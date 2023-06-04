<template>
  <div class="company">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="table">
        <el-form ref="form" :model="formData.form" :rules="formData.rules">
          <el-form-item label="公司Logo：" prop="logo">
            <div class="item">
              <div class="img" @click="imagecropperShow = true">
                <img :src="formData.form.logo" />
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
          <el-form-item label="公司名称：" prop="name">
            <el-input
              v-model="formData.form.name"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="公司网站：" prop="website">
            <el-input
              v-model="formData.form.website"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码：" prop="phone">
            <el-input
              v-model="formData.form.phone"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="公司介绍：" prop="signature">
            <el-input
              v-model="formData.form.signature"
              placeholder="请输入公司介绍"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item class="buuton">
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
import { ref, reactive } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("公司设置");

// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
var imagecropperShow = ref(false);
import i from "@/assets/images/avatar.png";

// 验证
import { validatePhoneOne } from "@/assets/js/data/validateData";

const form = ref(null);

// 初始化数据
const formData = reactive({
  form: {
    logo: i,
    name: "",
    website: "",
    phone: "",
    signature: "",
  },
  rules: {
    name: [{ required: true, message: "请输入公司名称" }],
    phone: [{ validator: validatePhoneOne, trigger: "blur" }],
  },
});

const cropSuccess = (imgDataUrl, field) => {
  //把头像设置成上传的图片
  formData.form.logo = imgDataUrl;
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
</script>
<style scoped>
.company {
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
.img {
  padding: 10px;
  border: 2px solid RGB(227, 231, 237);
  display: flex;
  justify-content: center;
  align-items: center;
}
.item img {
  width: 50px;
  height: 50px;
}
.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>