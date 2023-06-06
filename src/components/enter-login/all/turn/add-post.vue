<template>
  <div class="add-post">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="title">
        <el-form ref="form" :model="formData.form" :rules="formData.rules">
          <add-post-title :data="addPostTitleData[0]" />
          <el-form-item label="职位名称：" prop="name">
            <el-input
              v-model="formData.form.name"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="职位描述：" prop="description">
            <el-input
              v-model="formData.form.description"
              placeholder="请输入职位描述"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
            ></el-input>
          </el-form-item>
          <add-post-title :data="addPostTitleData[1]" />
          <div class="input">
          <el-form-item label="职位人数：" prop="num">
            <el-input-number
                v-model="formData.form.num"
                :step="1"
                :min="1"
              />
          </el-form-item>
          <el-form-item label="工作城市：" prop="city">
            <el-cascader
              :options="regionData"
              v-model="formData.form.address"
              placeholder="请输入工作城市"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="工作年限：" prop="workYear">
            <select-custom
              :selectList="selectList.year"
              :width-value="200"
              @handle-check-data="handleYearData"
            />
          </el-form-item>
          <el-form-item label="学历要求：" prop="school">
            <select-custom
              :selectList="selectList.school"
              :width-value="200"
              @handle-check-data="handleSchoolData"
            />
          </el-form-item>
          <el-form-item label="工作性质：" prop="quality">
            <select-custom
              :selectList="selectList.quality"
              :width-value="200"
              @handle-check-data="handleQualityData"
            />
          </el-form-item>
        </div>
          <el-form-item label="希望薪资：" prop="money">
            <div class="money-item">
              <span>￥</span>
              <el-input-number
                v-model="formData.form.money.min"
                :precision="2"
                :step="1"
                :min="0"
              />
              <span>K/月 ~ </span>
            </div>
            <div class="money-item">
              <span>￥</span>
              <el-input-number
                v-model="formData.form.money.max"
                :precision="2"
                :step="1"
                :min="0"
              />
              <span>K/月</span>
              <span>X</span>
            </div>
            <div class="money-item">
              <el-input-number
                v-model="formData.form.money.time"
                :step="1"
                :min="1"
                :max="12"
              />
              <span>月</span>
            </div>
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
import { useRoute } from "vue-router";
// 界面
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import addPostTitle from '@/components/enter-login/card/add-post-title.vue';
import selectCustom from "@/components/common/select-custom.vue";
// 地址选择器
import { regionData } from "element-china-area-data";
// 数据
import {
  addPostTitleData,
  selectList,
} from "@/assets/js/data/post/add-post.js";



const route = useRoute();

const titleValue = ref("职位信息");

const form = ref(null);
const validateMoney = (rule, value, callback) =>{
    // 判断一下输入是否错误
    if(value.min > value.max){
        callback(new Error("薪资输入错误"))
    }else{
        callback();
    }
}
const formData = reactive({
  form: {
    name: "",
    description: "",
    num: 1,
    address: "",
    workYear: "",
    school: "",
    quality: "",
    money: {
      min: 0,
      max: 0,
      time: 1,
    },
  },
  rules: {
    name: [{ required: true, message: "请输入职位名称" }],
    num: [{ required: true, message: "请输入职位人数" }],
    money: [{validator: validateMoney, trigger: "blur"}]
  },
});
// 下拉宽数据
const handleYearData = (data) => {
  console.log(data);
  formData.form.workYear = data;
};
const handleSchoolData = (data) => {
  console.log(data);
  formData.form.school = data;
};
const handleQualityData = (data) => {
  console.log(data);
  formData.form.quality = data;
};

// 保存职位消息
const handleChange = () => {
    form.value.validate((valid) => {
    if (valid) {
      console.log(formData.form,"formData");
    } else {
      console.log("验证失败");
    }
  });
};

// 获取职位消息
const getPostInformation = () =>{
  const postTitle = ref(route.query.title).value;
  if(postTitle === undefined||postTitle === null||postTitle===""){
    console.log("获取职位消息")
  }
}

onMounted(()=>{
  // 当获得每一个职位的数据的时候，向后端请求数据
  getPostInformation();
})
</script>
<style scoped>
.add-post {
  padding: 20px;
}
.buttom {
  margin-left: 15%;
  width: 70%;
}
.money-item > span {
  color: #63676f;
  font-weight: 400;
  margin: 0 5px;
}
::v-deep .el-form-item__label{
    width: 100px;
}
.input{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.input > .el-form-item{
    width: 50%;
} 
.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>