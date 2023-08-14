<template>
  <div class="person">
    <div class="top">
      <div class="search">
        <el-input
          v-model="data.query"
          placeholder="请输入职位，公司，学校，技能，专业等关键词"
        >
          <template #append
            ><el-button
              class="search-button"
              @click="handleSearch"
              :icon="Search"
          /></template>
        </el-input>
      </div>
      <div class="right">
        <el-button class="addPerson" type="primary" @click="handleUpload"
          >添加候选人</el-button
        >
        <upload-resume ref="upload" />
      </div>
    </div>
    <div class="buttom">
      <div v-if="data.personList.length > 0">
        <div
          class="person-news"
          v-for="(item, index) in data.personList"
          :key="index"
        >
          <person-card :data="item" />
        </div>
        <div class="pages">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="data.pageNews.total"
            @current-change="handlePage"
            class="mt-4"
          />
        </div>
      </div>
      <div v-else>
        <el-empty :image-size="200" description="没有数据" />
      </div>
    </div>
  </div>
</template>
<script setup>
// 界面
import uploadResume from "@/components/enter-login/card/upload-resume.vue";
import personCard from "@/components/enter-login/card/all/person-card.vue";
import { onMounted, reactive, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
// 数据
import { personList } from "@/assets/js/test/person";
// 接口
import { selectResumeByPage } from "@/api/resume";
import store from "@/store";
const upload = ref(null);
const data = reactive({
  query: "",
  pageNews: {
    total: 0,
    page: 1,
    pageSize: 10,
  },
  personList: [],
});
// 上传简历
const handleUpload = () => {
  upload.value.data.dialogTableVisible = true;
};
// 切换分页
const handlePage = (value) => {
  data.pageNews.page = value;
  getResumeByPage();
};
const handleSearch = () => {
  data.pageNews.page=1;
  getResumeByPage();
};
const getResumeByPage = () => {
  selectResumeByPage(
    {
      page: data.pageNews.page,
      pageSize: data.pageNews.pageSize,
      state:0,
    },
    data.query
  ).then((res) => {
    console.log(res, "简历信息");
    if (res.data.code === store.state.global.success) {
      data.personList = res.data.data.data;
      data.pageNews.total = res.data.data.totalCount;
    }
  });
};
onMounted(() => {
  getResumeByPage();
});
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.search {
  width: 90%;
}
.el-input {
  height: 50px;
}
.el-button {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 20px !important;
}
::v-deep .el-input-group__append {
  color: #fff;
  background-color: RGB(64, 158, 255);
}
.person-news {
  display: flex;
  justify-content: center;
  align-items: center;
}
.person-news > div {
  width: 97%;
  min-width: 1000px;
}
.pages {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
}
.addPerson {
  padding: 10px !important;
  font-size: 14px !important;
}
</style>