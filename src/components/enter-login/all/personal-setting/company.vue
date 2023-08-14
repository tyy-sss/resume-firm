<template>
  <div class="company">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="table">
        <el-form ref="form" :model="formData.form" :rules="formData.rules">
          <el-form-item label="公司logo: " prop="companyLogo">
            <div class="item" v-if="isEditCompanyMessage">
              <div class="img" @click="openUpload">
                <img
                  v-if="formData.form.companyLogo"
                  :src="formData.form.companyLogo"
                />
              </div>
              <div>
                <my-upload
                  v-model="formData.imagecropperShow"
                  lang-type="zh"
                  img-format="png"
                  @crop-success="cropSuccess"
                ></my-upload>
              </div>
            </div>
            <div class="item" v-else>
              <div class="img">
                <img
                  v-if="formData.form.companyLogo"
                  :src="formData.form.companyLogo"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item
            label="公司名称："
            :prop="isEditCompanyMessage ? 'companyMessage' : ''"
          >
            <el-input
              v-if="isEditCompanyMessage"
              v-model="formData.form.companyName"
              placeholder="请输入"
            ></el-input>
            <div v-else class="text-show">{{ formData.form.companyName }}</div>
          </el-form-item>
          <el-form-item label="公司介绍：" prop="companyIntroduce">
            <el-input
              v-if="isEditCompanyMessage"
              v-model="formData.form.companyIntroduce"
              placeholder="请输入公司介绍"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
            ></el-input>
            <div v-else class="text-show">{{ formData.form.companyIntroduce }}</div>
          </el-form-item>
          <el-form-item v-if="isEditCompanyMessage" class="buuton">
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
import { ref, reactive, onMounted } from "vue";
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
const titleValue = ref("公司设置");
// 数据处理
import { isPermission } from "@/assets/js/util/permissions";
// 接口
import { getCompanyMessage } from "@/api/company";
// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
import store from "@/store";
const form = ref(null);
const isEditCompanyMessage = isPermission(`editCompanyMessage`);
// 初始化数据
const formData = reactive({
  form: {
    companyLogo: null,
    companyName: "",
    companyIntroduce: "",
  },
  rules: {
    companyName: [{ required: true, message: "请输入公司名称" }],
  },
  imagecropperShow: false,
});
// 打开设置头像
const openUpload = () => {
  if (isEditCompanyMessage) {
    formData.imagecropperShow = true;
  }
};
const cropSuccess = (imgDataUrl, field) => {
  //把头像设置成上传的图片
  formData.form.companyLogo = imgDataUrl;
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
// 获得公司消息
const getCompanyInformation = () => {
  getCompanyMessage().then((res) => {
    if (res.data.code === store.state.global.success) {
      formData.form = res.data.data;
      console.log(formData.form)
    }
  });
};
onMounted(() => {
  getCompanyInformation();
});
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
  width: 50px;
  height: 50px;
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
.text-show {
  color: #525f7f;
  font-size: 17px;
  font-weight: 400;
}
</style>