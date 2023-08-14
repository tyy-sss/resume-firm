<template>
  <div class="post-news">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div class="title">
        <el-form
          ref="form"
          :model="formData.form"
          :rules="formData.rules"
          label-width="100px"
        >
          <!-- 标题1 -->
          <add-post-title :data="addPostTitleData[0]" />
          <el-form-item label="职位名称：" prop="positionName">
            <el-input
              v-model="formData.form.positionName"
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
          <!-- 标题2 -->
          <add-post-title :data="addPostTitleData[1]" />
          <div class="input">
            <el-form-item label="职位人数：" prop="hc">
              <el-input-number v-model="formData.form.hc" :step="1" :min="1" />
            </el-form-item>
            <el-form-item label="工作城市：" prop="workingCity">
              <address-card
                ref="address"
                v-model="formData.form.workingCity"
                :address="formData.form.workingCity"
                @get-address="handleChangeWorkingCity"
              />
            </el-form-item>
            <el-form-item label="工作年限：" prop="workingYears">
              <select-custom
                :selectList="formData.list.workingYears"
                :width-value="200"
                @handle-check-data="handleWorkingYearsData"
              />
            </el-form-item>
            <el-form-item label="学历要求：" prop="educationBackground">
              <select-custom
                :selectList="formData.list.educationBackground"
                :width-value="200"
                @handle-check-data="handleEducationBackgroundData"
              />
            </el-form-item>
            <el-form-item label="工作性质：" prop="type">
              <select-custom
                :selectList="formData.list.type"
                :width-value="200"
                @handle-check-data="handleTypeData"
              />
            </el-form-item>
          </div>
          <el-form-item label="希望薪资：" prop="money">
            <div class="money-item">
              <span>￥</span>
              <el-input-number
                v-model="formData.form.money.min"
                :precision="1"
                controls-position="right"
                :step="1"
                :min="0"
              />
              <span>K/月 ~ </span>
            </div>
            <div class="money-item">
              <span>￥</span>
              <el-input-number
                v-model="formData.form.money.max"
                controls-position="right"
                :precision="1"
                :step="1"
                :min="0"
              />
              <span>K/月</span>
              <span>X</span>
            </div>
            <div class="money-item">
              <el-input-number
                v-model="formData.form.money.month"
                controls-position="right"
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
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute,useRouter } from "vue-router";
// 界面
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import addPostTitle from "@/components/enter-login/card/add-post-title.vue";
import selectCustom from "@/components/common/select-custom.vue";
import addressCard from "@/components/common/address-card.vue";
// 数据
import {
  addPostTitleData,
  handlePostSelectList,
  getPostSelect,
} from "@/assets/js/data/post/post-news";
import {
  handlePostNewsData,
  handleSalaryArray,
} from "@/assets/js/views/post/post-news";
import { handleAddress } from "@/assets/js/util/address";
// 接口
import { addPosts, getEnumerate, getPosition, editPosition } from "@/api/posts";
import store from "@/store";
import { ElMessage } from "element-plus";
const route = useRoute();
const router = useRouter();
const titleValue = ref("职位信息");
const positionId = ref(route.query.positionId).value;
const form = ref(null);
const address = ref(null);
const validateMoney = (rule, value, callback) => {
  // 判断一下输入是否错误
  if (value.min > value.max) {
    callback(new Error("薪资输入错误"));
  } else {
    callback();
  }
};
const formData = reactive({
  form: {
    positionName: "",
    description: "",
    hc: 1,
    workingCity: "",
    workingYears: "",
    educationBackground: "",
    type: "",
    money: {
      min: 0,
      max: 0,
      month: 1,
    },
  },
  rules: {
    workingCity: [{ required: true, message: "请输入", trigger: "blur" }],
    workingYears: [{ required: true, message: "请输入", trigger: "blur" }],
    educationBackground: [
      { required: true, message: "请输入", trigger: "blur" },
    ],
    type: [{ required: true, message: "请输入", trigger: "blur" }],
    positionName: [
      { required: true, message: "请输入职位名称", trigger: "blur" },
    ],
    hc: [{ required: true, message: "请输入职位人数", trigger: "blur" }],
    money: [{ validator: validateMoney, trigger: "blur" }],
  },
  isCheck: false,
  list: {
    educationBackground: {},
    workingYears: {},
    type: {},
  },
});
// 下拉框数据
const handleWorkingYearsData = (data) => {
  formData.form.workingYears = data;
};
const handleEducationBackgroundData = (data) => {
  formData.form.educationBackground = data;
};
const handleTypeData = (data) => {
  formData.form.type = data;
};
// 保存职位消息
const handleChange = () => {
  form.value.validate((valid) => {
    if (valid) {
      const data = handleSalaryArray(formData.form, positionId);
      if (positionId) {
        editPosition(data).then((res) => {
          if (res.data.code === store.state.global.success) {
            ElMessage.success("修改职位成功");
            getPostInformation();
          } else {
            ElMessage.error("修改职位失败");
          }
        });
      } else {
        addPosts(data).then((res) => {
          if (res.data.code === store.state.global.success) {
            // 跳转到group界面
            const href = router.resolve({
              path: '/turn/post/group',
              query: {
                positionId: res.data.data
              },
            });
            window.open(href.href, "_self");
          } else {
            ElMessage.error("添加职位失败");
          }
        });
        // 清空界面
        form.value.resetFields();
        address.value.selectedOptions = [];
        getPostInformation();
      }
    } else {
      console.log("验证失败");
    }
  });
};
// 修改地址
const handleChangeWorkingCity = (data) => {
  formData.form.workingCity = data;
};
// 获取职位消息
const getPostInformation = () => {
  // 得到职位的所有枚举类型数据
  if (positionId) {
    getPosition(positionId).then((res) => {
      formData.form.pkPositionId = positionId;
      if (res.data.code === store.state.global.success) {
        formData.form = handlePostNewsData(res.data.data);
        address.value.selectedOptions = handleAddress(
          formData.form.workingCity
        );
        getEnumerate().then((res) => {
          if (res.data.code === store.state.global.success) {
            formData.list = getPostSelect(formData.form, res.data.data);
          }
        });
      }
    });
  } else {
    getEnumerate().then((res) => {
      if (res.data.code === store.state.global.success) {
        formData.list = handlePostSelectList(res.data.data);
      }
    });
  }
};
onMounted(() => {
  // 当获得每一个职位的数据的时候，向后端请求数据
  getPostInformation();
  formData.isCheck = true;
});
</script>
<style scoped>
.buttom {
  margin-left: 3em;
  width: 85%;
}
.input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input > .el-form-item {
  width: 50%;
}
.button {
  margin-top: 1em;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
/* 设置输入钱的输入框 */
.money-item > span {
  color: #63676f;
  font-weight: 400;
  margin: 0 5px;
}
.money-item .el-input-number {
  width: 140px;
}
</style>